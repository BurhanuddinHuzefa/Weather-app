import React from 'react';

const RainOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {[...Array(80)].map((_, i) => (
      <div 
        key={i} 
        className="rain-drop" 
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${0.4 + Math.random() * 0.6}s`,
          animationDelay: `${Math.random() * 2}s`,
          opacity: 0.4 + Math.random() * 0.4
        }}
      />
    ))}
  </div>
);

const LightningOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div 
      className="lightning" 
      style={{ 
        background: 'radial-gradient(circle, rgba(255, 255, 200, 0.4) 0%, rgba(255, 230, 100, 0.1) 100%)',
        animationDuration: '6s'
      }} 
    />
  </div>
);

const SunOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-300 rounded-full shadow-[0_0_100px_40px_rgba(255,255,0,0.5)] animate-pulse" />
    <div className="sun-ray w-[800px] h-[800px] -top-64 -right-64 bg-yellow-400/10" />
    <div 
      className="sun-ray w-[600px] h-[600px] top-1/4 left-1/4 bg-orange-300/5"
      style={{ animationDelay: '1s' }}
    />
  </div>
);

const CloudOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {[...Array(8)].map((_, i) => (
      <div 
        key={i} 
        className="cloud scale-75 md:scale-100" 
        style={{
          width: '200px',
          height: '60px',
          top: `${Math.random() * 70}%`,
          left: `-300px`,
          animationDuration: `${25 + Math.random() * 40}s`,
          animationDelay: `${-Math.random() * 30}s`,
        }}
      />
    ))}
  </div>
);

const HazeOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Low visibility mist effect */}
    <div className="absolute inset-0 bg-orange-100/20 backdrop-blur-[2px]" />
    {[...Array(15)].map((_, i) => (
      <div 
        key={i} 
        className="absolute bg-white/30 rounded-full filter blur-[60px]" 
        style={{
          width: `${300 + Math.random() * 400}px`,
          height: `${100 + Math.random() * 200}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `cloud-float ${40 + Math.random() * 20}s linear infinite`,
          opacity: 0.5
        }}
      />
    ))}
  </div>
);

const WeatherBackground = ({ condition = "clear" }) => {
  const cond = condition.toLowerCase();
  
  // Mapping API conditions to our overlays
  const isClear = cond.includes('clear');
  const isCloudy = cond.includes('cloud');
  const isRainy = cond.includes('rain') || cond.includes('drizzle');
  const isHazy = cond.includes('haze') || cond.includes('mist') || cond.includes('smoke') || cond.includes('fog') || cond.includes('dust');

  return (
    <div className="fixed inset-0 -z-20 transition-colors duration-1000">
      {/* Base Backgrounds */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isClear ? 'opacity-100' : 'opacity-0'}`} 
           style={{ background: 'linear-gradient(to bottom, #0ea5e9, #7dd3fc)' }} />
      
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isCloudy ? 'opacity-100' : 'opacity-0'}`}
           style={{ background: 'linear-gradient(to bottom, #64748b, #cbd5e1)' }} />
      
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isRainy ? 'opacity-100' : 'opacity-0'}`}
           style={{ background: 'linear-gradient(to bottom, #334155, #64748b)' }} />

      <div className={`absolute inset-0 transition-opacity duration-1000 ${isHazy ? 'opacity-100' : 'opacity-0'}`}
           style={{ background: 'linear-gradient(to bottom, #d4d4d8, #fdba74)' }} />

      {/* Animation Layers */}
      <div className="relative w-full h-full">
        {isClear && <SunOverlay />}
        {isCloudy && <CloudOverlay />}
        {isRainy && (
          <>
            <RainOverlay />
            <LightningOverlay />
          </>
        )}
        {isHazy && <HazeOverlay />}
      </div>
    </div>
  );
};

export default WeatherBackground;
