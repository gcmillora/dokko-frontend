import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import PatientsTable from '../../../components/doctor_patients/table';
import PATIENTS_QUERY from './query';

const fetchPatients = async () => {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: PATIENTS_QUERY,
  });

  return data.patients;
};

async function Page() {
  const result = await fetchPatients();

  const patients = result.data.map((patient: any) => {
    return {
      fullName: patient.attributes.fullName,
      uid: patient.attributes.uid,
      email: patient.attributes.email,
      address: patient.attributes.address,
      status: patient.attributes.status,
    };
  });
  const data = [patients];
  console.log('mapped patients', patients);
  return <PatientsTable patients={patients} />;
}

export default Page;
