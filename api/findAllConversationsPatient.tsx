import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const findAllConversationsPatient = async (
  patient_id: string,
  jwtToken: string
) => {
  console.log(patient_id);
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    variables: {
      uid: patient_id,
    },
    query: gql`
      query ($uid: String!) {
        conversations(
          filters: { patient: { uid: { eq: $uid } } }
          sort: "createdAt:desc"
        ) {
          data {
            id
            attributes {
              doctor {
                data {
                  id
                  attributes {
                    fullName
                    profilepicture {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
              patient {
                data {
                  id
                  attributes {
                    fullName
                  }
                }
              }
              messages {
                data {
                  id
                  attributes {
                    payload
                    uid
                    createdAt
                  }
                }
              }
              createdAt
              subject
            }
          }
        }
      }
    `,
  });
  return data;
};
