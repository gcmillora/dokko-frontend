//find one doctor using graphql

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const findOneDoctor = async (doctor_id: string) => {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    variables: {
      uid: doctor_id,
    },
    query: gql`
      query ($uid: String!) {
        doctors(filters: { uid: { eq: $uid } }) {
          data {
            id
            attributes {
              uid
              fullName
              email
              meeting_token
              profilepicture {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
  return data;
};
