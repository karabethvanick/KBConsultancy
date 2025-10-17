import { Footprints, Sparkles, Palette, Users, Moon } from 'lucide-react';
import { motion } from "framer-motion";

interface TherapyProps {
  onNavigate: (page: string) => void;
}

export default function Therapy({ onNavigate }: TherapyProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] bg-gradient-to-br from-violet-700 via-purple-600 to-indigo-700 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Therapy Services</h1>
          <p className="text-xl text-slate-100 max-w-3xl">
            Compassionate, evidence-based therapy tailored to your unique needs and goals.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              I offer a range of therapeutic approaches designed to meet you where you are. Whether you're
              navigating life transitions, processing trauma, managing anxiety or depression, or seeking
              personal growth, I provide a safe and supportive space for healing and transformation.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Walk-and-Talk */}
            <div className="bg-white border-2 border-violet-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-violet-100 rounded-full mb-4">
                <Footprints className="text-violet-600" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">Walk-and-Talk Therapy</h3>
              <p className="text-slate-600 leading-relaxed">
                Combine the benefits of movement with therapeutic conversation. Walk-and-talk sessions
                take us outdoors, allowing for a more relaxed, natural setting that can enhance
                reflection and insight while promoting physical well-being.
              </p>
            </div>

            {/* Mindfulness */}
            <div className="bg-white border-2 border-purple-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-purple-100 rounded-full mb-4">
                <Sparkles className="text-purple-600" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">Mindfulness-Based Therapy</h3>
              <p className="text-slate-600 leading-relaxed">
                Learn practical mindfulness techniques to manage stress, regulate emotions, and
                cultivate present-moment awareness. These evidence-based practices can be integrated
                into your daily life for lasting change.
              </p>
            </div>

            {/* Art, Play & Water */}
            <div className="bg-white border-2 border-purple-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-purple-100 rounded-full mb-4">
                <Palette className="text-purple-600" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">Art, Play & Water Therapy</h3>
              <p className="text-slate-600 leading-relaxed">
                Art, Play, and Water Therapy blend creative and sensory experiences to support emotional healing and 
                psychological growth. Through expressive art, imaginative play, and the calming flow of water-based 
                activities, individuals can process emotions, release tension, and rebuild a sense of safety and control. 
                These therapeutic approaches are especially effective for children and trauma survivors, encouraging 
                nonverbal communication, self-awareness, and emotional regulation within a nurturing and supportive environment.
              </p>
            </div>

            {/* Youth-Focused Care */}
            <div className="bg-white border-2 border-indigo-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-indigo-100 rounded-full mb-4">
                <Users className="text-indigo-600" size={28} />
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

      {/* Evening Sessions banner */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative overflow-hidden rounded-xl p-8 text-white shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* Animated gradient background (shifted to purple family) */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              />

              {/* Subtle twinkling stars */}
              {[...Array(20)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-80"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Content */}
              <div className="relative flex flex-col md:flex-row items-center gap-6 z-10">
                <motion.div
                  className="flex-shrink-0"
                  animate={{ y: [0, -5, 0], scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400/30 to-yellow-200/20 backdrop-blur-sm">
                    <Moon className="text-yellow-300" size={32} />
                  </div>
                </motion.div>

                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-2 text-violet-100">Evening Sessions Available</h3>
                  <p className="text-violet-100 leading-relaxed">
                    I offer late-night therapy sessions to accommodate busy schedules. Because mental health
                    care should be accessible when you need it most.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-lg font-semibold hover:from-violet-400 hover:to-purple-400 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
