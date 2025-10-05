import { Shield, FileCheck, Server, Lock, Radar, Database } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Radar,
    title: 'Threat Detection',
    description: 'AI-powered real-time threat identification and neutralization before breaches occur.',
    gradient: 'from-cyan-500 to-blue-600',
    features: ['Machine Learning', 'Behavioral Analysis', 'Zero-Day Protection'],
  },
  {
    icon: FileCheck,
    title: 'Compliance',
    description: 'Comprehensive regulatory compliance management for GDPR, HIPAA, SOC 2, and more.',
    gradient: 'from-blue-500 to-purple-600',
    features: ['Automated Audits', 'Policy Management', 'Reporting'],
  },
  {
    icon: Server,
    title: 'Managed Security',
    description: '24/7 security operations center with expert monitoring and incident response.',
    gradient: 'from-purple-500 to-magenta-600',
    features: ['SOC Operations', 'Incident Response', 'Threat Hunting'],
  },
  {
    icon: Lock,
    title: 'Data Encryption',
    description: 'Military-grade encryption for data at rest and in transit with quantum-resistant algorithms.',
    gradient: 'from-magenta-500 to-pink-600',
    features: ['End-to-End Encryption', 'Key Management', 'Quantum-Safe'],
  },
  {
    icon: Shield,
    title: 'Penetration Testing',
    description: 'Comprehensive security assessments to identify and remediate vulnerabilities.',
    gradient: 'from-cyan-500 to-purple-600',
    features: ['Red Team Operations', 'Vulnerability Assessment', 'Remediation'],
  },
  {
    icon: Database,
    title: 'Secure Infrastructure',
    description: 'Cloud and on-premise infrastructure security with continuous monitoring.',
    gradient: 'from-blue-500 to-magenta-600',
    features: ['Cloud Security', 'Network Protection', 'Access Control'],
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 bg-clip-text text-transparent">
              Security Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity services designed to protect your organization from evolving threats
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-full p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 overflow-hidden transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl transition-all duration-500 group-hover:scale-150" />

                  <div className="relative z-10 space-y-6">
                    <div className="relative w-16 h-16">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 rounded-xl blur-xl transition-all duration-500 ${isHovered ? 'scale-150' : ''}`} />
                      <div className={`relative w-full h-full bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center transition-all duration-500 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-cyan-500/20">
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-400 transition-all duration-300 group-hover:text-cyan-400"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} transition-all duration-300 ${isHovered ? 'scale-150' : ''}`} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
