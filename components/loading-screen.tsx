"use client"

import { useState, useEffect } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsVisible(false), 800)
          return 100
        }
        return prev + 1.5
      })
    }, 60)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-b from-slate-900 via-ocean-900 to-slate-800 flex items-center justify-center overflow-hidden">
      {/* Animated Ocean Waves - Multiple Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave Layer 1 - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-full overflow-hidden">
          <svg
            className="absolute bottom-0 left-[-50%] w-[200%] h-64"
            viewBox="0 0 4320 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path
              fill="url(#wave1)"
              d="M0,160L144,176C288,192,576,224,864,213.3C1152,203,1440,149,1728,149.3C2016,149,2304,203,2592,208C2880,213,3168,171,3456,149.3C3744,128,4032,128,4176,128L4320,128L4320,320L4176,320C4032,320,3744,320,3456,320C3168,320,2880,320,2592,320C2304,320,2016,320,1728,320C1440,320,1152,320,864,320C576,320,288,320,144,320L0,320Z"
              className="wave-animation-1"
            />
          </svg>
        </div>

        {/* Wave Layer 2 - Middle */}
        <div className="absolute bottom-0 left-0 right-0 h-full overflow-hidden">
          <svg
            className="absolute bottom-0 left-[-50%] w-[200%] h-48"
            viewBox="0 0 4320 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0891b2" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#0e7490" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#155e75" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path
              fill="url(#wave2)"
              d="M0,224L144,213.3C288,203,576,181,864,181.3C1152,181,1440,203,1728,208C2016,213,2304,203,2592,186.7C2880,171,3168,149,3456,154.7C3744,160,4032,192,4176,208L4320,224L4320,320L4176,320C4032,320,3744,320,3456,320C3168,320,2880,320,2592,320C2304,320,2016,320,1728,320C1440,320,1152,320,864,320C576,320,288,320,144,320L0,320Z"
              className="wave-animation-2"
            />
          </svg>
        </div>

        {/* Wave Layer 3 - Top */}
        <div className="absolute bottom-0 left-0 right-0 h-full overflow-hidden">
          <svg
            className="absolute bottom-0 left-[-50%] w-[200%] h-32"
            viewBox="0 0 4320 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#155e75" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#164e63" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              fill="url(#wave3)"
              d="M0,256L144,240C288,224,576,192,864,192C1152,192,1440,224,1728,229.3C2016,235,2304,213,2592,197.3C2880,181,3168,171,3456,181.3C3744,192,4032,224,4176,240L4320,256L4320,320L4176,320C4032,320,3744,320,3456,320C3168,320,2880,320,2592,320C2304,320,2016,320,1728,320C1440,320,1152,320,864,320C576,320,288,320,144,320L0,320Z"
              className="wave-animation-3"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Brand Name with Ocean Effect */}
        <div className="mb-12 relative">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-wide animate-fade-in">
            <span className="inline-block">Sunshine</span>
            <span className="block text-gradient-ocean animate-slide-up" style={{ animationDelay: "0.3s" }}>
              Villas
            </span>
          </h1>

          <p className="text-aqua-200 text-lg font-light mt-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Where Luxury Meets the Azure Coast
          </p>
        </div>

        {/* Wave Progress Bar */}
        <div className="mb-8 relative">
          <div className="w-80 h-2 bg-slate-700 rounded-full mx-auto overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-ocean-500 via-aqua-400 to-ocean-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Wave effect on progress bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
            </div>
          </div>
          <div className="text-aqua-300 text-sm mt-3 font-light">
            Loading your luxury experience... {Math.round(progress)}%
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes wave-animation-1 {
          0%, 100% { 
            transform: translateX(0px) translateY(0px); 
          }
          33% { 
            transform: translateX(-30px) translateY(-10px); 
          }
          66% { 
            transform: translateX(30px) translateY(5px); 
          }
        }
        
        @keyframes wave-animation-2 {
          0%, 100% { 
            transform: translateX(0px) translateY(0px); 
          }
          50% { 
            transform: translateX(50px) translateY(-15px); 
          }
        }
        
        @keyframes wave-animation-3 {
          0%, 100% { 
            transform: translateX(0px) translateY(0px); 
          }
          25% { 
            transform: translateX(-20px) translateY(-8px); 
          }
          75% { 
            transform: translateX(40px) translateY(8px); 
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .wave-animation-1 {
          animation: wave-animation-1 8s ease-in-out infinite;
        }
        
        .wave-animation-2 {
          animation: wave-animation-2 6s ease-in-out infinite reverse;
        }
        
        .wave-animation-3 {
          animation: wave-animation-3 10s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
