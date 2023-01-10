//update an appointment using graphql

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const updateOneAppointment = async (
  appointment_id: string,
  jwtToken: string,
  appointment: any
) => {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  console.log('appointment: ', appointment_id);
  console.log('appointment: ', appointment);
  const { data } = await client.mutate({
    variables: {
      id: appointment_id,
      active: appointment.active,
      condition: appointment.condition,
      generalPurpose: appointment.generalPurpose,
      notes: appointment.notes,
      typeOfVisit: appointment.typeOfVisit,
    },
    mutation: gql`
      mutation (
        $id: ID!
        $active: Boolean!
        $condition: String!
        $generalPurpose: String!
        $notes: String!
        $typeOfVisit: String!
      ) {
        updateAppointment(
          id: $id
          data: {
            active: $active
            condition: $condition
            generalPurpose: $generalPurpose
            notes: $notes
            typeOfVisit: $typeOfVisit
          }
        ) {
          data {
            id
            attributes {
              uid
              patient {
                data {
                  id
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
              generalPurpose
              notes
            }
          }
        }
      }
    `,
  });

  return data;
};
