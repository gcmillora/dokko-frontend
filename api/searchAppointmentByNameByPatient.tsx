//filter appointments by name by doctor using graphql with pagination $page

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const searchAppointmentByNameByDoctor = async (
  doctor_id: string,
  name: string,
  jwtToken: string,
  page: number
) => {
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
      name: name,
      page: page,
    },
    query: gql`
      query ($uid: String!, $name: String!, $page: Int!) {
        appointments(
          filters: {
            doctor: { uid: { eq: $uid } }
            patient: { fullName: { contains: $name } }
          }
          pagination: { page: $page, pageSize: 10 }
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
              active
              condition
            }
          }
        }
      }
    `,
  });
  return data;
};
