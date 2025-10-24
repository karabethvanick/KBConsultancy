import { Dumbbell, Trophy, Bike, Users as Users2 } from 'lucide-react';

interface CoachingProps {
  onNavigate: (page: string) => void;
}

export default function Coaching({ onNavigate }: CoachingProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-5 gap-2 opacity-20">
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/coaching/IMG_2256.jpg)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/coaching/IMG_1265.JPG)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/coaching/IMG_6946.jpg)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/coaching/IMG_5015.jpg)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/coaching/IMG_0433.jpg)' }}></div>
        </div>

        {/* soft gradient overlay to match other pages */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 via-violet-500 to-purple-300 opacity-95"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-sm">
            Coaching Services
          </h1>
          <p className="text-xl text-white/90 font-semibold max-w-3xl">
            Personalized training programs to help you reach your fitness and endurance goals.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-gradient-to-br from-white via-violet-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether you're training for your first 5K or preparing for an endurance event, I
              provide expert coaching that considers not just your physical training, but your mental
              preparation and overall well-being. My integrated approach sets you up for sustainable
              success.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Endurance Athlete Coaching */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-center w-14 h-14 bg-violet-100 rounded-full mb-4">
                <Trophy className="text-violet-500" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                Endurance Athlete Coaching
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Comprehensive training plans for runners, cyclists, swimmers, triathletes, and endurance
                athletes. Programs include:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Personalized training schedules with periodization</li>
                <li>• Nutrition and hydration strategies</li>
                <li>• Mental performance coaching</li>
                <li>• Injury prevention and recovery protocols</li>
                <li>• Race day preparation and strategy</li>
              </ul>
            </div>

            {/* Personal Training */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-center w-14 h-14 bg-purple-100 rounded-full mb-4">
                <Dumbbell className="text-purple-500" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                Personal Training
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                One-on-one and small group training for individuals at all fitness levels. Services include:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Customized strength and conditioning programs</li>
                <li>• Functional fitness training</li>
                <li>• Form correction and technique coaching</li>
                <li>• Goal setting and accountability</li>
                <li>• Fitness assessments and progress tracking</li>
                <li>• Intuitive Eating Coach</li>
              </ul>
            </div>

            {/* Inclusive Fitness */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-center w-14 h-14 bg-indigo-100 rounded-full mb-4">
                <Users2 className="text-indigo-500" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                Inclusive Fitness & Wellness Programs
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Designed for individuals of all ages and abilities, my fitness and wellness programs promote 
                lifelong healthy habits through movement, strength, and connection.
              </p>
              <ul className="list-disc pl-6 text-slate-600 leading-relaxed mt-2">
                <li>Fun and engaging movement activities for all ability levels</li>
                <li>Personalized skill development and progress tracking</li>
                <li>Body confidence and positive self-image building</li>
                <li>Inclusive team-based and social interaction exercises</li>
                <li>Safe, adaptive, and developmentally appropriate training</li>
              </ul>
            </div>

            {/* Mind-Body Connection */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-center w-14 h-14 bg-violet-100 rounded-full mb-4">
                <Bike className="text-violet-500" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                The Mind-Body Connection
              </h3>
              <p className="text-slate-600 leading-relaxed">
                What sets my coaching apart is the seamless integration of therapeutic insight with physical training. 
                By addressing both the body and the mind, I help individuals move beyond mental barriers, build emotional 
                resilience, and cultivate inner strength—developing personalized tools to manage stress, sustain motivation, 
                and achieve long-term balance in health, fitness, and life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-100 via-indigo-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Start Training?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Let's work together to create a training plan that fits your goals, schedule, and lifestyle.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 text-white rounded-lg font-semibold hover:from-indigo-300 hover:via-violet-300 hover:to-purple-300 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
