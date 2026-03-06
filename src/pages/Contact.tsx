import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slideUp">
            <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with us. We're here to help 24/7! 🚀
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-10 animate-slideUp border border-indigo-500/30 backdrop-blur-xl hover:border-indigo-500/60 transition-all duration-300">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-8">Send us a Message</h2>
              {submitted && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-lg text-green-300 font-semibold animate-slideDown backdrop-blur">
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-indigo-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-indigo-500/30 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-700/50 hover:bg-slate-700 text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-indigo-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-indigo-500/30 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-700/50 hover:bg-slate-700 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-indigo-300 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-indigo-500/30 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-700/50 hover:bg-slate-700 text-white placeholder-gray-400"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-indigo-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-indigo-500/30 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none bg-slate-700/50 hover:bg-slate-700 text-white placeholder-gray-400"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-slideUp" style={{ animationDelay: '0.1s' }}>
              {/* Contact Information Card */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-10 border border-purple-500/30 backdrop-blur-xl hover:border-purple-500/60 transition-all duration-300">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">Get In Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl border border-indigo-500/30 hover:border-indigo-500/60 transition-all group cursor-pointer">
                    <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">Address</h3>
                      <p className="text-gray-300 text-sm mt-1">College of Smart Computing (COSC)<br />University Campus</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all group cursor-pointer">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">Phone</h3>
                      <p className="text-gray-300 text-sm mt-1">+91 97596 88284</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-pink-600/20 to-orange-600/20 rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all group cursor-pointer">
                    <div className="p-3 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">Email</h3>
                      <p className="text-indigo-300 text-sm font-semibold mt-1">udaan@coeruniversity.ac.in</p>
                      <p className="text-gray-400 text-xs mt-1">Response within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border-2 border-indigo-500/40 shadow-2xl backdrop-blur-xl hover:border-indigo-500/80 transition-all group">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg mr-3 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Working Hours</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-4 border border-cyan-500/30">
                    <p className="text-cyan-300 font-bold text-lg mb-2">🌟 Main Hours</p>
                    <p className="text-white font-semibold">4:00 PM - 10:00 PM</p>
                    <p className="text-gray-400 text-sm">Peak activity time</p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg p-4 border border-indigo-500/30">
                    <p className="text-indigo-300 font-bold text-lg mb-2">🔔 24/7 Available</p>
                    <p className="text-white font-semibold">Open All Day</p>
                    <p className="text-gray-400 text-sm">Always available to help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
