//update prescription using graphql

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const updateOnePrescription = async (
  diagnosis: string,
  prescription: string,
  prescription_id: string,
  notes: string
) => {
  //use error policy : all
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
  });
  console.log('prescription: ', prescription_id);
  console.log('prescription: ', diagnosis);
  console.log('prescription: ', prescription);
  console.log('prescription: ', notes);
  const { data } = await client.mutate({
    variables: {
      id: prescription_id,
      diagnosis: diagnosis,
      prescription: prescription,
      notes: notes,
    },
    mutation: gql`
      mutation (
        $id: ID!
        $diagnosis: String!
        $prescription: String!
        $notes: String!
      ) {
        updatePrescription(
          id: $id
          data: {
            diagnosis: $diagnosis
            prescription: $prescription
            notes: $notes
          }
        ) {
          data {
            id
            attributes {
              uid
              diagnosis
              prescription
              notes
            }
          }
        }
      }
    `,
  });
  console.log(data);
  return data;
};
