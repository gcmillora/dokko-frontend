import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const updateConversationMessages = async (
  messagesID: any[],
  conversationID: string
) => {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.mutate({
    variables: {
      messagesID: messagesID,
      conversationID: conversationID,
    },
    mutation: gql`
      mutation ($messagesID: [ID]!, $conversationID: ID!) {
        updateConversation(
          data: { messages: $messagesID }
          id: $conversationID
        ) {
          data {
            id
            attributes {
              messages {
                data {
                  id
                  attributes {
                    payload
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
  return data;
};
