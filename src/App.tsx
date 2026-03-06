import { useEffect, useRef, useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Secretory from './pages/Secretory';
import Happen from './pages/Happen';
import EventCalendar from './pages/EventCalendar';
import Earnings from './pages/Earnings';

const SECTION_IDS = ['home', 'about', 'service', 'secretory', 'happen', 'event-calendar', 'earnings', 'contact'] as const;

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const isAutoScrollingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  const stopAutoScroll = () => {
    isAutoScrollingRef.current = false;
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };

  const animateScrollTo = (targetTop: number, duration = 700) => {
    stopAutoScroll();

    const startTop = window.scrollY;
    const distance = targetTop - startTop;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      if (!isAutoScrollingRef.current) {
        return;
      }

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startTop + distance * eased);

      if (progress < 1) {
        animationFrameRef.current = window.requestAnimationFrame(step);
        return;
      }

      stopAutoScroll();
    };

    isAutoScrollingRef.current = true;
    animationFrameRef.current = window.requestAnimationFrame(step);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);

    if (!el) {
      return;
    }

    const navbarOffset = 96;
    const top = el.getBoundingClientRect().top + window.scrollY - navbarOffset;
    animateScrollTo(top);
    setCurrentPage(sectionId);
    window.history.replaceState(null, '', `#${sectionId}`);
  };

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      if (isAutoScrollingRef.current) {
        return;
      }

      const navbarOffset = 110;
      let activeId = 'home';

      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }

        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= navbarOffset) {
          activeId = id;
        }
      }

      setCurrentPage(prev => (prev === activeId ? prev : activeId));
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    const cancelOnUserInput = () => {
      stopAutoScroll();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
      if (scrollKeys.includes(event.key)) {
        stopAutoScroll();
      }
    };

    const hashId = window.location.hash.replace('#', '');
    if (hashId) {
      setTimeout(() => scrollToSection(hashId), 0);
    }

    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    window.addEventListener('wheel', cancelOnUserInput, { passive: true });
    window.addEventListener('touchstart', cancelOnUserInput, { passive: true });
    window.addEventListener('mousedown', cancelOnUserInput);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      stopAutoScroll();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('wheel', cancelOnUserInput);
      window.removeEventListener('touchstart', cancelOnUserInput);
      window.removeEventListener('mousedown', cancelOnUserInput);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={scrollToSection} />
      <main className="flex-grow">
        <section id="home" className="scroll-mt-24">
          <Home onNavigate={scrollToSection} />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="service" className="scroll-mt-24">
          <Services onNavigate={scrollToSection} />
        </section>

        <section id="secretory" className="scroll-mt-24">
          <Secretory />
        </section>

        <section id="happen" className="scroll-mt-24">
          <Happen />
        </section>

        <section id="event-calendar" className="scroll-mt-24">
          <EventCalendar />
        </section>

        <section id="earnings" className="scroll-mt-24">
          <Earnings />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
