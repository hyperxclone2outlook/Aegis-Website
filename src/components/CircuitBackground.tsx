export default function CircuitBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M10 10 L90 10 M50 10 L50 50 M50 50 L90 50"
                stroke="url(#circuitGradient)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="4 4"
              />
              <circle cx="10" cy="10" r="2" fill="#06b6d4" className="animate-pulse-slow" />
              <circle cx="90" cy="10" r="2" fill="#8b5cf6" className="animate-pulse-slow delay-200" />
              <circle cx="50" cy="50" r="2" fill="#ec4899" className="animate-pulse-slow delay-400" />
              <circle cx="90" cy="50" r="2" fill="#06b6d4" className="animate-pulse-slow delay-600" />
            </pattern>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-magenta-500/5 rounded-full blur-3xl animate-float delay-2000" />
    </div>
  );
}
