import { Dumbbell, Trophy, Bike, Users as Users2 } from 'lucide-react';

interface CoachingProps {
  onNavigate: (page: string) => void;
}

export default function Coaching({ onNavigate }: CoachingProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-5 gap-2 opacity-20">
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/coaching/IMG_2256.jpg)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/coaching/IMG_1265.JPG)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/coaching/IMG_6946.jpg)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/coaching/IMG_5015.jpg)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/coaching/IMG_0433.jpg)' }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/95 via-purple-800/95 to-indigo-900/95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 text-white mb-4">Coaching Services</h1>
          <p className="text-xl text-slate-600 text-white max-w-3xl">
            Personalized training programs to help you reach your fitness and endurance goals.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether you're training for your first 5K or preparing for an endurance event, I
              provide expert coaching that considers not just your physical training, but your mental
              preparation and overall well-being. My integrated approach sets you up for sustainable
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border-2 border-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
                <Trophy className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">Endurance Athlete Coaching</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Comprehensive training plans for runners, cyclists, swimmers,triathletes, and endurance
                athletes. Programs include:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Personalized training schedules with periodization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Nutrition and hydration strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Mental performance coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Injury prevention and recovery protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Race day preparation and strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Intuitive Eating Coach</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-emerald-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full mb-4">
                <Dumbbell className="text-emerald-600" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">Personal Training</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                One-on-one and small group training for individuals at all fitness levels. Services include:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Customized strength and conditioning programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Functional fitness training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Form correction and technique coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Goal setting and accountability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Fitness assessments and progress tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-cyan-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-cyan-100 rounded-full mb-4">
                <Users2 className="text-cyan-600" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">Inclusive Fitness & Wellness Programs</h3>
<p className="text-slate-600 leading-relaxed">
  Designed for individuals of all ages and abilities, our fitness and wellness programs promote 
  lifelong healthy habits through movement, strength, and connection. Each session encourages 
  participants to discover joy in physical activity while improving mobility, confidence, and 
  overall well-being. We focus on fun, adaptable exercises, sport-specific skill development, 
  and mindful body awareness—creating a supportive environment where everyone can thrive at 
  their own pace.
</p>
<ul className="list-disc pl-6 text-slate-600 leading-relaxed mt-2">
  <li>Fun and engaging movement activities for all ability levels</li>
  <li>Personalized skill development and progress tracking</li>
  <li>Body confidence and positive self-image building</li>
  <li>Inclusive team-based and social interaction exercises</li>
  <li>Safe, adaptive, and developmentally appropriate training</li>
</ul>
            </div>

            <div className="bg-white border-2 border-slate-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-slate-100 rounded-full mb-4">
                <Bike className="text-slate-600" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">The Mind-Body Connection</h3>
              <p className="text-slate-600 leading-relaxed">
              What sets my coaching apart is the seamless integration of therapeutic insight with physical training. 
  By addressing both the body and the mind, I help individuals move beyond mental barriers, build emotional 
  resilience, and cultivate inner strength. Together, we explore how mindset, stress, and emotions influence 
  performance and overall well-being—developing personalized tools to manage anxiety, sustain motivation, 
  and achieve long-term balance in health, fitness, and life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Start Training?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Let's work together to create a training plan that fits your goals, schedule, and lifestyle.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
