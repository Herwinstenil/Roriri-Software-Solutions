import { useState } from 'react';
import { facebook, instagram, linkedin, youtube } from '../../../assets/icons/icon';
import { Loader2, Send } from "lucide-react";

const InternshipRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: '',
    qualification: '',
    college: '',
    year: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

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
    if (!formData.program.trim()) {
      newErrors.program = 'Program is required';
    }
    if (!formData.qualification.trim()) {
      newErrors.qualification = 'Qualification is required';
    }
    if (!formData.college.trim()) {
      newErrors.college = 'College is required';
    }
    if (!formData.year.trim()) {
      newErrors.year = 'Year is required';
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
          program: formData.program,
          qualification: formData.qualification,
          college: formData.college,
          year: formData.year,
          message: formData.message,
          from_name: formData.name,
          to: "roririsoftpvtltd@gmail.com"
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', program: '', qualification: '', college: '', year: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      const subject = "Internship Registration";
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n` +
        `Program: ${formData.program}\n` +
        `Qualification: ${formData.qualification}\n` +
        `College: ${formData.college}\n` +
        `Year: ${formData.year}\n` +
        `Message:\n${formData.message}`
      );
      window.open(`mailto:roririsoftpvtltd@gmail.com?subject=${subject}&body=${body}`, '_blank');
      setSubmitStatus('fallback');
      setFormData({ name: '', phone: '', email: '', program: '', qualification: '', college: '', year: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="italic min-h-screen flex items-center lg:p-10 p-5 justify-center font-sans mb-5" id='contact'>
      <div className="w-full flex flex-col lg:flex-row rounded-xl overflow-hidden lg:p-5">
        <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-green-600 text-lg font-semibold mb-2">Contact Us</h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Get in touch with us <br />today
          </h1>
          <p className="text-gray-600 text-lg">
            Reach out to explore endless possibilities with Roriri Software Solutions!
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Follow Us:</h3>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="https://www.facebook.com/RoririSoftwareSolutionsPvtLtd/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 p-1 rounded-full text-white hover:scale-110 transition-transform duration-200">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/roriri_it_park/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 p-1 rounded-full text-white hover:scale-110 transition-transform duration-200">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/roriri-software-solutions-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 p-1 rounded-full text-white hover:scale-110 transition-transform duration-200">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://www.youtube.com/@Roriri_soft" target="_blank" rel="noopener noreferrer" className="h-12 w-12 p-1 rounded-full text-white hover:scale-110 transition-transform duration-200">
              <img src={youtube} alt="YouTube" />
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 flex items-center justify-center p-8">
          <div className="flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden rounded-2xl w-full max-w-2xl">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="flex-grow pt-8 pb-8 relative z-10">
              <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                  <div className="bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700 transform transition-all duration-500 hover:shadow-purple-500/20">
                    <div className="text-center mb-8">
                      <div className="inline-block mb-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                      </div>
                      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                        Internship Registration
                      </h1>
                      <p className="text-gray-400 text-lg">
                        Apply for internship with our experts
                      </p>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="mb-6 p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                        <div className="flex items-center justify-center space-x-2">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-white font-semibold">Application submitted successfully!</span>
                        </div>
                      </div>
                    )}

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Full Name
                          </label>
                          <div className="relative group">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('name')}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="w-full px-5 py-4 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 input-glow transition-all duration-300 backdrop-blur-sm"
                              placeholder="Enter your full name"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                          </div>
                          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                        </div>

                        <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7A2.5 2.5 0 0 0 18.5 6h-13A2.5 2.5 0 0 0 3 8.5z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M21 8.5l-9 6-9-6" />
                            </svg>
                            Email Address
                          </label>
                          <div className="relative group">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('email')}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="w-full px-5 py-4 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 input-glow transition-all duration-300 backdrop-blur-sm"
                              placeholder="your@email.com"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                          </div>
                          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="animate-slide-in" style={{ animationDelay: '0.25s' }}>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Phone Number
                          </label>
                          <div className="relative group">
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('phone')}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="w-full px-5 py-4 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 input-glow transition-all duration-300 backdrop-blur-sm"
                              placeholder="Enter your phone number"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                          </div>
                        </div>

                        <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
                          <label htmlFor="program" className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            Program
                          </label>
                          <div className="relative group">
                            <input
                              type="text"
                              id="program"
                              name="program"
                              value={formData.person}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('program')}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="w-full px-5 py-4 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 input-glow transition-all duration-300 backdrop-blur-sm"
                              placeholder="Enter your program"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                          </div>
                          {errors.program && <p className="mt-1 text-sm text-red-400">{errors.program}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="qualification" className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                            </svg>
                            Qualification
                          </label>
                          <div className="relative group">
                            <input
                              type="text"
                              id="qualification"
                              name="qualification"
                              value={formData.qualification}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('qualification')}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="w-full px-5 py-4 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-sm"
                              placeholder="Enter your qualification"
                            />
                          </div>
                          {errors.qualification && <p className="mt-1 text-sm text-red-400">{errors.qualification}</p>}
                        </div>

                        <div>
                          <label htmlFor="college" className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            College
                          </label>
                          <div className="relative group">
                            <input
                              type="text"
                              id="college"
                              name="college"
                              value={formData.college}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('college')}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="w-full px-5 py-4 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-all duration-300 backdrop-blur-sm"
                              placeholder="Enter your college"
                            />
                          </div>
                          {errors.college && <p className="mt-1 text-sm text-red-400">{errors.college}</p>}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="year" className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                          <svg className="w-5 h-5 mr-2 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Year
                        </label>
                        <div className="relative group">
                          <input
                            type="text"
                            id="year"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('year')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full px-5 py-4 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-all duration-300 backdrop-blur-sm"
                            placeholder="Enter your academic year"
                          />
                        </div>
                        {errors.year && <p className="mt-1 text-sm text-red-400">{errors.year}</p>}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                          <svg className="w-5 h-5 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                          Message
                        </label>
                        <div className="relative group">
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            rows="4"
                            required
                            className="w-full px-5 py-4 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all duration-300 resize-none backdrop-blur-sm"
                            placeholder="Tell us about your interests and goals..."
                          ></textarea>
                        </div>
                        {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                      </div>

                      <div className="text-center">
                        <button
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                        >
                          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                          <span className="relative flex items-center justify-center space-x-2">
                            {isSubmitting ? (
                              <>
                                <Loader2 size={20} className="animate-spin" />
                                <span>Processing...</span>
                              </>
                            ) : (
                              <>
                                <Send size={20} />
                                <span>Book Appointment</span>
                              </>
                            )}
                          </span>
                        </button>
                        <style>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-in {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slide-down {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                @keyframes check {
                    0% {
                        transform: scale(0);
                    }
                    50% {
                        transform: scale(1.2);
                    }
                    100% {
                        transform: scale(1);
                    }
                }

                .input-glow {
                    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
                    transition: all 0.3s ease;
                }

                .input-glow:focus {
                    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3),
                                0 0 20px rgba(59, 130, 246, 0.4);
                    transform: translateY(-2px);
                }

                .button-hover {
                    position: relative;
                    overflow: hidden;
                }

                .button-hover::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    transform: translate(-50%, -50%);
                    transition: width 0.6s, height 0.6s;
                }

                .button-hover:hover::before {
                    width: 300px;
                    height: 300px;
                }

                .animate-fade-in {
                    animation: fade-in 0.6s ease-out;
                }

                .animate-slide-in {
                    animation: slide-in 0.6s ease-out backwards;
                }

                .animate-slide-down {
                    animation: slide-down 0.4s ease-out;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }

                .animate-gradient {
                    background-size: 200% auto;
                    animation: gradient 3s ease infinite;
                }

                .animate-check {
                    animation: check 0.4s ease-out;
                }
            `}</style>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default InternshipRegistrationForm