import { Shield, FileCheck, Server, Lock, Radar, Database, CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Radar,
    title: 'Threat Detection & Response',
    description: 'AI-powered real-time threat identification and neutralization before breaches occur.',
    gradient: 'from-cyan-500 to-blue-600',
    features: [
      'Machine Learning-based anomaly detection',
      'Behavioral analysis and user entity behavior analytics (UEBA)',
      'Zero-day threat protection',
      'Automated threat response and containment',
      'Advanced persistent threat (APT) detection',
      'Real-time security intelligence feeds',
    ],
    stats: { detection: '99.9%', response: '<60s' },
  },
  {
    icon: FileCheck,
    title: 'Compliance Management',
    description: 'Comprehensive regulatory compliance management for GDPR, HIPAA, SOC 2, PCI-DSS, and more.',
    gradient: 'from-blue-500 to-purple-600',
    features: [
      'Automated compliance audits and assessments',
      'Policy management and enforcement',
      'Comprehensive reporting and documentation',
      'Continuous compliance monitoring',
      'Risk assessment and remediation tracking',
      'Multi-framework support',
    ],
    stats: { frameworks: '15+', automation: '90%' },
  },
  {
    icon: Server,
    title: 'Managed Security Operations',
    description: '24/7 security operations center with expert monitoring, incident response, and threat hunting.',
    gradient: 'from-purple-500 to-magenta-600',
    features: [
      'Round-the-clock SOC operations',
      'Expert incident response team',
      'Proactive threat hunting',
      'Security event correlation and analysis',
      'Dedicated security analysts',
      'Escalation and notification management',
    ],
    stats: { uptime: '99.99%', team: '50+ experts' },
  },
  {
    icon: Lock,
    title: 'Data Encryption & Protection',
    description: 'Military-grade encryption for data at rest and in transit with quantum-resistant algorithms.',
    gradient: 'from-magenta-500 to-pink-600',
    features: [
      'End-to-end encryption (E2EE)',
      'Advanced key management system',
      'Quantum-safe cryptography',
      'Data loss prevention (DLP)',
      'Secure file sharing and collaboration',
      'Encryption key rotation and lifecycle management',
    ],
    stats: { strength: 'AES-256', quantum: 'Ready' },
  },
  {
    icon: Shield,
    title: 'Penetration Testing',
    description: 'Comprehensive security assessments to identify and remediate vulnerabilities before attackers exploit them.',
    gradient: 'from-cyan-500 to-purple-600',
    features: [
      'Red team operations and simulations',
      'Comprehensive vulnerability assessments',
      'Web application security testing',
      'Network penetration testing',
      'Social engineering assessments',
      'Detailed remediation guidance',
    ],
    stats: { tests: '1000+ annually', coverage: '100%' },
  },
  {
    icon: Database,
    title: 'Secure Infrastructure',
    description: 'Cloud and on-premise infrastructure security with continuous monitoring and access control.',
    gradient: 'from-blue-500 to-magenta-600',
    features: [
      'Multi-cloud security (AWS, Azure, GCP)',
      'Network security and segmentation',
      'Identity and access management (IAM)',
      'Security configuration management',
      'Infrastructure as Code (IaC) security',
      'Container and Kubernetes security',
    ],
    stats: { clouds: '3+', coverage: '24/7' },
  },
];

export default function ServicesPage() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-cyan-400">Complete Security Solutions</span>
          </div>

          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 bg-clip-text text-transparent">
              Enterprise Security Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive cybersecurity solutions designed to protect your organization from evolving threats.
            From AI-powered threat detection to 24/7 managed security operations, we provide the defense you need.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <ServiceSection
                key={index}
                service={service}
                Icon={Icon}
                isEven={isEven}
                index={index}
              />
            );
          })}
        </div>

        <div className="mt-32">
          <CTASection />
        </div>
      </div>
    </div>
  );
}

function ServiceSection({ service, Icon, isEven, index }: any) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className={`${!isEven && 'lg:order-2'} space-y-6`}>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 rounded-xl blur-xl`} />
            <div className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold">{service.title}</h2>
        </div>

        <p className="text-xl text-gray-300 leading-relaxed">
          {service.description}
        </p>

        <div className="grid grid-cols-2 gap-4 py-6">
          {Object.entries(service.stats).map(([key, value]) => (
            <div key={key} className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-cyan-500/20">
              <div className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-1`}>
                {value as string}
              </div>
              <div className="text-sm text-gray-400 capitalize">{key.replace('_', ' ')}</div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {service.features.map((feature: string, idx: number) => (
            <div
              key={idx}
              className="flex items-start gap-3 group transition-all duration-300 hover:translate-x-2"
            >
              <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 text-cyan-400 transition-colors group-hover:text-magenta-400`} />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        <button className="group mt-6 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
          <span className="font-semibold">Learn More</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className={`${!isEven && 'lg:order-1'} relative`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 rounded-3xl blur-3xl`} />
        <div className="relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-cyan-500/20 overflow-hidden group hover:border-cyan-400/50 transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl transition-all duration-500 group-hover:scale-150" />

          <div className="relative z-10 aspect-square flex items-center justify-center">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 rounded-full blur-3xl animate-pulse-slow`} />
              <Icon className={`relative w-48 h-48 text-transparent bg-gradient-to-br ${service.gradient} bg-clip-text`} style={{ WebkitTextStroke: '2px currentColor', WebkitTextStrokeColor: 'transparent', WebkitBackgroundClip: 'text' }}>
                <Icon className="w-48 h-48" style={{ stroke: `url(#gradient-${index})` }} />
              </Icon>

              <svg width="0" height="0">
                <defs>
                  <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={service.gradient.includes('cyan') ? '#06b6d4' : '#3b82f6'} />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor={service.gradient.includes('magenta') || service.gradient.includes('pink') ? '#ec4899' : '#8b5cf6'} />
                  </linearGradient>
                </defs>
              </svg>

              <Icon className="w-48 h-48" style={{ stroke: `url(#gradient-${index})`, strokeWidth: 1.5, fill: 'none' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-magenta-500/10 backdrop-blur-sm border border-cyan-500/30 p-16 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-magenta-500/20 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 bg-clip-text text-transparent">
          Ready to Secure Your Organization?
        </h2>
        <p className="text-xl text-gray-300">
          Get started with a comprehensive security assessment and discover how Aegis can protect your digital assets.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
            <span className="flex items-center gap-2">
              Request Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <button className="px-8 py-4 border-2 border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300">
            Download Service Guide
          </button>
        </div>
      </div>
    </div>
  );
}
