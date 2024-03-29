//find all appointments of a doctor with pagination using graphql

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const findAllAppointmentsByDoctor = async (
  doctor_id: string,
  jwtToken: string
) => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_BACKEND_API_URL,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  console.log('doctor_id: ', doctor_id);
  console.log(jwtToken);
  const { data } = await client.query({
    variables: {
      uid: doctor_id,
    },
    query: gql`
      query ($uid: String!) {
        appointments(filters: { doctor: { uid: { eq: $uid } } }) {
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
              status
              condition
            }
          }
        }
      }
    `,
  });
  console.log('appointments of a doctor: ', data);
  return data;
};
