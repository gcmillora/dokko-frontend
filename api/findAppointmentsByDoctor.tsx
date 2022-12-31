//find all appointments of a doctor without pagination using graphql

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const findAllAppointmentsByDoctor = async (
  doctor_id: string,
  page: number
) => {
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
        appointments(
          filters: { doctor: { uid: { eq: $uid } } }
          sort: "appointmentDate:desc"
        ) {
          data {
            id
            attributes {
              uid
              doctor {
                data {
                  attributes {
                    uid
                    fullName
                  }
                }
              }
              appointmentDate
              typeOfVisit
              active
              condition
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
  console.log('appointments of a doctor: ', data);
  return data;
};
