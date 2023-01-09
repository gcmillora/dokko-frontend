//find all available appointment dates using graphql for a patient

import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const findAllAvailableAppointmentDate = async (patient_id: string) => {
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
        appointments(filters: { patient: { uid: { eq: $uid } } }) {
          data {
            id
            attributes {
              uid
              patient {
                data {
                  attributes {
                    uid
                    fullName
                  }
                }
              }
              doctor {
                data {
                  attributes {
                    uid
                    fullName
                  }
                }
              }
              appointmentDate
              typeOfVisit
              active
              condition
            }
          }
        }
      }
    `,
  });
  let allSelectedDates = [];
  for (let i = 0; i < data.appointments.data.length; i++) {
    allSelectedDates.push(data.appointments.data[i].attributes.appointmentDate);
  }
  return allSelectedDates;
};
