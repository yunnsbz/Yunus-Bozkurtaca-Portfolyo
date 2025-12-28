
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="mt-16 bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-xl max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-2">Send Me a Message</h3>
      <p className="text-gray-500 mb-8">Feel free to reach out to discuss projects, collaborations, or just to say hi.</p>
      
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true"
        className="space-y-6 text-left"
      >
        {/* Netlify için zorunlu gizli alan */}
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Spam koruması için honeypot alanı */}
        <p className="hidden">
          <label>Don't fill this out if you're human: <input name="bot-field" /></label>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="email@youraddress.com"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="What would you like to talk about?"
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-5 bg-black text-white font-bold rounded-2xl hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-lg active:scale-[0.98]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
