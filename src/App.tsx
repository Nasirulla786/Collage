import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import Register from './pages/Register';
import Services from './pages/Services';
import Secretory from './pages/Secretory';
import Happen from './pages/Happen';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'Secretory':
        return <Secretory />;
      case 'happen':
        return <Happen />;
      case 'contact':
        return <Contact />;

      case 'service':
        return <Services onNavigate={setCurrentPage} />;
      // case 'register':
      //   return <Register onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
