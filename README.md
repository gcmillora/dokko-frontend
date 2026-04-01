# Dokko

A telemedicine web application that connects patients and doctors for appointment management, prescriptions, and video consultations.

## Features

- **Patient Portal** — Book appointments, view prescriptions, access medical records
- **Doctor Dashboard** — Manage appointments, create prescriptions, view patient history
- **Video Consultations** — Built-in video chat powered by Daily.co
- **Messaging** — In-app inbox for doctor-patient communication
- **Appointment Scheduling** — Date picking, visit type selection, status tracking

## Stack

- **Framework:** Next.js 13 (App Router + Pages)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State:** Recoil
- **API:** GraphQL via Apollo Client, REST via Axios
- **Backend:** Strapi CMS (separate repository)
- **Video:** Daily.co
- **Forms:** React Hook Form with validation

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.development .env.local

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
app/
├── doctor/[doctor_id]/    # Doctor dashboard, appointments, prescriptions, settings
├── patient/[patient_id]/  # Patient portal, appointments, medical records
├── login/                 # Authentication
└── signup/                # Registration
components/
├── doctor/                # Doctor-specific UI components
├── patient/               # Patient-specific UI components
└── forms/                 # Form validation schemas
query/
├── doctor/                # Doctor API queries
└── patient/               # Patient API queries
```
