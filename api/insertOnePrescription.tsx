//insert a prescription into the database using graphql

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { uuid } from 'uuidv4';

export const insertOnePrescription = async (
  jwtToken: string,
  patient_id: string,
  doctor_id: string,
  prescription: string,
  status: boolean,
  appointment_id: string,
  notes: string
) => {
  const uid = uuid();
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  const { data } = await client.mutate({
    variables: {
      uid: uid,
      patient_id: patient_id,
      doctor_id: doctor_id,
      prescription: prescription,
      status: status,
      appointment_id: appointment_id,
      notes: notes,
    },
    mutation: gql`
      mutation (
        $uid: String!
        $patient_id: ID!
        $doctor_id: ID!
        $prescription: String!
        $status: Boolean!
        $appointment_id: ID!
        $notes: String
      ) {
        createPrescription(
          data: {
            uid: $uid
            patient: $patient_id
            doctor: $doctor_id
            prescription: $prescription
            status: $status
            appointment: $appointment_id
            notes: $notes
          }
        ) {
          data {
            id
            attributes {
              uid
              patient {
                id
              }
              doctor {
                id
              }
              prescription
              status
              appointment {
                id
              }
              notes
            }
          }
        }
      }
    `,
  });

  return data;
};
