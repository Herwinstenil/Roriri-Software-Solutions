import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Landing from './Content Page/Landing/Landing'
import Signin from './User Page/signin/Signin'
import Login from './User Page/Login/Login'
import About from './Content Page/About/About'
import AppointmentBooking from './Content Page/Appointments/Appointment Booking'
import Internship from './Content Page/Internship/Internship'
import Career from './Content Page/Career/Career'
import JobDescriptionPage from "./Content Page/Career/JobDescription";
import JobApplicationForm from "./Content Page/Career/components/JobApplicationForm";
import PrivacyPolicy from './Content Page/PrivacyPolicy/PrivacyPolicy'
import TermsCondition from './Content Page/TermsCondition/TermsCondition'
import Contact from './Content Page/Contact/Contact'
import EventsComponent from './Content Page/Event/Event'
import Product from './Content Page/Product/Product'
import ServicesPage from './Content Page/Services/service'
import ERPSolutions from './Content Page/Services/components/ERP_solution'
import MobileAppDevelopmentPage from './Content Page/Services/components/MobileApp-development'
import WebDevelopment from './Content Page/Services/components/Web_developmentDetailsPage'
import IT_Consulting from './Content Page/Services/components/IT_Consulting'
import Whatwedo from './Content Page/WhatweDo/Whatwedo'
import { AuthProvider } from './Context/AuthContext'

function AppContent() {
  const location = useLocation()

  // pages that should hide navbar + footer
  const hideLayout = ["/signin", "/login"].includes(location.pathname)

  return (
    <>
      {!hideLayout && <Navbar />}

      {hideLayout ? (
        <Routes>
          {/* Auth pages */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      ) : (
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/appointment" element={<AppointmentBooking />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/career" element={<Career />} />
            <Route path="/jobs/:jobId" element={<JobDescriptionPage />} />
            <Route path="/jobapplicationform" element={<JobApplicationForm />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-condition" element={<TermsCondition />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/event" element={<EventsComponent />} />
            <Route path="/product" element={<Product />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/erp-solutions" element={<ERPSolutions />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentPage />} />
            <Route path="/services/web-app-development" element={<WebDevelopment />} />
            <Route path="/services/it-consulting" element={<IT_Consulting />} />
            <Route path="/whatwedo" element={<Whatwedo />} />
          </Routes>
        </div>
      )}

      {!hideLayout && <Footer />}
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
