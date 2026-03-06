import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'service' },
    { name: 'Secretory', id: 'secretory' },
    { name: 'Happen', id: 'happen' },
    { name: 'Event Calender', id: 'event-calendar' },
    { name: 'Earnings Opportunities', id: 'earnings' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav className="bg-gray-900 text-white shadow-xl fixed top-0 w-full z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-2 lg:px-4">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer group min-w-0 max-w-[280px] lg:max-w-[360px] xl:max-w-[440px]" onClick={() => onNavigate('home')}>
              <div className="h-14 w-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <img src="/logo.jpeg" alt="Logo" className="h-10 w-10 rounded-full" />
              </div>
              <div className="block min-w-0">
                <h1 className="text-base lg:text-xl xl:text-2xl font-bold text-white xl:bg-gradient-to-r xl:from-indigo-500 xl:to-purple-600 xl:bg-clip-text xl:text-transparent leading-tight whitespace-nowrap truncate">
                  Udaan - The Endless Journey
                </h1>
                <p className="hidden xl:block text-xs text-gray-400 font-medium leading-tight">
                  College of Smart Computing
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-end min-w-0 pr-0.5">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`inline-flex h-10 items-center justify-center relative font-semibold text-xs xl:text-sm px-1.5 xl:px-2.5 tracking-tight transition-all duration-300 group overflow-hidden rounded-lg whitespace-nowrap ${
                    currentPage === item.id
                      ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 ${currentPage === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'} rounded`}></span>
                </button>
              ))}
              <img
                src="/universityLogo.jpeg"
                alt="University logo"
                className="h-9 w-14 xl:w-16 rounded-md object-contain bg-transparent shadow-lg ml-0.5"
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md hover:bg-gray-700/20 transition-colors">
                {isMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-700 shadow-lg animate-slideDown">
            <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => { onNavigate(item.id); setIsMenuOpen(false); }}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${currentPage === item.id ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700/30 hover:text-white'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for content to avoid being hidden behind navbar */}
      <div className="h-20"></div>
    </>
  );
}
