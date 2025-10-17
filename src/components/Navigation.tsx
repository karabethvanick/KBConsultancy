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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <button
            onClick={() => handleNavClick('home')}
            className="text-2xl font-semibold text-violet-700 hover:text-violet-600 transition-colors"
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

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`pb-1 border-b-2 transition-colors ${
                    active
                      ? 'border-violet-500 text-violet-700'
                      : 'border-transparent text-slate-600 hover:border-violet-400 hover:text-violet-700'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50 rounded-sm`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 animate-slideDown origin-top">
            <div className="flex flex-col rounded-xl border border-slate-200 bg-white/95 shadow-sm overflow-hidden">
              {navItems.map((item) => {
                const active = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left py-3 px-4 transition-colors ${
                      active
                        ? 'bg-violet-50 text-violet-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* thin accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-violet-700 via-purple-600 to-indigo-500" />
    </nav>
  );
}
