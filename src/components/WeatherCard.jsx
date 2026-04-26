import React from 'react';
import { Cloud, Sun, CloudRain, Wind, Droplets, Thermometer, CloudLightning, CloudSnow, CloudFog } from 'lucide-react';

const WeatherIcon = ({ condition, size = 48 }) => {
  const cond = condition.toLowerCase();
  if (cond.includes('clear')) return <Sun size={size} className="text-yellow-500 fill-yellow-200" />;
  if (cond.includes('rain')) return <CloudRain size={size} className="text-blue-500" />;
  if (cond.includes('cloud')) return <Cloud size={size} className="text-slate-400 fill-slate-100" />;
  if (cond.includes('bolt') || cond.includes('thunder')) return <CloudLightning size={size} className="text-purple-500" />;
  if (cond.includes('snow')) return <CloudSnow size={size} className="text-blue-200" />;
  if (cond.includes('haze') || cond.includes('mist') || cond.includes('fog')) return <CloudFog size={size} className="text-orange-300" />;
  return <Sun size={size} className="text-yellow-500" />;
};

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;
  const condition = weather[0].main;
  const description = weather[0].description;

  return (
    <div className="w-full bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 border border-white/60 shadow-2xl animate-in zoom-in-95 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-black text-slate-800 mb-2 tracking-tight">{name}</h1>
          <p className="text-2xl text-slate-500 capitalize font-medium">{description}</p>
        </div>
        
        <div className="flex items-center gap-8 bg-white/30 p-8 rounded-[2rem] border border-white/40 shadow-inner">
          <WeatherIcon condition={condition} size={100} />
          <div className="text-8xl font-black text-slate-800 tracking-tighter">
            {Math.round(main.temp)}°
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        <div className="bg-blue-50/50 backdrop-blur-sm p-6 rounded-3xl border border-blue-100 shadow-sm flex items-center gap-4 group hover:scale-105 transition-transform">
          <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
            <Thermometer size={28} />
          </div>
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Feels like</p>
            <p className="text-slate-800 text-xl font-black">{Math.round(main.feels_like)}°C</p>
          </div>
        </div>

        <div className="bg-cyan-50/50 backdrop-blur-sm p-6 rounded-3xl border border-cyan-100 shadow-sm flex items-center gap-4 group hover:scale-105 transition-transform">
          <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
            <Droplets size={28} />
          </div>
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Humidity</p>
            <p className="text-slate-800 text-xl font-black">{main.humidity}%</p>
          </div>
        </div>

        <div className="bg-emerald-50/50 backdrop-blur-sm p-6 rounded-3xl border border-emerald-100 shadow-sm flex items-center gap-4 group hover:scale-105 transition-transform">
          <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
            <Wind size={28} />
          </div>
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Wind Speed</p>
            <p className="text-slate-800 text-xl font-black">{wind.speed} m/s</p>
          </div>
        </div>

        <div className="bg-indigo-50/50 backdrop-blur-sm p-6 rounded-3xl border border-indigo-100 shadow-sm flex items-center gap-4 group hover:scale-105 transition-transform">
          <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
            <Cloud size={28} />
          </div>
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Pressure</p>
            <p className="text-slate-800 text-xl font-black">{main.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
