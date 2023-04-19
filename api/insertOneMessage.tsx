import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { uuid } from 'uuidv4';

export const insertOneMessage = async (payload: string, jwtToken: string) => {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  const uid = uuid();

  const { data } = await client.mutate({
    variables: {
      payload: payload,
      uid: uid,
    },
    mutation: gql`
      mutation ($payload: String!, $uid: String!) {
        createMessage(data: { payload: $payload, uid: $uid }) {
          data {
            id
            attributes {
              payload
              uid
            }
          }
        }
      }
    `,
  });
  return data;
};
