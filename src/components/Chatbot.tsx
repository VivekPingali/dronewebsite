import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const scenarios = {
    'pricing': 'Our drone prices range from $999 for consumer models to $5000+ for professional equipment. Would you like specific model information?',
    'delivery': 'We offer worldwide shipping. Standard delivery takes 3-5 business days, while express shipping is available for 1-2 day delivery.',
    'warranty': 'All our drones come with a 2-year manufacturer warranty covering hardware defects and malfunctions.',
    'battery': 'Our drones feature high-capacity lithium polymer batteries with flight times ranging from 25-45 minutes depending on the model.',
    'camera': 'Our professional drones are equipped with 4K-8K cameras capable of capturing stunning aerial footage.',
    'support': 'We provide 24/7 technical support through chat, email, and phone. How can we help you today?',
    'training': 'We offer comprehensive training programs for both beginners and professional pilots.',
    'default': 'I apologize, but I\'m not sure about that. Would you like to speak with a human representative?'
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages([...messages, userMessage]);

    const lowercaseInput = input.toLowerCase();
    let response = scenarios.default;

    Object.entries(scenarios).forEach(([keyword, answer]) => {
      if (lowercaseInput.includes(keyword)) {
        response = answer;
      }
    });

    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 500);

    setInput('');
  };

  return (
    <div className="chatbot-container">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary-dark text-gray-900 rounded-full p-4 shadow-lg transition-all"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      ) : (
        <div className="bg-gray-800 rounded-lg shadow-xl w-96">
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h3 className="font-orbitron font-bold">SkyTech Support</h3>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4 chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.isBot ? 'text-left' : 'text-right'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-700 text-white'
                      : 'bg-primary text-gray-900'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                className="bg-primary hover:bg-primary-dark text-gray-900 px-4 py-2 rounded-lg font-bold transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;