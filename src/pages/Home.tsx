import { Code2, Users, Rocket, Award, Zap, Cpu, Globe } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const features = [
    {
      icon: <Code2 className="w-12 h-12 text-white" />,
      title: 'Learn to Code',
      description: 'Master programming languages and modern development tools',
      color: 'from-indigo-600 to-blue-600',
    },
    {
      icon: <Users className="w-12 h-12 text-wh ite" />,
      title: 'Collaborate',
      description: 'Work with peers on exciting projects and challenges',
      color: 'from-purple-600 to-pink-600',
    },
    {
      icon: <Rocket className="w-12 h-12 text-white" />,
      title: 'Build Projects',
      description: 'Create real-world applications and solutions',
      color: 'from-pink-600 to-rose-500',
    },
    {
      icon: <Award className="w-12 h-12 text-white" />,
      title: 'Compete',
      description: 'Participate in coding competitions and challenges',
      color: 'from-yellow-400 to-amber-500',
    },
    {
      icon: <Zap className="w-12 h-12 text-white" />,
      title: 'Innovate',
      description: 'Experiment with new tech and creative solutions',
      color: 'from-green-400 to-teal-500',
    },
    {
      icon: <Cpu className="w-12 h-12 text-white" />,
      title: 'Deep Dive Tech',
      description: 'Understand hardware, algorithms, and system design',
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: <Globe className="w-12 h-12 text-white" />,
      title: 'Global Exposure',
      description: 'Collaborate internationally and explore diverse ideas',
      color: 'from-blue-500 to-indigo-700',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Blobs & Patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-700 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/2 right-20 w-72 h-72 bg-pink-600 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl animate-pulse-slow"></div>
        </div>

      <div className='w-full flex  gap-5'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Left Logo */}
          <div className="relative flex-shrink-0">
            <div className="h-36 w-36 sm:h-40 sm:w-40 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-500">
              <img src="/logo.jpeg" alt="Udaan logo" className="h-36 w-36 sm:h-40 sm:w-40 rounded-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-3xl animate-pulse-slow"></div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-6xl font-extrabold mb-4 animate-slideUp">Udaan - The Endless Journey</h1>
            <p className="text-2xl text-white/90 mb-4 animate-slideUp" style={{ animationDelay: '0.1s' }}>
              Code, Create, Conquer - A Unique Experience
            </p>
            <p className="text-lg text-white/80 mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              Explore tech like never before with hands-on projects and global exposure.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => onNavigate('service')}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
              >
                Explore Programs
              </button>
            </div>
          </div>

          {/* Right Logo */}
          <div className="relative flex-shrink-0">
            <img
              src="/univLogo.jpeg"
              alt="University logo"
              className="h-36 w-36 sm:h-40 sm:w-40 rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>

        {/* Floating Icons */}
        <Code2 className="absolute top-10 right-1/3 w-12 h-12 text-indigo-400 opacity-50 animate-bounce-slow" />
        <Rocket className="absolute bottom-20 left-1/4 w-14 h-14 text-pink-400 opacity-50 animate-bounce-slow" />
        <Users className="absolute top-1/3 left-1/2 w-12 h-12 text-purple-400 opacity-50 animate-bounce-slow" />
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Unique Programs</h2>
            <p className="text-xl text-gray-300">Curated experiences to take your skills beyond the ordinary</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${feature.color} p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-500 animate-slideUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4 p-4 bg-white/20 rounded-xl w-fit mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900/80 p-10 rounded-3xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2">10+</div>
              <p className="text-gray-300 font-semibold">Projects Completed</p>
            </div>
            <div className="bg-gray-900/80 p-10 rounded-3xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">5+</div>
              <p className="text-gray-300 font-semibold">Unique Workshops</p>
            </div>
            <div className="bg-gray-900/80 p-10 rounded-3xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2">5+</div>
              <p className="text-gray-300 font-semibold">Tech Talks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Unique Data Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Why We Are Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/80 p-10 rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast Learning</h3>
              <p className="text-gray-300">Accelerated learning programs with real-time feedback</p>
            </div>
            <div className="bg-gray-800/80 p-10 rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Cpu className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tech Depth</h3>
              <p className="text-gray-300">Hands-on exploration of hardware, AI, and algorithms</p>
            </div>
            <div className="bg-gray-800/80 p-10 rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Globe className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Mindset</h3>
              <p className="text-gray-300">Exposure to international projects and diverse teams</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
