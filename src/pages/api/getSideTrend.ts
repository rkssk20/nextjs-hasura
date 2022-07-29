import type { NextApiRequest, NextApiResponse } from "next";
import { BetaAnalyticsDataClient } from '@google-analytics/data'

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.NEXT_PUBLIC_GA_EMAIL,
    private_key: process.env.NEXT_PUBLIC_GA_PRIVATE_KEY?.replace(/\\n/g, '\n')
  }
});

const getSideTrend = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '2022-06-28',
          endDate: 'today',
        },
      ],
      dimensions: [
        {
          name: 'pagePath',
        },
      ],
      dimensionFilter: {
        filter: {
          stringFilter: {
            value: 'article',
            matchType: 'CONTAINS',
          },
          fieldName: 'pagePath',
        },
      },
      metrics: [{
        name: "screenPageViews",
      }],
      limit: 5
    })

    let array: any[] = []
        
    response.rows?.map((item: any) => (
      array.push(item.dimensionValues[0].value.replace('/article/', ''))
    ))

    const data = fetch(process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          query GetSideTrend($_in: [String!]!) {
            articles(where: {id: {_in: $_in}}) {
              id
              title
              image
              profile {
                username
              }
            }
          }
        `,
        variables: {
          _in: array
        },
      })
    })

    const result = await (await data).json()

    // 一日キャッシュ
    res.setHeader('Cache-Control', 's-maxage=86400');
    res.status(200).json({
      response: result
    })
  } catch {
    res.status(400).json({
      error: {
        message: 'エラーが発生しました。'  
      }
    })
  }
}

export default getSideTrend