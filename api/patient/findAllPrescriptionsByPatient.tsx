//find all prescriptions for a patient with pagination

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const findAllPrescriptions = async (
  patient_id: string,
  page: number
) => {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    variables: {
      uid: patient_id,
      page: page,
    },
    query: gql`
      query ($uid: String!, $page: Int!) {
        prescriptions(
          filters: { patient: { uid: { eq: $uid } } }
          pagination: { page: $page, pageSize: 8 }
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
                  attributes {
                    uid
                    appointmentDate
                    condition
                    typeOfVisit
                  }
                }
              }
              prescription
              diagnosis
            }
          }
          meta {
            pagination {
              total
            }
          }
        }
      }
    `,
  });
  console.log('prescription data: ', data);
  return data;
};
