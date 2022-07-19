import { useEffect } from "react"
import { useLazyQuery } from "@apollo/client"
import { useSetRecoilState } from "recoil"
import { GET_TREND } from "@/graphql/queries"
import { GetTrendQuery } from "@/types/generated/graphql"
import { notificateState } from "@/lib/recoil"

const useTrend = () => {
  const setNotificate = useSetRecoilState(notificateState)

  const [firstQuery, { data }] = useLazyQuery<GetTrendQuery>(GET_TREND, {
    onError: () => {
      setNotificate({
        open: true,
        message: 'エラーが発生しました'
      })
    }
  })

  useEffect(() => {
    (async() => {
      try {
        const res = await fetch(`/api/getTrend`)
    
        const gaRes = await res.json()
        
        let array: any[] = []
        
        gaRes.response.map((item: any) => (
          array.push(item.dimensionValues[0].value.replace('/article/', ''))
        ))

        firstQuery({
          variables: {
            _in: array
          }
        })
      } catch (error) {
        throw error
      }
    })()
  }, [])

  return data
}

export default useTrend