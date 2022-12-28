export type Patient = {
  uid: string;
  fullName: string;
  email: string;
  address: string;
  status: string;
};

export type Doctor = {
  uid: string;
  fullName: string;
  email: string;
  address: string;
  contact: string;
  status: string;
  specialization: string;
};

export type Appointment = {
  uid: string;
  patient: {};
  doctor: {};
  appointmentDate: string;
  typeOfVisit: string;
  status: string;
  notes: string;
};

export type CreatePatientInput = {
  fullName: String;
  email: String;
  address: String;
  status: Boolean;
};

export type Prescription = {
  uid: string;
  patient: {};
  doctor: {};
  appointment: {};
  prescription: string;
  status: boolean;
};
