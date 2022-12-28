import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const findPastAppointments = async (patient_id: string) => {
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
        appointments(filters: { patient: { uid: { eq: $uid } }, appointmentDate: { lt: "${today.toISOString()}"}}) {
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
                    specialty
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
  console.log(data);
  return data;
};
