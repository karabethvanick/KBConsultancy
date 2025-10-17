import { Heart, Brain, Mountain } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] bg-gradient-to-br from-violet-700 via-purple-600 to-indigo-700 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Mind. Body. Resilience.
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-8">
              Integrative therapy and endurance coaching to help you thrive in all aspects of life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('therapy')}
                className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-xl font-semibold shadow-lg hover:from-violet-400 hover:to-purple-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                Therapy Services
              </button>

              <button
                onClick={() => onNavigate('coaching')}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-xl font-semibold shadow-lg hover:from-indigo-400 hover:to-violet-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                Coaching Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mental Wellness */}
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-4">
                <Brain className="text-violet-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Mental Wellness
              </h3>
              <p className="text-slate-600">
                Evidence-based therapy including walk-and-talk, mindfulness, and creative approaches.
              </p>
            </div>

            {/* Physical Health */}
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Heart className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Physical Health
              </h3>
              <p className="text-slate-600">
                Personal training and fitness programs designed for individuals of all ages and abilities.
              </p>
            </div>

            {/* Endurance Coaching */}
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <Mountain className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Endurance Coaching
              </h3>
              <p className="text-slate-600">
                Expert guidance for athletes training for marathons, triathlons, and other endurance events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Approach Section */}
      <section className="py-16 bg-violet-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            A Holistic Approach to Well-Being
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            As a licensed therapist and certified personal trainer, I understand that mental and
            physical health are deeply interconnected. My integrated approach helps clients build
            resilience, overcome challenges, and achieve their goals.
          </p>
          <button
            onClick={() => onNavigate('about')}
            className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-500 hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Learn More About My Approach
          </button>
        </div>
      </section>
    </div>
  );
}
