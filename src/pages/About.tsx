import { Users, Target, Lightbulb, Clock } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-16 relative overflow-hidden">

      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-0 -right-4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 -left-4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
              About Udaan - The Endless Journey
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Empowering students through technology and innovation ✨
            </p>
          </div>

          <div className="space-y-8">

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-10 border border-indigo-500/30 backdrop-blur-xl hover:border-indigo-500/60 transition-all duration-300 group">

              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Our Mission
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg">
                The Udaan - The Endless Journey at College of Smart Computing
                (COSC) is dedicated to fostering a vibrant community of
                passionate coders, developers, and technology enthusiasts. We
                believe in the power of collaborative learning and hands-on
                experience to shape the future of technology and empower the
                next generation of innovators.
              </p>
            </div>

            {/* What We Do */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-10 border border-purple-500/30 backdrop-blur-xl hover:border-purple-500/60 transition-all duration-300 group">

              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mr-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  What We Do
                </h2>
              </div>

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-4 mt-1 text-xl">✓</span>
                  <span className="text-lg">
                    Conduct regular workshops and hands-on coding sessions
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-purple-400 mr-4 mt-1 text-xl">✓</span>
                  <span className="text-lg">
                    Organize hackathons and coding competitions
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-pink-400 mr-4 mt-1 text-xl">✓</span>
                  <span className="text-lg">
                    Facilitate collaborative project development
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-orange-400 mr-4 mt-1 text-xl">✓</span>
                  <span className="text-lg">
                    Host guest lectures from industry professionals
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-cyan-400 mr-4 mt-1 text-xl">✓</span>
                  <span className="text-lg">
                    Provide mentorship and career guidance
                  </span>
                </li>
              </ul>
            </div>

            {/* Leadership Team */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-10 border border-pink-500/30 backdrop-blur-xl hover:border-pink-500/60 transition-all duration-300 group">

              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Leadership Team
                </h2>
              </div>

              <div className="space-y-6">

                {/* Mentor */}
                <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-l-4 border-indigo-500 pl-6 pr-6 py-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-white mb-2">Mentor</h3>
                  <p className="text-gray-300 text-lg font-semibold">
                    Dr. Gesu Thakur
                  </p>
                </div>

                {/* Convenor */}
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-l-4 border-purple-500 pl-6 pr-6 py-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Convenor
                  </h3>
                  <p className="text-gray-300 text-lg font-semibold">
                    👨‍🏫 Dr. Ankush Joshi
                  </p>
                </div>

                {/* Co-Convenors */}
                <div className="bg-gradient-to-r from-orange-600/20 to-yellow-600/20 border-l-4 border-orange-500 pl-6 pr-6 py-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Co-Convenors
                  </h3>

                  <div className="space-y-2">
                    <p className="text-gray-300 text-lg font-semibold">
                      👨‍🏫 Mr Aditya Rathi
                    </p>
                    <p className="text-gray-300 text-lg font-semibold">
                      👨‍🏫 Mr Ravi Kumar
                    </p>
                  </div>
                </div>

                {/* Organized By */}
                <div className="bg-gradient-to-r from-pink-600/20 to-orange-600/20 border-l-4 border-pink-500 pl-6 pr-6 py-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Organized By
                  </h3>
                  <p className="text-gray-300 text-lg font-semibold">
                    🏫 College of Smart Computing (COSC)
                  </p>
                </div>

              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-10 border border-cyan-500/30 backdrop-blur-xl hover:border-cyan-500/60 transition-all duration-300 group">

              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl mr-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  24/7 Support
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-xl p-6 border border-cyan-500/50">
                  <p className="text-cyan-300 font-bold text-lg mb-2">
                    🌟 Main Hours
                  </p>
                  <p className="text-white font-bold text-2xl mb-1">
                    4:00 PM - 10:00 PM
                  </p>
                  <p className="text-gray-400 text-sm">
                    Peak activity time - Most support available
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-xl p-6 border border-indigo-500/50">
                  <p className="text-indigo-300 font-bold text-lg mb-2">
                    🔔 24/7 Open
                  </p>
                  <p className="text-white font-bold text-2xl mb-1">
                    Always Available
                  </p>
                  <p className="text-gray-400 text-sm">
                    24 hours a day - We're always here for you
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
