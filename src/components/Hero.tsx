import { ArrowRight, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

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
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-magenta-500/20 rounded-full animate-pulse-slow" />

            <svg viewBox="0 0 400 400" className="w-full h-full animate-float">
              <defs>
                <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <path
                d="M200 50 L340 110 L340 220 Q340 300 200 350 Q60 300 60 220 L60 110 Z"
                fill="none"
                stroke="url(#shieldGradient)"
                strokeWidth="3"
                filter="url(#glow)"
                className="animate-draw-path"
              />

              <circle cx="200" cy="200" r="60" fill="url(#shieldGradient)" opacity="0.2" className="animate-pulse-slow" />

              <g className="animate-spin-slow origin-center">
                <circle cx="200" cy="200" r="80" fill="none" stroke="url(#shieldGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="url(#shieldGradient)" strokeWidth="1" opacity="0.3" strokeDasharray="8 8" />
              </g>

              <g transform="translate(200, 200)">
                <ellipse cx="0" cy="0" rx="25" ry="35" fill="#06b6d4" opacity="0.8" />
                <ellipse cx="0" cy="0" rx="15" ry="25" fill="#1e293b" />
                <circle cx="0" cy="0" r="12" fill="url(#shieldGradient)" className="animate-pulse" />
                <circle cx="0" cy="0" r="6" fill="#0891b2" className="animate-pulse delay-100" />
              </g>

              <path d="M120 180 L100 200 M280 180 L300 200 M150 240 L130 260 M250 240 L270 260 M200 140 L200 110 M200 260 L200 290"
                stroke="url(#shieldGradient)"
                strokeWidth="2"
                opacity="0.6"
                className="animate-pulse"
              />

              <circle cx="100" cy="200" r="4" fill="#06b6d4" className="animate-ping-slow" />
              <circle cx="300" cy="200" r="4" fill="#ec4899" className="animate-ping-slow delay-200" />
              <circle cx="200" cy="110" r="4" fill="#8b5cf6" className="animate-ping-slow delay-400" />
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Eye className="w-16 h-16 text-cyan-400 opacity-0 animate-fadeIn delay-1000" />
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
