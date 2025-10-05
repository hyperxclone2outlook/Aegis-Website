import { Target, Users, Award, Zap, Shield, Brain, Eye, Lock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Security Officer',
    expertise: 'AI Security & Threat Intelligence',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'VP of Cyber Defense',
    expertise: 'Penetration Testing & Red Team Operations',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Emily Thompson',
    role: 'Director of Compliance',
    expertise: 'Regulatory Frameworks & Risk Management',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Dr. James Park',
    role: 'Head of Research',
    expertise: 'Quantum Cryptography & Zero-Day Research',
    image: 'https://images.pexels.com/photos/1516999/pexels-photo-1516999.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const values = [
  {
    icon: Eye,
    title: 'Vigilance',
    description: 'Constant monitoring and proactive threat detection to stay ahead of adversaries. Our systems never sleep, ensuring your assets are protected around the clock.',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Brain,
    title: 'Expertise',
    description: 'World-class security professionals with deep knowledge across all domains. Our team brings decades of combined experience from government agencies and Fortune 500 companies.',
    gradient: 'from-blue-400 to-purple-500',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Commitment to the highest standards of security and service delivery. We maintain certifications across all major security frameworks and continuously exceed industry benchmarks.',
    gradient: 'from-purple-400 to-magenta-500',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Cutting-edge technology and methodologies to combat evolving threats. Our research team develops proprietary AI algorithms and contributes to open-source security tools.',
    gradient: 'from-magenta-400 to-pink-500',
  },
];

export default function AboutPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={heroRef} className={`text-center mb-20 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-cyan-400">About Aegis</span>
          </div>

          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 bg-clip-text text-transparent">
              Defending the Digital Frontier
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Founded by cybersecurity veterans from elite government agencies and leading technology companies,
            Aegis represents the convergence of advanced AI technology and human expertise.
          </p>
        </div>

        <div ref={statsRef} className="mb-32">
          <AnimatedStats isVisible={statsVisible} />
        </div>

        <div className="mb-32">
          <MissionSection />
        </div>

        <div className="mb-32">
          <ValuesGrid values={values} />
        </div>

        <div className="mb-32">
          <TeamSection members={teamMembers} />
        </div>

        <div>
          <CommitmentSection />
        </div>
      </div>
    </div>
  );
}

function AnimatedStats({ isVisible }: { isVisible: boolean }) {
  const [counts, setCounts] = useState({
    clients: 0,
    threats: 0,
    experts: 0,
    years: 0,
  });

  const targets = {
    clients: 500,
    threats: 10000000,
    experts: 50,
    years: 15,
  };

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        clients: Math.floor(targets.clients * progress),
        threats: Math.floor(targets.threats * progress),
        experts: Math.floor(targets.experts * progress),
        years: Math.floor(targets.years * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    { value: `${counts.clients}+`, label: 'Enterprise Clients', gradient: 'from-cyan-400 to-blue-500', icon: Users },
    { value: counts.threats > 1000000 ? `${(counts.threats / 1000000).toFixed(1)}M+` : `${Math.floor(counts.threats / 1000)}K+`, label: 'Threats Blocked', gradient: 'from-blue-400 to-purple-500', icon: Shield },
    { value: `${counts.experts}+`, label: 'Security Experts', gradient: 'from-purple-400 to-magenta-500', icon: Target },
    { value: `${counts.years}+`, label: 'Years Experience', gradient: 'from-magenta-400 to-pink-500', icon: Award },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className={`group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 text-center transition-all duration-700 hover:border-cyan-400/50 hover:-translate-y-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

            <div className="relative z-10">
              <Icon className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }} />
              <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        );
      })}
    </div>
  );
}

function MissionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 p-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            To empower organizations worldwide with intelligent, adaptive security solutions that evolve
            faster than the threats they face. We believe that security is not just about building walls,
            but about creating an intelligent ecosystem that learns, adapts, and anticipates.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Founded in 2010 by a team of security researchers and penetration testers, Aegis has grown from
            a boutique consultancy to a global leader in cybersecurity. Our proprietary AI-driven threat
            detection platform processes over 50 billion security events daily, protecting critical
            infrastructure across finance, healthcare, government, and technology sectors.
          </p>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl border border-cyan-500/20">
            <Lock className="w-10 h-10 text-cyan-400 mb-3" />
            <h3 className="text-xl font-bold mb-2">Security First</h3>
            <p className="text-gray-300">
              Every decision, every line of code, every process is designed with security as the foundational principle.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-500/10 to-magenta-500/10 backdrop-blur-sm rounded-xl border border-purple-500/20">
            <Brain className="w-10 h-10 text-purple-400 mb-3" />
            <h3 className="text-xl font-bold mb-2">Innovation Driven</h3>
            <p className="text-gray-300">
              We invest 20% of our revenue into R&D, ensuring we stay ahead of emerging threats and attack vectors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValuesGrid({ values }: { values: any[] }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref}>
      <h2 className={`text-5xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 bg-clip-text text-transparent">
          Our Core Values
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
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
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />

              <div className="relative z-10 flex gap-6">
                <div className="relative flex-shrink-0">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-20 rounded-xl blur-xl transition-all duration-500 group-hover:scale-150`} />
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
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
    </div>
  );
}

function TeamSection({ members }: { members: any[] }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref}>
      <h2 className={`text-5xl font-bold text-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 bg-clip-text text-transparent">
          Leadership Team
        </span>
      </h2>
      <p className={`text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Meet the experts leading Aegis's mission to protect organizations worldwide
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className={`group relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 transition-all duration-500 hover:border-cyan-400/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-cyan-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-400">{member.expertise}</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-magenta-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommitmentSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-magenta-500/10 backdrop-blur-sm border border-cyan-500/30 p-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-magenta-500/20 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
          Our Commitment to You
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          At Aegis, we believe security is not just about technology—it's about trust, partnership, and
          unwavering dedication to protecting what matters most. Our team works around the clock to ensure
          your digital assets remain secure, your operations run smoothly, and your organization stays
          resilient against emerging threats.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          We measure our success not by the attacks we detect, but by the breaches that never happen.
          Every client represents a sacred trust, and we honor that trust with transparency, expertise,
          and relentless vigilance.
        </p>
      </div>
    </div>
  );
}
