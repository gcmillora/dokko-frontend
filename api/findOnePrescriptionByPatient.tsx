//find one prescription by patient

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const findOnePrescription = async (uid: string) => {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
  });
  console.log('uid test:', uid);

  const { data } = await client.query({
    variables: {
      uid: uid,
    },
    query: gql`
      query ($uid: String!) {
        prescriptions(filters: { uid: { eq: $uid } }) {
          data {
            id
            attributes {
              uid
              patient {
                data {
                  id
                  attributes {
                    uid
                    fullName
                    medical_redicord {
                      data {
                        id
                        attributes {
                          uid
                          sex
                          weight
                          height
                          allergies
                          bloodtype
                        }
                      }
                    }
                  }
                }
              }
              doctor {
                data {
                  id
                  attributes {
                    uid
                    fullName
                  }
                }
              }
              appointment {
                data {
                  attributes {
                    uid
                    appointmentDate
                    condition
                    typeOfVisit
                  }
                }
              }
              prescription
              diagnosis
            }
          }
        }
      }
    `,
  });
  console.log('medical record: ', data);
  return data;
};
