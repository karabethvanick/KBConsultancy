import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">Karabeth Vanick</h3>
            <p className="mb-2 text-slate-300">LICSW, CPT</p>
            <p className="text-sm text-slate-400">
              Licensed Therapist, Personal Trainer & Endurance Coach
            </p>

            <div className="mt-4 flex items-center space-x-4">
              <a
                href="https://instagram.com/"
                className="transition-transform hover:scale-105 hover:text-emerald-400"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                className="transition-transform hover:scale-105 hover:text-emerald-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => onNavigate('about')}
                className="block transition-colors hover:text-emerald-400"
              >
                About
              </button>
              <button
                onClick={() => onNavigate('therapy')}
                className="block transition-colors hover:text-emerald-400"
              >
                Therapy Services
              </button>
              <button
                onClick={() => onNavigate('coaching')}
                className="block transition-colors hover:text-emerald-400"
              >
                Coaching Services
              </button>
              <button
                onClick={() => onNavigate('privacy')}
                className="block transition-colors hover:text-emerald-400"
              >
                Privacy &amp; Terms
              </button>
              <button
                onClick={() => onNavigate('admin')}
                className="block transition-colors hover:text-emerald-400"
              >
                Admin Login
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-emerald-400" />
                <a
                  href="mailto:karabeth@karabethvanick.com"
                  className="transition-colors hover:text-emerald-400"
                >
                  karabeth@karabethvanick.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-emerald-400" />
                <span>Available for inquiries</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-emerald-400" />
                <span>Serving the local community</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Karabeth Vanick. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
