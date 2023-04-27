//search prescription through appointment id using graphql

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const searchPrescription = async (appointment_id: string) => {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    variables: {
      uid: appointment_id,
    },
    query: gql`
      query ($uid: String!) {
        prescriptions(filters: { appointment: { uid: { eq: $uid } } }) {
          data {
            id
          }
        }
      }
    `,
  });
  console.log(data);
  return data;
};
