import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, Send } from 'lucide-react';
import { facebook, instagram, linkedin, youtube } from '../../../assets/icons/icon';
import { MailCheck, CircleUserRound, MapPin, Loader2 } from "lucide-react";
import AppointmentBooking from '../../Appointments/Appointment Booking';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "510e84f9-6c6a-4bf5-85fb-8a6bba4b6b45",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
          to: "roririsoftpvtltd@gmail.com"
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n\n` +
        `Message:\n${formData.message}`
      );
      window.open(`mailto:roririsoftpvtltd@gmail.com?subject=${subject}&body=${body}`, '_blank');
      setSubmitStatus('fallback');
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.6, ease: "easeOut" },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <>
      <div className="italic min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id='contact'>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          <Motion.div
            className="flex flex-col justify-center text-center lg:text-left p-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <Motion.p className="text-purple-700 font-semibold text-lg mb-2" variants={itemVariants}>
              Contact Us
            </Motion.p>
            <Motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white" variants={itemVariants}>
              Get in touch with <br /> us today
            </Motion.h1>
            <Motion.p className="text-gray-400 text-base sm:text-lg mb-10 max-w-prose" variants={itemVariants}>
              Reach out to explore endless possibilities with Roniri Software Solutions!
            </Motion.p>

            <Motion.h2 className="text-2xl font-bold text-white mb-6" variants={itemVariants}>
              Follow Us:
            </Motion.h2>
            <Motion.div className="flex justify-center lg:justify-start space-x-4" variants={itemVariants}>
              <a href="https://www.facebook.com/RoririSoftwareSolutionsPvtLtd/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 p-1 rounded-full hover:scale-110 transition-transform duration-200">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/roriri_it_park/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 p-1 rounded-full hover:scale-110 transition-transform duration-200">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/company/roriri-software-solutions-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 p-1 rounded-full hover:scale-110 transition-transform duration-200">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://www.youtube.com/@Roriri_soft" target="_blank" rel="noopener noreferrer" className="h-12 w-12 p-1 rounded-full hover:scale-110 transition-transform duration-200">
                <img src={youtube} alt="YouTube" />
              </a>
            </Motion.div>
          </Motion.div>

          <AppointmentBooking />
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
