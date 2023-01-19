import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const findUpcomingAppointments = async (patient_id: string) => {
  const today = new Date();
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
        appointments(filters: { patient: { uid: { eq: $uid } }, appointmentDate: { gt: "${today.toISOString()}"}},pagination: {limit:4}) {
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
