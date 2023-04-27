//find past prescriptions of a patient with limit 5

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const findPastPrescriptions = async (patient_id: string) => {
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
        prescriptions(
          filters: { patient: { uid: { eq: $uid } } }
          pagination: { limit: 5 }
        ) {
          data {
            id
            attributes {
              uid
              patient {
                data {
                  attributes {
                    uid
                    fullName
                  }
                }
              }
              doctor {
                data {
                  attributes {
                    uid
                    fullName
                  }
                }
              }
              appointment {
                data {
                  attirbutes {
                    uid
                    appointmentDate
                    condition
                    typeOfVisit
                  }
                }
              }
              prescription
            }
          }
        }
      }
    `,
  });

  return data;
};
