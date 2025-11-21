import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './components/FeatureCard'
import JobOpeningsSection from './components/JobOpeningsSection';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

// Particle background component
const ParticleField = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Glitch text effect
const GlitchText = ({ children, className }) => {
  return (
    <div className={`relative ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute top-0 left-0 opacity-70 text-cyan-400 animate-glitch-1"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}>
        {children}
      </span>
      <span className="absolute top-0 left-0 opacity-70 text-pink-400 animate-glitch-2"
        style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}>
        {children}
      </span>
    </div>
  );
};

const Career = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-2px, 2px); }
          66% { transform: translate(2px, -2px); }
        }
        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(2px, -2px); }
          66% { transform: translate(-2px, 2px); }
        }
        .animate-glitch-1 {
          animation: glitch-1 0.3s infinite;
        }
        .animate-glitch-2 {
          animation: glitch-2 0.3s infinite;
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleField />

        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-4xl md:text-6xl font-medium mb-6">
                  <span className="text-white">Become a</span>
                  <br />
                  <GlitchText className="text-transparent ml-2 bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 italic">
                    𝐑𝐎𝐑𝐈𝐑𝐈'𝐚𝐧
                  </GlitchText>
                </h1>
              </motion.div>

              <motion.p
                className="text-2xl md:text-3xl text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Discover, Innovate, and Grow Together
              </motion.p>

              <motion.p
                className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                At RORIRI Soft, we believe in building not just careers, but futures. Join a team that fosters creativity,
                embraces challenges, and celebrates success in the cutting-edge world of technology.
              </motion.p>

               <a href="#JobOpeningsSection" className="mx-auto md:mx-0">
              <motion.button
                className="group relative overflow-hidden px-8 py-4 rounded-full cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 text-white font-bold text-lg flex items-center gap-2">
                  Explore Job Opportunities
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
              </a>
            </motion.div>

            {/* Right animation */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-96 h-96">
                {/* Rotating rings */}
                <motion.div
                  className="absolute inset-0 border-4 border-cyan-500/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-8 border-4 border-purple-500/30 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-16 border-4 border-pink-500/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-2xl opacity-50" />
                    <div className="relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/50 rounded-2xl p-8 backdrop-blur-xl">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-6xl mb-4"
                      >
                        💼
                      </motion.div>
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                        Join Our Team
                      </div>
                      <div className="text-sm text-gray-400">Build Your Future</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-medium mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Shape Your Future. Achieve More with Us
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard />
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="relative py-24 px-4">
        <div id='JobOpeningsSection' className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-medium mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Currently We Are Hiring For
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <JobOpeningsSection />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
