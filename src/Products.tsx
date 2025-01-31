import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Camera } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "SkyTech Pro X1",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80",
      price: "$2,999",
      description: "Professional-grade drone with 8K camera and 45-minute flight time.",
      features: ["8K Camera", "45min Flight Time", "10km Range", "Obstacle Avoidance"]
    },
    {
      name: "SkyTech Explorer",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80",
      price: "$1,499",
      description: "Perfect for aerial photography enthusiasts and beginners.",
      features: ["4K Camera", "30min Flight Time", "5km Range", "GPS Tracking"]
    },
    {
      name: "SkyTech Titan",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80",
      price: "$4,999",
      description: "Industrial-grade drone for professional cinematography.",
      features: ["12K Camera", "60min Flight Time", "15km Range", "AI Navigation"]
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-orbitron font-bold mb-8 tracking-wider">Our Products</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-orbitron text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-primary font-bold mb-4">{product.price}</p>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <Shield className="w-4 h-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-orbitron font-bold mb-6">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <Camera className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-orbitron font-bold mb-2">Camera Systems</h3>
                  <p className="text-gray-400">Up to 12K resolution with advanced stabilization and night vision capabilities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-orbitron font-bold mb-2">Battery Life</h3>
                  <p className="text-gray-400">Industry-leading battery life with quick-swap capability and fast charging.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-orbitron font-bold mb-2">Safety Features</h3>
                  <p className="text-gray-400">Advanced obstacle avoidance and redundant systems for maximum safety.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;