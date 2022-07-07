import { ApolloClient, NormalizedCacheObject, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context'
import { getSession } from "next-auth/react";
import cache from '@/lib/apolloCache'

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";
let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const authLink = setContext(async() => {
  const session = await getSession();

  const token = session?.accessToken;
  
  return {
    headers: token ? {
      authorization: `Bearer ${token}`
    } : null
  }
});

const createApolloClient = () => {
  const newHttpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.concat(newHttpLink),
    cache: cache
  });
};

const initializeApollo = () => {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (typeof window === "undefined") return _apolloClient

  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export default initializeApollo