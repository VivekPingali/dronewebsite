import React from 'react';
import { motion } from 'framer-motion';
import { History, Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-orbitron font-bold mb-8 tracking-wider">About SkyTech</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-orbitron font-bold mb-4">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2015, SkyTech has been at the forefront of drone technology innovation. 
                What started as a small team of passionate engineers has grown into a global leader 
                in aerial technology solutions.
              </p>
              <p className="text-gray-300">
                Our commitment to pushing the boundaries of what's possible in aerial technology 
                has led to numerous breakthroughs in drone design, battery life, and camera systems.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
                alt="Our Team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <History className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-orbitron font-bold mb-2">8+ Years</h3>
              <p className="text-gray-400">Industry Experience</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-orbitron font-bold mb-2">50,000+</h3>
              <p className="text-gray-400">Satisfied Customers</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-orbitron font-bold mb-2">30+</h3>
              <p className="text-gray-400">Countries Served</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-orbitron font-bold mb-2">15+</h3>
              <p className="text-gray-400">Industry Awards</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-orbitron font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              At SkyTech, we're dedicated to revolutionizing aerial technology and making it 
              accessible to everyone. Our mission is to provide cutting-edge drone solutions 
              that empower creators, businesses, and innovators to achieve their goals.
            </p>
            <p className="text-gray-300">
              We believe in pushing the boundaries of what's possible while maintaining the 
              highest standards of safety and reliability. Through continuous innovation and 
              customer-focused development, we're shaping the future of aerial technology.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;