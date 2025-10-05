import { Target, Users, Award, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { value: '500+', label: 'Enterprise Clients', gradient: 'from-cyan-400 to-blue-500' },
    { value: '10M+', label: 'Threats Blocked', gradient: 'from-blue-400 to-purple-500' },
    { value: '50+', label: 'Security Experts', gradient: 'from-purple-400 to-magenta-500' },
    { value: '15+', label: 'Years Experience', gradient: 'from-magenta-400 to-pink-500' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Vigilance',
      description: 'Constant monitoring and proactive threat detection to stay ahead of adversaries.',
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'World-class security professionals with deep knowledge across all domains.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Commitment to the highest standards of security and service delivery.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge technology and methodologies to combat evolving threats.',
    },
  ];

  return (
    <div className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 bg-clip-text text-transparent">
              About Aegis
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founded by cybersecurity veterans, Aegis represents the convergence of advanced AI technology
            and human expertise. We protect organizations worldwide from sophisticated cyber threats through
            intelligent, adaptive security solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 text-center transition-all duration-700 hover:border-cyan-400/50 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 transition-all duration-700 hover:border-cyan-400/50 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

                <div className="relative z-10 flex gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 opacity-20 rounded-xl blur-xl transition-all duration-500 group-hover:scale-150" />
                    <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-magenta-500/10 backdrop-blur-sm border border-cyan-500/30 p-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-magenta-500/20 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
              Our Commitment
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              At Aegis, we believe security is not just about technology—it's about trust, partnership, and
              unwavering dedication to protecting what matters most. Our team works around the clock to ensure
              your digital assets remain secure, your operations run smoothly, and your organization stays
              resilient against emerging threats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
