import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-800 text-slate-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Karabeth Vanick</h3>
            <p className="text-slate-300 mb-2">LICSW, CPT</p>
            <p className="text-slate-400 text-sm">
              Licensed Therapist, Personal Trainer & Endurance Coach
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => onNavigate('about')}
                className="block text-slate-300 hover:text-emerald-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => onNavigate('therapy')}
                className="block text-slate-300 hover:text-emerald-400 transition-colors"
              >
                Therapy Services
              </button>
              <button
                onClick={() => onNavigate('coaching')}
                className="block text-slate-300 hover:text-emerald-400 transition-colors"
              >
                Coaching Services
              </button>
              <button
                onClick={() => onNavigate('privacy')}
                className="block text-slate-300 hover:text-emerald-400 transition-colors"
              >
                Privacy & Terms
              </button>
              <button
                onClick={() => onNavigate('admin')}
                className="block text-slate-300 hover:text-emerald-400 transition-colors text-xs mt-4"
              >
                Admin Login
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-emerald-400" />
                <a
                  href="mailto:karabeth@karabethvanick.com"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  karabeth@karabethvanick.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-emerald-400" />
                <span className="text-slate-300">Available for inquiries</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-emerald-400" />
                <span className="text-slate-300">Serving the local community</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Karabeth Vanick. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
