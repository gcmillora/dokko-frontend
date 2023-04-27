//find all appointments with pagination using graphql for a patient

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const findAllAppointmentsDoctorPgn = async (
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
      page: page,
    },
    query: gql`
      query ($uid: String!, $page: Int!) {
        appointments(
          filters: { doctor: { uid: { eq: $uid } } }
          pagination: { page: $page, pageSize: 8 }
          sort: "appointmentDate:desc"
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
              appointmentDate
              typeOfVisit
              status
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
  console.log(data);
  return data;
};
