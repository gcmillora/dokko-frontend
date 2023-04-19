import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

//add error handling for graphql
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
              phoneNumber
              profilepicture {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
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
