import { Footprints, Sparkles, Palette, Users, Moon } from 'lucide-react';

interface TherapyProps {
  onNavigate: (page: string) => void;
}

export default function Therapy({ onNavigate }: TherapyProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Therapy Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Compassionate, evidence-based therapy tailored to your unique needs and goals.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              I offer a range of therapeutic approaches designed to meet you where you are. Whether you're
              navigating life transitions, processing trauma, managing anxiety or depression, or seeking
              personal growth, I provide a safe and supportive space for healing and transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border-2 border-emerald-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full mb-4">
                <Footprints className="text-emerald-600" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">Walk-and-Talk Therapy</h3>
              <p className="text-slate-600 leading-relaxed">
                Combine the benefits of movement with therapeutic conversation. Walk-and-talk sessions
                take us outdoors, allowing for a more relaxed, natural setting that can enhance
                reflection and insight while promoting physical well-being.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
                <Sparkles className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">Mindfulness-Based Therapy</h3>
              <p className="text-slate-600 leading-relaxed">
                Learn practical mindfulness techniques to manage stress, regulate emotions, and
                cultivate present-moment awareness. These evidence-based practices can be integrated
                into your daily life for lasting change.
              </p>
            </div>

            <div className="bg-white border-2 border-purple-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-purple-100 rounded-full mb-4">
                <Palette className="text-purple-600" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">Art & Play Therapy</h3>
              <p className="text-slate-600 leading-relaxed">
                Creative expression can unlock healing in ways that words alone cannot. Through art
                and play-based interventions, particularly effective with youth, we explore emotions,
                process experiences, and build coping skills in engaging ways.
              </p>
            </div>

            <div className="bg-white border-2 border-teal-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-teal-100 rounded-full mb-4">
                <Users className="text-teal-600" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">Youth-Focused Care</h3>
              <p className="text-slate-600 leading-relaxed">
                Specialized services for children and adolescents navigating developmental challenges,
                school stress, family transitions, and mental health concerns. I create a supportive
                environment where young people feel heard and empowered.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                    <Moon className="text-white" size={32} />
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-2">Evening Sessions Available</h3>
                  <p className="text-slate-200">
                    I offer late-night therapy sessions to accommodate busy schedules. Because mental
                    health care should be accessible when you need it most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Begin?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Taking the first step toward therapy is an act of courage. I'm here to support you on
              your journey toward healing and growth.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
