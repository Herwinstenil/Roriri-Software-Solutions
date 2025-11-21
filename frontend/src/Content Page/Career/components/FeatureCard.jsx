import React from 'react';
import { motion } from 'framer-motion';

// Feature Card Component
const FeatureCard = ({ icon, title, description, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 animate-pulse" />

      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-xl overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

        <motion.div
          className="relative z-10"
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 mb-4 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/50">
            {icon}
          </div>
        </motion.div>

        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-3">
          {title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>

        {/* Hover effect lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          initial={{ x: '-100%' }}
          animate={isHovered ? { x: '100%' } : { x: '-100%' }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: '🌐',
      title: 'Synchronized Environment',
      description: 'Work with talented teams in a supportive and dynamic workplace powered by cutting-edge collaboration tools.'
    },
    {
      icon: '🚀',
      title: 'Growth Opportunities',
      description: 'Enhance your skills through mentorship, real-world projects, and continuous learning in emerging technologies.'
    },
    {
      icon: '💡',
      title: 'Meaningful Work',
      description: 'Be a part of projects that make a difference in the industry and shape the future of technology.'
    },
    {
      icon: '⚡',
      title: 'Work-Life Balance',
      description: 'We value your well-being and provide flexibility to help you thrive both personally and professionally.'
    }
  ];

  return (
    <>
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} index={index} />
      ))}
    </>
  );
};

export default FeaturesSection;
