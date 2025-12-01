import { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import emailjs from '@emailjs/browser';


interface ContactProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      // 1️⃣ Save to Supabase (same as before)
      const { error: submitError } = await supabase
        .from('contacts')
        .insert([formData]);
  
      if (submitError) throw submitError;
  
      // 2️⃣ Send email via EmailJS + Gmail
      const emailResult = await emailjs.send(
        'service_gxs6ysx',   // 👈 from EmailJS
        'template_t7vk0jp',  // 👈 from EmailJS
        {
          name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'oubqIZcZoWMBL4dYt'    // 👈 from EmailJS
      );
  
      console.log('EmailJS result:', emailResult.text);
  
      // 3️⃣ Success UI
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-300 via-violet-500 to-purple-300">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-sm">Get in Touch</h1>
          <p className="text-xl text-white/90 font-semibold max-w-3xl">
            Ready to start your journey? Reach out to schedule a consultation or ask any questions.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-gradient-to-br from-white via-violet-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Contact Information</h2>
              <p className="text-slate-600 mb-8">
                I'm here to answer your questions and help you take the first step toward wellness.
                Feel free to reach out using the contact form or through the information below.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-violet-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                    <a href="mailto:kbvcounseling@gmail.com" className="text-violet-600 hover:text-violet-700">
                      kbvcounseling@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                    <p className="text-slate-600">Available upon request</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Location</h3>
                    <p className="text-slate-600">Serving the local community</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-2">Response Time</h3>
                <p className="text-slate-600 text-sm">
                  I typically respond to inquiries within 24–48 hours. If you need immediate support,
                  please contact your local crisis hotline.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-violet-50 border border-violet-200 rounded-lg flex items-start">
                    <CheckCircle className="text-violet-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="font-semibold text-violet-800">Message sent successfully!</p>
                      <p className="text-sm text-violet-700 mt-1">Thank you for reaching out. I'll get back to you soon.</p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-violet-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-violet-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-violet-500 transition-colors resize-none"
                      placeholder="Tell me how I can help you..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-4 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 text-white rounded-lg font-semibold hover:from-indigo-300 hover:via-violet-300 hover:to-purple-300 transition-all duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center shadow-md hover:shadow-lg"
                  >
                    {loading ? (
                      <div className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting this form, you agree to my{' '}
                    <button
                      type="button"
                      onClick={() => onNavigate('privacy')}
                      className="text-violet-600 hover:text-violet-700 underline"
                    >
                      Privacy Policy
                    </button>
                    . No sensitive health information should be included in this form.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
