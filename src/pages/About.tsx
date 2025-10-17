import { Award, Heart, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] bg-gradient-to-br from-violet-700 via-purple-600 to-indigo-700 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Karabeth
          </h1>
          <p className="text-xl text-slate-100 max-w-3xl">
            Combining professional expertise with personal experience to guide
            you toward holistic wellness.
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16">
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
              <div className="bg-violet-50 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-violet-600 rounded-full mb-4">
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
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full mb-4">
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
              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full mb-4">
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
      <section className="py-16 bg-violet-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              The Road to Ironman 2026
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              I’m currently training for my first Ironman Triathlon in 2026.
              This personal journey of endurance and resilience inspires my
              coaching philosophy and helps me better understand the mental and
              physical challenges my athlete clients experience. I’m also
              training for my second Ironman World Championship in Kona,
              Hawai‘i, continuing to push the limits of strength, focus, and
              perseverance—both personally and professionally.
            </p>
            <p className="text-slate-600 mb-8">
              Following this journey and want to support? I'm raising funds for
              a cause close to my heart.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-lg font-semibold hover:from-violet-400 hover:to-purple-400 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Support My Ironman Journey
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
