import React from 'react';

const linkData = [
  {
    id: 'github',
    title: 'GitHub Repository',
    description: 'Explore open source code and projects',
    url: 'https://github.com/naitikagarwal-12/Medikiosk',
    iconBg: 'bg-slate-100 group-hover:bg-slate-800 transition-colors duration-300',
    iconColor: 'text-slate-700 group-hover:text-white',
    // GitHub Icon
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    id: 'youtube',
    title: 'YouTube Video',
    description: 'Watch the latest tutorials and updates',
    url: 'https://youtube.com',
    iconBg: 'bg-red-50 group-hover:bg-red-500 transition-colors duration-300',
    iconColor: 'text-red-500 group-hover:text-white',
    // YouTube Play Icon
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
  // {
  //   id: 'application',
  //   title: 'Download App',
  //   description: 'Get our mobile app for iOS and Android',
  //   url: '#',
  //   iconBg: 'bg-indigo-50 group-hover:bg-indigo-500 transition-colors duration-300',
  //   iconColor: 'text-indigo-500 group-hover:text-white',
  //   // Smartphone/App Icon
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
  //       <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
  //       <line x1="12" y1="18" x2="12.01" y2="18" />
  //     </svg>
  //   ),
  // },
  {
    id: 'opdscreen',
    title: 'OPD-Screen',
    description: 'See the OPD demo',
    url: 'https://medikiosk-eosin-two.vercel.app/',
    iconBg: 'bg-emerald-50 group-hover:bg-emerald-500 transition-colors duration-300',
    iconColor: 'text-emerald-500 group-hover:text-white',
    // Globe Icon
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  }
];

const App = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-slate-50 via-gray-100 to-zinc-50 font-sans overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-200/40 blur-[100px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-rose-200/40 blur-[100px]" />
      </div>

      {/* Hexanium Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 select-none">
        <h1 className="text-[15vw] md:text-[18vw] font-black text-slate-900/[0.03] tracking-tighter uppercase leading-none whitespace-nowrap transform -rotate-2">
          Hexanium
        </h1>
      </div>
      
      {/* Links Container */}
      <div className="relative z-10 w-full max-w-xl space-y-4 sm:space-y-5 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
        
        {linkData.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center p-4 sm:p-5 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-300 ease-out overflow-hidden"
          >
            {/* Subtle light sweep effect that appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />

            {/* Left side: Icon Container */}
            <div className={`relative z-10 flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl shadow-sm ${link.iconBg}`}>
              <div className={`${link.iconColor} transition-colors duration-300`}>
                {link.icon}
              </div>
            </div>
            
            {/* Middle: Text Content */}
            <div className="relative z-10 ml-5 flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight truncate group-hover:text-slate-900 transition-colors">
                {link.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 truncate mt-0.5 group-hover:text-slate-600 transition-colors">
                {link.description}
              </p>
            </div>
            
            {/* Right side: Animated Chevron */}
            <div className="relative z-10 flex-shrink-0 ml-4 hidden sm:flex">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border border-slate-100 group-hover:bg-slate-50 transition-colors duration-300">
                <svg 
                  className="w-5 h-5 text-slate-400 group-hover:text-slate-800 group-hover:translate-x-1 transition-all duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        ))}

      </div>
    </div>
  );
};

export default App;