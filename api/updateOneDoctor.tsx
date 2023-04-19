import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const updateOneDoctor = async (
  doctor_id: string,
  jwtToken: string,
  doctor: any
) => {
  console.log('jwtToken: ', jwtToken);
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });

  const { data } = await client.mutate({
    variables: {
      id: doctor_id,
      fullName: doctor.fullName,
      email: doctor.email,
      address: doctor.address,
    },
    mutation: gql`
      mutation (
        $id: ID!
        $fullName: String!
        $email: String!
        $address: String!
      ) {
        updateDoctor(
          id: $id
          data: { fullName: $fullName, email: $email, address: $address }
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
