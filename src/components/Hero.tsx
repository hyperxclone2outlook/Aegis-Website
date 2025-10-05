import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import AnimatedShield from './AnimatedShield';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-magenta-500/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm animate-fadeIn">
              <span className="text-sm font-medium text-cyan-400">Next-Gen Cybersecurity</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white animate-slideInLeft">Aegis:</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-slideInLeft delay-100">
                Your Unseen Intelligence,
              </span>
              <span className="block bg-gradient-to-r from-purple-500 via-magenta-500 to-pink-500 bg-clip-text text-transparent animate-slideInLeft delay-200">
                Your Absolute Shield
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-xl animate-fadeIn delay-300">
              Protect your digital assets with AI-powered threat detection, real-time monitoring, and uncompromising security infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-fadeIn delay-500">
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
            >
              Explore Solutions
            </button>
          </div>

          <div className="flex gap-8 pt-8 animate-fadeIn delay-700">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-sm text-gray-400">Threat Detection</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-magenta-500 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-gray-400">Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-magenta-400 to-pink-500 bg-clip-text text-transparent">
                &lt;1min
              </div>
              <div className="text-sm text-gray-400">Response Time</div>
            </div>
          </div>
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-magenta-500/20 rounded-full animate-pulse-slow blur-2xl" />

            <div className="relative w-full h-full animate-float">
              <AnimatedShield />
            </div>
          </div>

          <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse-slow" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-magenta-500/10 rounded-full blur-2xl animate-pulse-slow delay-300" />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full mx-auto animate-scroll" />
        </div>
      </div>
    </div>
  );
}
