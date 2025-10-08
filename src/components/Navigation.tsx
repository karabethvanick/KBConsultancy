import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'therapy', label: 'Therapy' },
    { id: 'coaching', label: 'Coaching' },
    { id: 'events', label: 'Events' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => handleNavClick('home')}
            className="text-xl md:text-2xl font-semibold text-emerald-700 hover:text-emerald-600 transition-colors"
          >
            Karabeth Vanick
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors ${
                  currentPage === item.id
                    ? 'text-emerald-600 font-semibold'
                    : 'text-slate-700 hover:text-emerald-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 px-4 rounded transition-colors ${
                    currentPage === item.id
                      ? 'bg-emerald-50 text-emerald-600 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
