import type { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { QueryClientProvider } from 'react-query'
import { SessionProvider } from 'next-auth/react'
import { ApolloProvider } from '@apollo/client'
import client from '@/lib/queryClient'
import initializeApollo from '@/lib/apolloClient'
import useGA from '@/hooks/useGA'
import muiTheme from '@/lib/muiTheme'
import Auth from '@/components/provider/Auth'


import '@/styles/globals.scss'
import {ThemeProvider} from '@mui/material/styles'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  
  useGA() 

  return (
    // recoil
    <RecoilRoot>
      {/* apollo */}
      <ApolloProvider client={ initializeApollo() }>
        {/* react-query */}
        <QueryClientProvider client={client}>
          <SessionProvider session={ session }>
            <Auth>
              {/* Mui */}
              <ThemeProvider theme={ muiTheme }>
                {getLayout(<Component {...pageProps} />)}
              </ThemeProvider>
            </Auth>
          </SessionProvider>
        </QueryClientProvider>
      </ApolloProvider>
    </RecoilRoot>
  )
}

export default MyApp