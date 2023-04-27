import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

//using graphql
export const findDoctors = async (jwtToken: string, selected: string) => {
  //use graphql
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  console.log(selected);
  const { data } = await client.query({
    variables: {
      specialty: selected,
    },
    query: gql`
      query ($specialty: String!) {
        doctors(filters: { specialty: { eq: $specialty } }) {
          data {
            id
            attributes {
              uid
              fullName
            }
          }
        }
      }
    `,
  });

  return data;
};
