import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const updatePatientMeetingToken = async (
  token: string,
  appointmentID: string
) => {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
  });

  console.log('updating patient meeting token');
  console.log(appointmentID);

  const { data } = await client.mutate({
    variables: {
      id: appointmentID,
      meeting_token: token,
    },
    mutation: gql`
      mutation ($id: ID!, $meeting_token: String!) {
        updateAppointment(id: $id, data: { patient_tkn: $meeting_token }) {
          data {
            id
            attributes {
              uid
              patient_tkn
            }
          }
        }
      }
    `,
  });
  console.log(data);
  return data;
};
