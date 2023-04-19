import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const insertConversation = async (
  subject: string,
  patientID: string,
  doctorID: string,
  messageID: string
) => {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.mutate({
    variables: {
      subject: subject,
      patientID: patientID,
      doctorID: doctorID,
      messageID: messageID,
    },
    mutation: gql`
      mutation ($subject: String!, $patientID: ID!, $doctorID: ID!) {
        createConversation(
          data: {
            subject: $subject
            patient: $patientID
            doctor: $doctorID
            messages: [$messageID]
          }
        ) {
          data {
            id
            attributes {
              subject
            }
          }
        }
      }
    `,
  });
  return data;
};
