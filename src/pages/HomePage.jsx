import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherBackground from '../components/WeatherBackground';
import { CloudSun } from 'lucide-react';

const HomePage = () => {
  const [currentCondition, setCurrentCondition] = useState('clear');
  const conditions = ['clear', 'clouds', 'rain', 'haze'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCondition(prev => {
        const currentIndex = conditions.indexOf(prev);
        return conditions[(currentIndex + 1) % conditions.length];
      });
    }, 8000); // Change animation every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <WeatherBackground condition={currentCondition} />
      
      <div className="relative z-10 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex p-6 bg-white/30 backdrop-blur-xl rounded-full mb-6 border border-white/40 shadow-lg">
          <CloudSun size={80} className="text-blue-600" />
        </div>
        <h1 className="text-6xl md:text-7xl font-black text-slate-800 mb-4 tracking-tight">
          WeatherCast
        </h1>
        <p className="text-xl text-slate-600 max-w-lg mx-auto font-medium">
          Experience the weather with live animations and real-time updates.
        </p>
      </div>
      
      <div className="relative z-10 w-full max-w-md animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
        <SearchBar />
      </div>

      {/* Feature Pills */}
      <div className="relative z-0 mt-16 flex flex-wrap justify-center gap-4 animate-in fade-in duration-1000 delay-500">
        {['Real-time', '5-Day Forecast', 'Global', 'Smart Search'].map((feature, i) => (
          <span key={i} className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/40 rounded-full text-slate-700 text-sm font-semibold shadow-sm">
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
