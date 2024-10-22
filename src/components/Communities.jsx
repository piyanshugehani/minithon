import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Communities = () => {
  // Environment-related community data
  const communities = [
    { id: 1, name: 'Sustainable Living', description: 'Tips and discussions on living an eco-friendly lifestyle.' },
    { id: 2, name: 'Climate Action', description: 'Community focused on mitigating climate change.' },
    { id: 3, name: 'Zero Waste', description: 'Join the movement to reduce waste and promote sustainability.' },
    { id: 4, name: 'Renewable Energy', description: 'Exploring solar, wind, and other renewable energy sources.' },
    { id: 5, name: 'Clean Oceans', description: 'Discussion on saving marine ecosystems and reducing plastic waste.' },
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Hero Section */}
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold">Environmental Communities</h1>
        <p className="mt-2 text-gray-600">Join like-minded individuals and make a positive impact.</p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {communities.map((community) => (
          <motion.div
            key={community.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: community.id * 0.1 }}
            className='shadow-lg rounded-lg p-6 overflow-hidden'
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }} // Hover effect
          >
            <Link
              to={`/community/${community.id}`}
              className="bg-white dark:bg-black rounded-lg p-5 cursor-pointer transition-shadow duration-200"
            >
              <h2 className="text-xl font-semibold mb-2">{community.name}</h2>
              <p className="text-gray-600">{community.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Communities;
