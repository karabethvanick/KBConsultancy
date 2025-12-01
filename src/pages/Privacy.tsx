import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Privacy Policy & Terms
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Your privacy and confidentiality are my highest priorities.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-emerald-50 border-2 border-emerald-100 rounded-xl p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-full mb-4">
                  <Shield className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">HIPAA Compliant</h3>
                <p className="text-slate-600 text-sm">
                  All therapy services are conducted in full compliance with HIPAA regulations to
                  protect your health information.
                </p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-100 rounded-xl p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                  <Lock className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Secure Communications</h3>
                <p className="text-slate-600 text-sm">
                  All digital communications and data storage use industry-standard encryption to
                  keep your information safe.
                </p>
              </div>

              <div className="bg-slate-50 border-2 border-slate-100 rounded-xl p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-slate-600 rounded-full mb-4">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Confidentiality</h3>
                <p className="text-slate-600 text-sm">
                  Your therapy sessions and personal information remain strictly confidential except
                  as required by law.
                </p>
              </div>

              <div className="bg-teal-50 border-2 border-teal-100 rounded-xl p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-full mb-4">
                  <FileText className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Professional Standards</h3>
                <p className="text-slate-600 text-sm">
                  All services adhere to the ethical guidelines of professional licensing boards and
                  certification organizations.
                </p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Privacy Policy</h2>

                <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Information Collection</h3>
                <p className="text-slate-700 leading-relaxed">
                  This website collects only the information you voluntarily provide through contact
                  forms and newsletter subscriptions. This includes your name and email address. We
                  do not collect sensitive health information through this website. All clinical
                  information is managed separately through secure, HIPAA-compliant systems.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Use of Information</h3>
                <p className="text-slate-700 leading-relaxed">
                  Contact form submissions are used solely to respond to your inquiries and schedule
                  consultations. Email addresses collected through newsletter subscriptions are used
                  only to send updates about services, events, and wellness resources. You may
                  unsubscribe at any time.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Data Security</h3>
                <p className="text-slate-700 leading-relaxed">
                  All data collected through this website is stored securely using industry-standard
                  encryption. We implement appropriate technical and organizational measures to protect
                  your personal information against unauthorized access, alteration, or destruction.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Third-Party Services</h3>
                <p className="text-slate-700 leading-relaxed">
                  This website uses secure third-party services for hosting and email delivery. These
                  providers are carefully selected for their security standards and commitment to data
                  protection. We do not sell, trade, or share your information with third parties for
                  marketing purposes.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Cookies</h3>
                <p className="text-slate-700 leading-relaxed">
                  This website uses minimal cookies necessary for basic functionality. We do not use
                  tracking or advertising cookies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Terms of Service</h2>

                <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Professional Relationship</h3>
                <p className="text-slate-700 leading-relaxed">
                  Use of this website does not create a therapist-client or coach-client relationship.
                  Professional relationships are established through formal consultation and signed
                  service agreements.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">No Emergency Services</h3>
                <p className="text-slate-700 leading-relaxed">
                  This website is not for emergency use. If you are experiencing a mental health
                  emergency, please call 911 or contact your local crisis hotline. National Suicide
                  Prevention Lifeline: 988.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Disclaimer</h3>
                <p className="text-slate-700 leading-relaxed">
                  Information provided on this website is for general educational purposes only and
                  does not constitute professional advice, diagnosis, or treatment. Always seek the
                  advice of qualified health providers with questions regarding your specific situation.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Testimonials</h3>
                <p className="text-slate-700 leading-relaxed">
                  All testimonials are shared with explicit client consent and have been anonymized to
                  protect privacy. Results may vary, and testimonials are not a guarantee of specific
                  outcomes.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Changes to Policy</h3>
                <p className="text-slate-700 leading-relaxed">
                  This privacy policy and terms of service may be updated periodically. Continued use
                  of this website after changes constitutes acceptance of the updated terms.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Contact</h3>
                <p className="text-slate-700 leading-relaxed">
                  If you have questions about these policies or your data, please contact
                  kbvcounseling@gmail.com
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-emerald-50 border-2 border-emerald-200 rounded-xl">
              <p className="text-sm text-slate-600 text-center">
                Last Updated: {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
