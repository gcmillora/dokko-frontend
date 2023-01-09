import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const findOnePatient = async (patient_id: string) => {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    variables: {
      uid: patient_id,
    },
    query: gql`
      query ($uid: String!) {
        patients(filters: { uid: { eq: $uid } }) {
          data {
            id
            attributes {
              uid
              fullName
              email
              address
              medical_redicord {
                data {
                  id
                  attributes {
                    uid
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
