//find upcoming appointments of doctor with limit 5 using graphql

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const findUpcomingAppointmentsDoctor = async (
  doctor_id: string,
  jwtToken: string
) => {
  const today = new Date();
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });

  const { data } = await client.query({
    variables: {
      uid: doctor_id,
    },
    query: gql`
      query ($uid: String!) {
        appointments(filters: { doctor: { uid: { eq: $uid } }, appointmentDate: { gt: "${today.toISOString()}"}}) {
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
              appointmentDate
              typeOfVisit
              status
              condition
            }
          }
        }
      }
    `,
  });

  return data;
};
