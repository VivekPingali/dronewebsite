import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="drone-video"
          poster="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80"
        >
          <source
            src="https://player.vimeo.com/external/493173577.sd.mp4?s=c0bf6e2301b73e8a7f3c74f71a27c7e8f7569b3e&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-orbitron text-5xl md:text-6xl font-bold mb-6"
              >
                Elevate Your Perspective
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl mb-8"
              >
                Experience the future of aerial technology with our cutting-edge drones.
                Professional-grade equipment for cinematography, surveillance, and beyond.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex space-x-4"
              >
                <a
                  href="/products"
                  className="bg-primary hover:bg-primary-dark text-gray-900 font-bold py-3 px-8 rounded-full flex items-center space-x-2 transform hover:scale-105 transition-all"
                >
                  <span>Explore Our Fleet</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="border-2 border-primary hover:bg-primary/10 text-primary font-bold py-3 px-8 rounded-full transition-all"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={ref} className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-orbitron text-xl font-bold mb-2">Military-Grade Security</h3>
              <p className="text-gray-400">Advanced encryption and secure transmission protocols.</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-orbitron text-xl font-bold mb-2">Lightning-Fast Response</h3>
              <p className="text-gray-400">Industry-leading flight controls and response times.</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-orbitron text-xl font-bold mb-2">Award-Winning Design</h3>
              <p className="text-gray-400">Recognized for innovation and performance excellence.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Latest Drone Showcase */}
      <div className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-orbitron text-4xl font-bold mb-6">The Future is Here</h2>
              <p className="text-gray-300 mb-8">
                Our latest drone model combines cutting-edge technology with unmatched reliability.
                Perfect for professional cinematography, industrial inspection, and advanced aerial operations.
              </p>
              <a
                href="/products"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark font-bold"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80"
                alt="Latest Drone Model"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;