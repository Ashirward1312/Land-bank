import React, { useState } from 'react';
import { MapPin, Phone, Clock, ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    
    if (!name || !phone || !message) {
      alert("Please fill all the details before sending.");
      return;
    }

    const whatsappNumber = "918871090476"; 
    const text = `Hello Mahesh Ventures!\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="contact">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#d4af37] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.08] animate-blob"></div>
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-white rounded-full mix-blend-screen filter blur-[90px] opacity-[0.04] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-80 h-80 bg-[#d4af37] rounded-full mix-blend-screen filter blur-[95px] opacity-[0.06] animate-blob animation-delay-4000"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAxNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section - Compact */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] mb-3">
            <div className="w-1 h-1 rounded-full bg-[#d4af37] animate-pulse"></div>
            <span className="text-[#d4af37] text-[9px] font-semibold tracking-[0.15em] uppercase">Contact</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
            Get In{' '}
            <span className="text-[#d4af37]">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-xs md:text-sm leading-relaxed">
            Have questions? We're here to help. Reach out and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Info Header */}
            <div className="bg-[#121212] p-4 rounded-lg border border-[#1f1f1f]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-[2px] bg-gradient-to-r from-[#d4af37] to-transparent rounded-full"></div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wide">Contact Info</h3>
              </div>
              <p className="text-gray-500 text-xs">
                Reach us via phone or visit our office.
              </p>
            </div>

            <div className="space-y-3">
              {/* Phone Card - Compact */}
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="relative flex items-start gap-3 p-4 rounded-lg bg-[#121212] border border-[#1f1f1f] hover:border-[#2a2a2a] transition-all duration-300">
                  <div className="flex-shrink-0 bg-gradient-to-br from-[#d4af37] to-[#b8941f] p-2 rounded-md shadow-lg shadow-[#d4af37]/10">
                    <Phone className="w-3.5 h-3.5 text-black" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#d4af37] text-[9px] font-semibold uppercase tracking-wider mb-1">Phone</h4>
                    <a href="tel:+918871090476" className="text-white font-medium text-sm hover:text-[#d4af37] transition-colors">
                      +91 88710-90476
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card - Compact */}
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="relative flex items-start gap-3 p-4 rounded-lg bg-[#121212] border border-[#1f1f1f] hover:border-[#2a2a2a] transition-all duration-300">
                  <div className="flex-shrink-0 bg-gradient-to-br from-[#d4af37] to-[#b8941f] p-2 rounded-md shadow-lg shadow-[#d4af37]/10">
                    <MapPin className="w-3.5 h-3.5 text-black" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#d4af37] text-[9px] font-semibold uppercase tracking-wider mb-1">Address</h4>
                    <p className="text-white text-xs leading-relaxed mb-2">
                      Mahesh Ventures, LK Logistic Park, Kursi, 3rd Floor, Near Kamal Vihar, Raipur (C.G.)
                    </p>
                    <a 
                      href="https://www.google.com/maps?cid=2015291886199415063" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[#d4af37] hover:text-white text-[10px] font-semibold transition-all duration-300 group/link"
                    >
                      View on Map 
                      <ArrowRight className="w-2.5 h-2.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours Card - Compact */}
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="relative flex items-start gap-3 p-4 rounded-lg bg-[#121212] border border-[#1f1f1f] hover:border-[#2a2a2a] transition-all duration-300">
                  <div className="flex-shrink-0 bg-gradient-to-br from-[#d4af37] to-[#b8941f] p-2 rounded-md shadow-lg shadow-[#d4af37]/10">
                    <Clock className="w-3.5 h-3.5 text-black" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#d4af37] text-[9px] font-semibold uppercase tracking-wider mb-1">Hours</h4>
                    <p className="text-white font-medium text-xs">Mon–Sat: 9:30 AM – 6:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full">
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/10 to-[#d4af37]/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
              
              <div className="relative bg-[#121212] p-6 rounded-lg border border-[#1f1f1f] shadow-xl">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent"></div>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-semibold text-[#d4af37] uppercase tracking-wide">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name" 
                        className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-md px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all duration-300 hover:border-[#2a2a2a]"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-semibold text-[#d4af37] uppercase tracking-wide">Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX" 
                        className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-md px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all duration-300 hover:border-[#2a2a2a]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-semibold text-[#d4af37] uppercase tracking-wide">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Write your message here..." 
                      className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-md px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all duration-300 resize-none hover:border-[#2a2a2a]"
                    ></textarea>
                  </div>

                  <p className="text-[10px] text-gray-500">
                    By submitting, you agree to our <span className="text-[#d4af37] hover:underline cursor-pointer">Terms & Privacy Policy</span>.
                  </p>

                  <button 
                    type="submit" 
                    className="group/btn relative w-full overflow-hidden bg-gradient-to-r from-[#d4af37] to-[#c5a028] hover:from-[#c5a028] hover:to-[#d4af37] text-black font-bold text-xs tracking-wide py-2.5 rounded-md transition-all duration-300 shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 hover:-translate-y-px"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-1.5">
                      SEND MESSAGE
                      <Send className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - Compact */}
        <div className="mt-16 relative">
          <div className="absolute -inset-px bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/10 to-[#d4af37]/20 rounded-lg blur-sm opacity-50"></div>
          <div className="relative overflow-hidden rounded-lg border border-[#1f1f1f] shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.696929111623!2d81.65365437526121!3d21.19567788049572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd318a22241f%3A0x1bf7dd9a38b42117!2sMahesh%20Ventures%20%7C%20Best%20Real%20Estate%20Consultant%20%7C%20Real%20Estate%20Agent%20%7C%20Property%20Consultant%20%7C%20Property%20Dealer%20in%20Raipur!5e1!3m2!1sen!2sin!4v1780552625617!5m2!1sen!2sin" 
              width="100%" 
              height="380px" 
              style={{ border: 0, filter: "grayscale(15%) contrast(105%) brightness(92%)" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;