import { Award, Heart, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About Karabeth</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Combining professional expertise with personal experience to guide you toward holistic wellness.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                I am a Licensed Independent Clinical Social Worker (LICSW) and Certified Personal Trainer (CPT)
                with a passion for helping individuals discover their strength—both mental and physical. My
                practice integrates evidence-based therapeutic approaches with fitness and endurance coaching
                to support holistic well-being.
              </p>

              <p className="text-slate-700 leading-relaxed mb-6">
                Throughout my career, I've worked with diverse populations, specializing in youth mental health,
                trauma-informed care, and supporting athletes in their training journeys. I believe in meeting
                clients where they are and creating a safe, supportive environment for growth and transformation.
              </p>

              <p className="text-slate-700 leading-relaxed mb-6">
                My approach is deeply rooted in the understanding that our minds and bodies are interconnected.
                Whether through walk-and-talk therapy sessions that combine movement with reflection, mindfulness
                practices, or structured training programs, I help clients build resilience and achieve their goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-full mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Credentials</h3>
                <ul className="text-slate-600 space-y-1 text-sm">
                  <li>LICSW - Licensed Independent Clinical Social Worker</li>
                  <li>CPT - Certified Personal Trainer</li>
                  <li>Endurance Coaching Certification</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Specializations</h3>
                <ul className="text-slate-600 space-y-1 text-sm">
                  <li>Youth Mental Health</li>
                  <li>Trauma-Informed Care</li>
                  <li>Athlete Mental Performance</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-slate-600 rounded-full mb-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Mission</h3>
                <p className="text-slate-600 text-sm">
                  To empower individuals to achieve holistic wellness by integrating mental health support
                  with physical training and endurance coaching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Training for Ironman 2026</h2>
            <p className="text-lg text-slate-600 mb-6">
              I'm currently training for my first Ironman triathlon in 2026. This personal journey of
              endurance and resilience informs my coaching practice and allows me to truly understand
              the mental and physical challenges my athlete clients face.
            </p>
            <p className="text-slate-600 mb-8">
              Following this journey and want to support? I'm raising funds for a cause close to my heart.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Support My Ironman Journey
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
