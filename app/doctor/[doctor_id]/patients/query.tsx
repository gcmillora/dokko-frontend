import { gql } from '@apollo/client';

const PATIENTS_QUERY = gql`
  query {
    patients {
      data {
        attributes {
          fullName
          uid
          email
          address
          status
        }
      }
    }
  }
`;

export default PATIENTS_QUERY;
