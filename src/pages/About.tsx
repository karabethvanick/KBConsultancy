import { Award, Heart, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] bg-gradient-to-br from-indigo-300 via-violet-500 to-purple-300 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-sm">
            About Karabeth
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Combining professional expertise with personal experience to guide
            you toward holistic wellness.
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 bg-gradient-to-br from-white via-violet-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                I am a Licensed Independent Clinical Social Worker (LICSW) and
                Certified Personal Trainer (CPT) with a passion for helping
                individuals discover their strength—both mental and physical. My
                practice integrates evidence-based therapeutic approaches with
                fitness and endurance coaching to support holistic well-being.
              </p>

              <p className="text-slate-700 leading-relaxed mb-6">
                Throughout my career, I’ve worked with diverse populations,
                specializing in youth mental health, trauma-informed care, and
                athletic performance coaching. As a Certified Yoga Instructor, I
                incorporate mindfulness, breathwork, and restorative movement
                into sessions to promote balance and self-awareness.
              </p>

              <p className="text-slate-700 leading-relaxed mb-6">
                I believe in meeting clients where they are and creating a safe,
                supportive environment for growth and transformation. My work is
                deeply rooted in the understanding that our minds and bodies are
                interconnected. Whether through walk-and-talk therapy sessions,
                mindfulness practices, or structured training programs, I help
                clients discover their strengths and set both short- and
                long-term goals for sustainable growth.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Credentials */}
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-center w-12 h-12 bg-violet-500 rounded-full mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Credentials
                </h3>
                <ul className="text-slate-600 space-y-1 text-sm">
                  <li>LICSW - Licensed Independent Clinical Social Worker</li>
                  <li>CPT - Certified Personal Trainer</li>
                  <li>Endurance Coaching Certification</li>
                  <li>RYT - Registered Yoga Teacher</li>
                </ul>
              </div>

              {/* Specializations */}
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-full mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Specializations
                </h3>
                <ul className="text-slate-600 space-y-1 text-sm">
                  <li>Youth Mental Health</li>
                  <li>Trauma-Informed Care</li>
                  <li>Athlete Mental & Physical Performance</li>
                  <li>Family Based Therapy</li>
                </ul>
              </div>

              {/* Mission */}
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-full mb-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Mission
                </h3>
                <p className="text-slate-600 text-sm">
                  To empower individuals to improve their mental and physical
                  health through a holistic, compassionate, and evidence-based
                  approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ironman Section */}
      <section className="py-16 bg-gradient-to-r from-violet-100 via-indigo-100 to-purple-100">
  <div className="container mx-auto px-4">
  <div className="max-w-4xl mx-auto text-left leading-relaxed">
  <h2 className="text-3xl font-bold text-slate-800 mb-4">
        The Road to Ironman World Championships 2026
      </h2>
      <p className="text-lg text-slate-600 mb-6">
        I’m currently training for the <span className="font-semibold text-violet-700">Ironman World Championships</span> in Kona, HI on 
        <span className="font-medium"> October 10, 2026</span>. This endurance event covers 
        <span className="font-medium"> 140.6 miles</span> of swimming, biking, and running.
      </p>
      <p className="text-lg text-slate-600 mb-6">
        Competing in triathlons informs my coaching philosophy and helps me better understand the
        mental and physical challenges my athlete clients experience. Please support me as I raise
        <span className="font-medium text-violet-700"> $25,000</span> for the 
        <span className="font-semibold text-violet-700"> Ironman Foundation</span> — a non-profit charity that brings
        health and wellness programs to underserved communities with a focus on youth development.
      </p>
      <a
        href="#"
        className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 text-white rounded-lg font-semibold hover:from-indigo-300 hover:via-violet-300 hover:to-purple-300 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Support My Ironman Journey
      </a>
    </div>
  </div>
</section>

    </div>
  );
}
