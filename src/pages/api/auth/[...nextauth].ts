import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'
import FacebookProvider from 'next-auth/providers/facebook'
import type { JWT } from "next-auth/jwt";
import * as jsonwebtoken from "jsonwebtoken";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string
    }),
    TwitterProvider({
      clientId: process.env.NEXT_PUBLIC_TWITTER_CLIENT as string,
      clientSecret: process.env.NEXT_PUBLIC_TWITTER_SECRET as string
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT as string,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_SECRET as string
    })
  ],
  secret: process.env.SECRET,
  session: { strategy: "jwt" },
  jwt: {
    encode: ({ secret, token }) => {
      const encodedToken = jsonwebtoken.sign(token!, secret, {
        algorithm: "HS256",
      });
      return encodedToken;
    },
    decode: async ({ secret, token }) => {
      const decodedToken = jsonwebtoken.verify(token!, secret, {
        algorithms: ["HS256"],
      });
      return decodedToken as JWT;
    },
  },
  callbacks: {
    async jwt({ token }) {
      return {
        ...token,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["user"],
          "x-hasura-default-role": "user",
          "x-hasura-role": "user",
          "x-hasura-user-id": token.sub,
        },
      };
    },
    session: async ({ session, token }) => {
      if (session) {
        const encodedToken = jsonwebtoken.sign(token!, process.env.SECRET as string, {
          algorithm: "HS256",
        });

        const query = `query GetProfiles($id: String!) {
          profiles_by_pk(id: $id) {
            username
            avatar
          }
        }`;

        const data = await fetch(process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ encodedToken }`
          },
          body: JSON.stringify({
            query,
            variables: {
              id: token.sub
            },
          })
        })

        const result = await data.json()

        if(!result.data.profiles_by_pk) {
          const mutate = `mutation InsertProfiles($username: String) {
            insert_profiles_one(object: {username: $username}) {
              username
              id
            }
          }`;

          await fetch(process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${ encodedToken }`
            },
            body: JSON.stringify({
              query: mutate,
              variables: {
                username: token.name
              },
            })
          })

          session.accessToken = encodedToken
          session.id = token.sub!;
          session.username = token.name;
          session.avatar = undefined;
          
          return session;
          
        } else {
          session.accessToken = encodedToken
          session.id = token.sub!;
          session.username = result.data.profiles_by_pk.username;
          session.avatar = result.data.profiles_by_pk.avatar;

          return session;
        }
      }

      return session
    },
  }
})