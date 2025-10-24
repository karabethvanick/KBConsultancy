import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { supabase, Testimonial } from '../lib/supabase';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const initial = (name?: string) =>
    (name?.trim()?.charAt(0)?.toUpperCase() || 'K'); // graceful fallback

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - soft site gradient */}
      <section className="py-16 bg-gradient-to-br from-indigo-300 via-violet-500 to-purple-300">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-sm">
            Client Testimonials
          </h1>
          <p className="text-xl text-white/90 font-semibold max-w-3xl">
            Hear from individuals who have experienced growth and transformation through therapy and coaching.
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-16 bg-gradient-to-br from-white via-violet-50 to-indigo-100">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
              <p className="mt-4 text-slate-600">Loading testimonials...</p>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center py-12">
              <Quote className="mx-auto text-violet-300 mb-4" size={64} />
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                No Testimonials Yet
              </h3>
              <p className="text-slate-600">
                Check back soon to read about client experiences and success stories.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-md transition border border-violet-100"
                >
                  <Quote className="text-violet-600 mb-4" size={32} />
                  <p className="text-slate-700 leading-relaxed mb-6 italic">
                    “{t.text}”
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {initial(t.name_or_initials)}
                    </div>
                    <p className="font-semibold text-slate-800">
                      {t.name_or_initials || 'Client'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Privacy note */}
      <section className="py-16 bg-gradient-to-r from-violet-100 via-indigo-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Your Privacy Matters
            </h2>
            <p className="text-lg text-slate-600">
              All testimonials are shared with client consent and anonymized to protect privacy.
              No personally identifiable health information is ever disclosed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
