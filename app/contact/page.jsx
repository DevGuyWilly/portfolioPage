"use client";
import { useState } from 'react';
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate network request for static export compatibility
    setTimeout(() => {
      const mailtoLink = `mailto:wdagah14@gmail.com?subject=Portfolio Contact from ${form.name}&body=Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(form.message)}`;
      window.location.href = mailtoLink;
      
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="p-8 md:p-12 lg:p-16 min-h-full relative">
       <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Get in touch</h1>
          <p className="text-gray-600 text-center mb-12 text-lg">
             Have a project in mind or just want to say hi? Feel free to send me a message.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                 <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                 <input 
                   type="text" 
                   id="name" 
                   name="name"
                   required
                   value={form.name}
                   onChange={handleChange}
                   className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors"
                   placeholder="John Doe"
                 />
              </div>
              
              <div>
                 <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                 <input 
                   type="email" 
                   id="email" 
                   name="email"
                   required
                   value={form.email}
                   onChange={handleChange}
                   className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors"
                   placeholder="john@example.com"
                 />
              </div>
              
              <div>
                 <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                 <textarea 
                   id="message" 
                   name="message"
                   required
                   rows={6}
                   value={form.message}
                   onChange={handleChange}
                   className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors resize-none"
                   placeholder="Tell me about your project..."
                 />
              </div>

              <button 
                 type="submit"
                 disabled={status === 'submitting'}
                 className="w-full flex items-center justify-center gap-2 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all disabled:opacity-50"
              >
                 {status === 'submitting' ? 'Opening Email Client...' : (
                    <>Send Message <FiSend /></>
                 )}
              </button>
          </form>
       </div>

       {/* Toast Notification */}
       <AnimatePresence>
          {status === 'success' && (
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: 50 }}
               className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 font-medium z-50"
             >
                <FiCheck className="text-xl" /> Opening your email client...
             </motion.div>
          )}
       </AnimatePresence>
    </div>
  );
}
