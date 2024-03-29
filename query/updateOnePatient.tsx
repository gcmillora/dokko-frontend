import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const updateOnePatient = async (
  patient_id: string,
  jwtToken: string,
  patient: any
) => {
  console.log('jwtToken: ', jwtToken);
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_BACKEND_API_URL,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  console.log('patient: ', patient_id);
  console.log('patient: ', patient);
  const { data } = await client.mutate({
    variables: {
      id: patient_id,
      fullName: patient.fullName,
      email: patient.email,
      phoneNumber: patient.phoneNumber,
      address: patient.address,
    },
    mutation: gql`
      mutation (
        $id: ID!
        $fullName: String!
        $email: String!
        $phoneNumber: String!
        $address: String!
      ) {
        updatePatient(
          id: $id
          data: {
            fullName: $fullName
            email: $email
            phoneNumber: $phoneNumber
            address: $address
          }
        ) {
          data {
            id
            attributes {
              uid
              fullName
              email
              address
            }
          }
        }
      }
    `,
  });
  console.log('data: ', data);
  return data;
};
