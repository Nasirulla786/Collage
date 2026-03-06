import React, { useState } from "react";
import {
  Code2,
  BarChart3,
  Brain,
  Briefcase,
  TrendingUp,
  Lightbulb,
  Users,
  Trophy,
} from "lucide-react";

interface ServiceProps {
  onNavigate?: (page: string) => void;
}

const Services: React.FC<ServiceProps> = ({ onNavigate }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      desc: "Learn HTML, CSS, JavaScript, React, and MERN Stack. Build real-world projects and industry-ready websites.",
      iconColor: "text-blue-500",
    },
    {
      icon: BarChart3,
      title: "Data Science",
      desc: "Hands-on training in Python, Data Analysis, Machine Learning with real datasets.",
      iconColor: "text-purple-500",
    },
    {
      icon: Brain,
      title: "DSA & Problem Solving",
      desc: "Master Data Structures & Algorithms with interview-focused practice and challenges.",
      iconColor: "text-orange-500",
    },
    {
      icon: Briefcase,
      title: "Placement Preparation",
      desc: "Resume building, mock interviews, HR rounds, and technical interview preparation.",
      iconColor: "text-green-500",
    },
    {
      icon: TrendingUp,
      title: "Aptitude Training",
      desc: "Improve quantitative aptitude, logical reasoning, and verbal skills for exams.",
      iconColor: "text-indigo-500",
    },
    {
      icon: Lightbulb,
      title: "Workshops & Seminars",
      desc: "Technology workshops, hackathons, career guidance, and expert talks.",
      iconColor: "text-yellow-500",
    },
    {
      icon: Users,
      title: "Competitive Programming",
      desc: "Practice on CodeChef & LeetCode with mentor guidance and weekly contests.",
      iconColor: "text-rose-500",
    },
    {
      icon: Trophy,
      title: "NICMET & Exam Prep",
      desc: "Focused preparation for NICMET and national-level competitive exams.",
      iconColor: "text-cyan-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
          Our Services
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Industry-focused training designed for skills, confidence, and career growth
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`transition-all duration-300 ${
                  hoveredIndex === index ? "scale-[1.03]" : ""
                }`}
              >
                <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">

                  {/* Icon */}
                  <div className="mb-5">
                    <Icon className={`w-10 h-10 ${service.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-extrabold mb-10">
            Why Choose Udaan – The Endless Journey?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2">Expert Mentorship</h3>
              <p className="text-white/90">Learn directly from industry professionals</p>
            </div>

            <div>
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2">Career Ready</h3>
              <p className="text-white/90">Training focused on placements & jobs</p>
            </div>

            <div>
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Practical Learning</h3>
              <p className="text-white/90">Hands-on projects & real experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 pb-20 text-center">
        <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
          Ready to Start Your Journey?
        </h2>

        <p className="text-lg text-gray-300 mb-8">
          Join hundreds of students already growing with us
        </p>

        <button
          onClick={() => onNavigate?.("about")}
          className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:scale-105 transition"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Services;
