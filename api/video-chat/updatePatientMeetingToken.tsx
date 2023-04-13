import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const updatePatientMeetingToken = async (
  token: string,
  patientID: string
) => {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
  });

  console.log('updating patient meeting token');
  console.log(patientID);

  const { data } = await client.mutate({
    variables: {
      id: patientID,
      meeting_token: token,
    },
    mutation: gql`
      mutation ($id: ID!, $meeting_token: String!) {
        updatePatient(id: $id, data: { meeting_token: $meeting_token }) {
          data {
            id
            attributes {
              uid
              meeting_token
            }
          }
        }
      }
    `,
  });
  console.log(data);
  return data;
};
