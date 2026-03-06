import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 -left-4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-black mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Udaan - The Endless Journey</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              College of Smart Computing (COSC)
            </p>
            <p className="text-indigo-300 text-sm font-semibold italic">
              "Learn... Build... Lead..."
            </p>
          </div>

          {/* Leadership */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Leadership</h3>
            <p className="text-gray-300 text-sm mb-2"><span className="text-indigo-400 font-semibold">Mentor:</span> Dr. Gesu Thakur</p>
            <p className="text-gray-300 text-sm mb-3"><span className="text-indigo-400 font-semibold">Convener:</span></p>
            <p className="text-gray-300 text-sm">Ankush Joshi, Aditya Sir, Viraam Sir</p>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Support</h3>
            <p className="text-gray-300 text-sm mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-400" />
              <span className="font-semibold text-indigo-300">udaan@coeruniversity.ac.in</span>
            </p>
            <p className="text-gray-300 text-sm flex items-center gap-2">
              <Phone className="w-4 h-4 text-indigo-400" />
              +91 97596 88284
            </p>
            <p className="text-gray-300 text-sm flex items-center gap-2 mt-2">
              <MapPin className="w-4 h-4 text-indigo-400" />
              College of Smart Computing (COSC), University Campus
            </p>
          </div>

          {/* Developer & Socials */}
          <div className="flex flex-col justify-between">
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl p-4 border border-indigo-500/30 backdrop-blur">
              <h3 className="text-lg font-bold mb-4 text-white">Developer</h3>
              <p className="text-indigo-300 font-bold text-sm mb-2">👨‍💻 Made by</p>
              <p className="text-white text-sm font-semibold mb-2">Technical Team</p>
              {/* <p className="text-gray-400 text-xs mb-2">BCA Student</p> */}
              <div className="flex items-center space-x-4 mt-2">
                <a href="https://www.instagram.com/udaan_tech2026/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="mailto:udaan@coeruniversity.ac.in" className="hover:text-indigo-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center space-y-2">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-indigo-400 font-bold">Udaan - The Endless Journey - COSC</span>. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Designed & Developed by <span className="text-indigo-400 font-semibold">Technical Team (Udaan)</span> ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
