import { Mail, Phone, MapPin, Send, Clock, Globe, Linkedin, Twitter, Github } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ContactPage() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@aegis-security.com',
      subvalue: 'support@aegis-security.com',
      link: 'mailto:contact@aegis-security.com',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      subvalue: 'Mon-Fri, 9AM-6PM PST',
      link: 'tel:+15551234567',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      value: 'San Francisco, CA',
      subvalue: '123 Security Blvd, Suite 500',
      link: null,
      gradient: 'from-purple-500 to-magenta-600',
    },
  ];

  const offices = [
    { city: 'San Francisco', region: 'HQ', timezone: 'PST' },
    { city: 'New York', region: 'East Coast', timezone: 'EST' },
    { city: 'London', region: 'EMEA', timezone: 'GMT' },
    { city: 'Singapore', region: 'APAC', timezone: 'SGT' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-cyan-400">Get In Touch</span>
          </div>

          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 bg-clip-text text-transparent">
              Contact Aegis
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to secure your digital future? Our team of security experts is available 24/7 to discuss your cybersecurity needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <ContactMethodCard key={index} method={method} index={index} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <ContactForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              submitted={submitted}
            />
          </div>

          <div className="space-y-8">
            <EmergencySection />
            <OfficeLocations offices={offices} />
            <SocialLinks />
          </div>
        </div>

        <MapSection />
      </div>
    </div>
  );
}

function ContactMethodCard({ method, index }: { method: any; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = method.icon;

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-full p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 transition-all duration-500 hover:border-cyan-400/50 hover:-translate-y-2">
        <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

        <div className="relative z-10 text-center space-y-4">
          <div className="relative inline-block">
            <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-20 rounded-xl blur-xl transition-all duration-500 group-hover:scale-150`} />
            <div className={`relative w-16 h-16 mx-auto bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">{method.title}</h3>
            {method.link ? (
              <a
                href={method.link}
                className="block text-lg font-medium text-cyan-400 hover:text-magenta-400 transition-colors mb-1"
              >
                {method.value}
              </a>
            ) : (
              <div className="text-lg font-medium text-cyan-400 mb-1">{method.value}</div>
            )}
            <p className="text-sm text-gray-400">{method.subvalue}</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}

function ContactForm({ formData, handleChange, handleSubmit, isSubmitting, submitted }: any) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl" />

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="demo">Request Demo</option>
              <option value="sales">Sales Information</option>
              <option value="support">Technical Support</option>
              <option value="partnership">Partnership Opportunities</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
              placeholder="Tell us about your security needs..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || submitted}
            className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : submitted ? (
                <>Message Sent!</>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </form>
      </div>
    </div>
  );
}

function EmergencySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative p-8 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-sm rounded-2xl border border-red-500/30 transition-all duration-1000 delay-200 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
    >
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center animate-pulse">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold">24/7 Emergency Response</h3>
        </div>

        <p className="text-gray-300 mb-4">
          For urgent security incidents, our rapid response team is available around the clock to help contain and resolve threats.
        </p>

        <a
          href="tel:+15551234567"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-105"
        >
          <Phone className="w-5 h-5" />
          Call Emergency Hotline
        </a>

        <div className="mt-6 pt-6 border-t border-red-500/20">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>Average response time: &lt;5 minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OfficeLocations({ offices }: { offices: any[] }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
    >
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <Globe className="w-8 h-8 text-cyan-400" />
        Global Offices
      </h3>

      <div className="space-y-4">
        {offices.map((office, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
          >
            <div>
              <div className="font-semibold text-lg">{office.city}</div>
              <div className="text-sm text-gray-400">{office.region}</div>
            </div>
            <div className="text-sm text-cyan-400 font-mono">{office.timezone}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialLinks() {
  const { ref, isVisible } = useScrollAnimation();

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', link: '#', gradient: 'from-cyan-500 to-blue-600' },
    { icon: Twitter, label: 'Twitter', link: '#', gradient: 'from-blue-500 to-purple-600' },
    { icon: Github, label: 'GitHub', link: '#', gradient: 'from-purple-500 to-magenta-600' },
  ];

  return (
    <div
      ref={ref}
      className={`relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 transition-all duration-1000 delay-400 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
    >
      <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>

      <div className="space-y-3">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.link}
              className="group flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${social.gradient} rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold group-hover:text-cyan-400 transition-colors">{social.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function MapSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 p-2 transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <div className="aspect-video rounded-2xl overflow-hidden bg-gray-900/50 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <MapPin className="w-16 h-16 text-cyan-400 mx-auto animate-pulse" />
            <div className="text-xl font-semibold text-gray-300">
              Headquarters: San Francisco, CA
            </div>
            <p className="text-gray-400">123 Security Blvd, Suite 500, San Francisco, CA 94102</p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>
    </div>
  );
}
