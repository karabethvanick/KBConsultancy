import { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Therapy from './pages/Therapy';
import Coaching from './pages/Coaching';
import Events from './pages/Events';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Admin from './pages/Admin';
import Photos from './pages/Photo';
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'therapy':
        return <Therapy onNavigate={handleNavigate} />;
      case 'coaching':
        return <Coaching onNavigate={handleNavigate} />;
      case 'events':
        return <Events />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'privacy':
        return <Privacy />;
      case 'admin':
        return <Admin />;
      case 'photo':
        return <Photos />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white flex flex-col">
        {currentPage !== 'admin' && (
          <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        )}
        <main className="flex-grow">{renderPage()}</main>
        {currentPage !== 'admin' && <Footer onNavigate={handleNavigate} />}
      </div>
    </AuthProvider>
  );
}

export default App;
