'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { findAllConversationsDoctor } from '../../../../query/doctor/findAllConversationsDoctor';
import { findAllConversationsPatient } from '../../../../query/patient/findAllConversationsPatient';
import { findAllDoctors } from '../../../../query/findAllDoctors';
import { findAllPatients } from '../../../../query/findAllPatients';
import { findOneDoctor } from '../../../../query/findOneDoctor';
import { findOnePatient } from '../../../../query/findOnePatient';
import { insertConversation } from '../../../../query/insertConversation';
import { insertOneMessage } from '../../../../query/insertOneMessage';
import { updateConversationMessages } from '../../../../query/updateConversationMessages';
import showToastMessage from '../../../../utils/error';

interface pageProps {
  params: {
    doctor_id: string;
  };
}

export default function Page({ params }: pageProps) {
  const [doctor, setDoctor] = useState<any>();
  const [patients, setPatients] = useState<any[]>([]);
  const [replyPayload, setReplyPayload] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<any>();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [selectedConversation, setSelectedConversation] = useState<any>();
  const [showConversation, setShowConversation] = useState(false);
  const [conversations, setConversations] = useState<any[]>([]);
  const [messageIDs, setMessageIDs] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  const handlePatientChange = (e: any) => {
    const patient = patients.find((patient) => patient.id === e.target.value);
    setSelectedPatient(patient);
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken') || '';
    const fetchDoctors = async () => {
      const patients = await findAllPatients(jwtToken);
      setPatients(patients.patients.data);
      setSelectedPatient(patients.patients.data[0]);
    };
    fetchDoctors();
  }, []);

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken') || '';
    findAllConversationsDoctor(params.doctor_id, jwtToken).then((data) => {
      setConversations(data.conversations.data);
      setTotalCount(data.conversations.meta.pagination.total);
    });
  }, []);

  useEffect(() => {
    findOneDoctor(params.doctor_id).then((data) => {
      setDoctor(data.doctors.data[0]);
    });
  }, []);

  async function handleReplySubmit() {
    const jwtToken = localStorage.getItem('jwtToken') || '';
    const responseMessage = await insertOneMessage(
      replyPayload,
      doctor.attributes.fullName,
      selectedPatient.attributes.fullName,
      doctor.attributes.uid,
      selectedPatient.attributes.uid,
      jwtToken
    );
    let messages = messageIDs;
    messages.push(responseMessage.createMessage.data.id);
    const updateConversation = await updateConversationMessages(
      messages,
      selectedConversation.id
    );
    showToastMessage('success', 'Message sent successfully');
  }
  async function handleMessageSubmit() {
    const jwtToken = localStorage.getItem('jwtToken') || '';
    const responseMessage = await insertOneMessage(
      message,
      doctor.attributes.fullName,
      selectedPatient.attributes.fullName,
      doctor.attributes.uid,
      selectedPatient.attributes.uid,
      jwtToken
    );
    const responseConversation = await insertConversation(
      subject,
      selectedPatient.id,
      doctor.id,
      responseMessage.createMessage.data.id
    );
    showToastMessage('success', 'Message sent successfully');
  }
  const handleSelectedConversation = (conversationID: any) => {
    const conversation = conversations.find(
      (conversation) => conversation.id === conversationID
    );

    setMessageIDs(
      conversation.attributes.messages.data.map((message: any) => message.id)
    );

    setSelectedConversation(conversation);
  };

  return (
    <div className="grid grid-cols-3 w-full h-screen">
      <div className="col-span-1 border border-stroke pt-8 px-4">
        <div className="mb-6">
          <div className="flex  flex-col mt-4 pb-2 mb-4 ml-2 border-b border-stroke">
            <p className="text-3xl">Inbox</p>
            <p className="text-xs text-body-color">
              Total Conversations: {totalCount}
            </p>
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
                          onChange={handlePatientChange}
                          onSelect={handlePatientChange}
                        >
                          {patients.map((patient) => (
                            <option value={patient.id} key={patient.id}>
                              {patient.attributes.fullName}
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
                    conversation.attributes.patient.data.attributes
                      .profilepicture.data.attributes.url
                  }
                  width={50}
                  height={50}
                />
              </div>
              <div className="w-full">
                <div className="flex flex-row justify-between">
                  <p className="text-xs text-body-color">
                    {conversation.attributes.patient.data.attributes.fullName}
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
                <p className="text-xs text-body-color">{`${conversation.attributes.messages.data[0].attributes.payload.slice(
                  0,
                  25
                )}...`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-2 pt-8 px-4 h-screen">
        {selectedConversation ? (
          <div className="flex flex-col pt-4 pl-4 h-full justify-between pb-8">
            <div className="max-h-full overflow-y-auto">
              <div className="flex flex-row">
                <Image
                  src={
                    selectedConversation.attributes.patient.data.attributes
                      .profilepicture.data.attributes.url
                  }
                  width={50}
                  height={50}
                  alt="Icon"
                  className="rounded-full"
                />
                <div className="flex flex-row ml-4 items-center">
                  <p className="mr-2">
                    {`${selectedConversation.attributes.patient.data.attributes.fullName}`}
                  </p>
                  <p className="text-body-color">
                    {` to ${selectedConversation.attributes.doctor.data.attributes.fullName}`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <p className="text-2xl font-bold mt-6">{`${selectedConversation.attributes.subject}`}</p>
                <div className="overflow-y">
                  {selectedConversation.attributes.messages.data.map(
                    (message: any) => (
                      <div
                        key={message.id}
                        className="flex flex-col border-b border-stroke pb-8"
                      >
                        <p className="mt-4 text-xs text-body-color">{`From ${message.attributes.sender_name} - To ${message.attributes.recipient_name}`}</p>
                        <p className="text-xs text-body-color mt-2">
                          {`${new Date(
                            message.attributes.createdAt.toLocaleString(
                              'en-US',
                              {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                              }
                            )
                          )}`}
                        </p>
                        <p className="mt-4 text-base">
                          {`${message.attributes.payload}`}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 border-t border-stroke pt-4">
              <div className="w-full">
                <input
                  type="text"
                  className="text-field-normal"
                  value={replyPayload}
                  onChange={(e) => setReplyPayload(e.target.value)}
                />
              </div>
              <button
                className="continue-button w-1/4"
                onClick={handleReplySubmit}
              >
                Reply
              </button>
            </div>
          </div>
        ) : (
          <p className="text-2xl">Select a conversation</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
