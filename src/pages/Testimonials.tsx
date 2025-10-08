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

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Client Testimonials
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Hear from individuals who have experienced growth and transformation through therapy and coaching.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-emerald-600 border-t-transparent"></div>
              <p className="mt-4 text-slate-600">Loading testimonials...</p>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center py-12">
              <Quote className="mx-auto text-slate-300 mb-4" size={64} />
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                No Testimonials Yet
              </h3>
              <p className="text-slate-600">
                Check back soon to read about client experiences and success stories.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gradient-to-br from-white to-emerald-50 border-2 border-emerald-100 rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <Quote className="text-emerald-600 mb-4" size={32} />
                  <p className="text-slate-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.name_or_initials.charAt(0)}
                    </div>
                    <p className="font-semibold text-slate-800">
                      {testimonial.name_or_initials}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-slate-50">
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
