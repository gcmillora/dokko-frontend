'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { findAllConversationsPatient } from '../../../../api/findAllConversationsPatient';
import { findAllDoctors } from '../../../../api/findAllDoctors';
import { findOnePatient } from '../../../../api/findOnePatient';
import { insertConversation } from '../../../../api/insertConversation';
import { insertOneMessage } from '../../../../api/insertOneMessage';

interface pageProps {
  params: {
    patient_id: string;
  };
}

export default function Page({ params }: pageProps) {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<any>();
  const [patient, setPatient] = useState<any>();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [selectedConversation, setSelectedConversation] = useState<any>();
  const [showConversation, setShowConversation] = useState(false);
  const [conversations, setConversations] = useState<any[]>([]);

  const handleDoctorChange = (e: any) => {
    const doctor = doctors.find((doctor) => doctor.id === e.target.value);
    console.log(doctor);
    setSelectedDoctor(doctor);
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken') || '';
    const fetchDoctors = async () => {
      const doctors = await findAllDoctors(jwtToken);
      setDoctors(doctors.doctors.data);
      setSelectedDoctor(doctors.doctors.data[0]);
      console.log(doctors.doctors.data);
    };
    fetchDoctors();
  }, []);

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken') || '';
    findAllConversationsPatient(params.patient_id, jwtToken).then((data) => {
      setConversations(data.conversations.data);
      console.log(data.conversations.data);
    });
  }, []);

  useEffect(() => {
    findOnePatient(params.patient_id).then((data) => {
      setPatient(data.patients.data[0]);
    });
  }, []);

  async function handleMessageSubmit() {
    console.log('message submitted');
    const jwtToken = localStorage.getItem('jwtToken') || '';
    const responseMessage = await insertOneMessage(message, jwtToken);
    const responseConversation = await insertConversation(
      subject,
      patient.id,
      selectedDoctor.id,
      responseMessage.createMessage.data.id
    );
    console.log(responseConversation);
  }
  const handleSelectedConversation = (conversationID: any) => {
    const conversation = conversations.find(
      (conversation) => conversation.id === conversationID
    );
    console.log(conversation);
    setSelectedConversation(conversation);
  };

  return (
    <div className="grid grid-cols-3 w-full h-screen">
      <div className="col-span-1 border border-stroke pt-8 px-4">
        <div className="mb-6">
          <div className="flex  flex-col mt-4 pb-2 mb-4 ml-2 border-b border-stroke">
            <p className="text-3xl">Inbox</p>
            <p className="text-xs text-body-color">69 Messages</p>
          </div>
          <button
            className="continue-button"
            onClick={() => setShowModal(true)}
          >
            Compose
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative w-1/2 my-6 mx-auto">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-stroke ">
                      <h3 className="text-2xl">Compose Message</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    <div className="relative flex flex-col">
                      <div className="relative px-4 mt-2 flex flex-row text-body-color">
                        <p className="p-2">To: </p>
                        <select
                          className="text-field-slim"
                          onChange={handleDoctorChange}
                          onSelect={handleDoctorChange}
                        >
                          {doctors.map((doctor) => (
                            <option value={doctor.id} key={doctor.id}>
                              {doctor.attributes.fullName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <div className="relative px-4 mt-2 flex flex-row text-body-color">
                          <p className="p-2">Subject </p>
                          <input
                            type="text"
                            className="text-field-slim"
                            onChange={(e) => setSubject(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="relative px-4 mt-2 flex flex-col text-body-color">
                          <p className="p-2">Message: </p>
                          <textarea
                            className="text-field-normal text-black"
                            rows={8}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="decline-button w-1/4 mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="continue-button w-1/2"
                        type="button"
                        onClick={() => {
                          handleMessageSubmit();
                          setShowModal(false);
                        }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`border border-stroke rounded-lg h-24 p-6 mb-2 ${
              selectedConversation?.id === conversation.id
                ? 'border-blue-600'
                : ''
            }`}
            onClick={() => handleSelectedConversation(conversation.id)}
          >
            <div className="flex flex-row">
              <div className="rounded-full max-w-[50px] max-h-[50px] mr-4">
                <Image
                  alt="profile picture"
                  className="h-full w-full rounded-full object-cover object-center"
                  src={
                    conversation.attributes.doctor.data.attributes
                      .profilepicture.data.attributes.url
                  }
                  width={50}
                  height={50}
                />
              </div>
              <div className="w-full">
                <div className="flex flex-row justify-between">
                  <p className="text-xs text-body-color">
                    {conversation.attributes.doctor.data.attributes.fullName}
                  </p>
                  <p className="text-xs">{`${new Date(
                    conversation.attributes.createdAt
                  ).toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}`}</p>
                </div>
                <p className="text-xs font-bold">{`${conversation.attributes.subject}`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-2 pt-8 px-4">
        {selectedConversation ? (
          <div className="flex flex-col pt-4 pl-4">
            <p className="text-2xl">
              {selectedConversation?.attributes.subject}
            </p>
          </div>
        ) : (
          <p className="text-2xl">Select a conversation</p>
        )}
      </div>
    </div>
  );
}
