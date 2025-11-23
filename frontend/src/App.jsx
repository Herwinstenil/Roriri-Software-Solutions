import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Landing from './Content Page/Landing/Landing'
import Signin from './User Page/signin/Signin'
import Login from './User Page/Login/Login'
import AppointmentBooking from './Content Page/Appointments/Appointment Booking'
import Internship from './Content Page/Internship/Internship'
import Career from './Content Page/Career/Career'
import JobDescriptionPage from "./Content Page/Career/JobDescription";
import JobApplicationForm from "./Content Page/Career/components/JobApplicationForm";
import PrivacyPolicy from './Content Page/PrivacyPolicy/PrivacyPolicy'
import TermsCondition from './Content Page/TermsCondition/TermsCondition'
import { AuthProvider } from './Context/AuthContext'

function AppContent() {
  const location = useLocation()

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<AppointmentBooking />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/career" element={<Career />} />
        <Route path="/jobs/:jobId" element={<JobDescriptionPage />} />
        <Route path="/jobapplicationform" element={<JobApplicationForm/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  )
}

export default App
