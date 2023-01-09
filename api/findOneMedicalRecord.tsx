//find one medical record using graphql

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const findOneMedicalRecord = async (medical_id: string) => {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    variables: {
      uid: medical_id,
    },
    query: gql`
      query ($uid: String!) {
        medicalRedicords(filters: { uid: { eq: $uid } }) {
          data {
            id
            attributes {
              uid
              sex
              height
              weight
              bloodtype
              allergies
              birthdate
            }
          }
        }
      }
    `,
  });
  console.log(data);
  return data;
};
