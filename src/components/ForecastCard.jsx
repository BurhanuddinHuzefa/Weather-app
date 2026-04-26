import React from 'react';
import { Cloud, Sun, CloudRain, CloudLightning, CloudSnow, CloudFog } from 'lucide-react';

const WeatherIcon = ({ condition }) => {
  const cond = condition.toLowerCase();
  if (cond.includes('clear')) return <Sun size={32} className="text-yellow-500 fill-yellow-100" />;
  if (cond.includes('rain')) return <CloudRain size={32} className="text-blue-500" />;
  if (cond.includes('cloud')) return <Cloud size={32} className="text-slate-400" />;
  if (cond.includes('bolt') || cond.includes('thunder')) return <CloudLightning size={32} className="text-purple-500" />;
  if (cond.includes('snow')) return <CloudSnow size={32} className="text-blue-200" />;
  if (cond.includes('haze') || cond.includes('mist') || cond.includes('fog')) return <CloudFog size={32} className="text-orange-300" />;
  return <Sun size={32} className="text-yellow-500" />;
};

const ForecastCard = ({ data }) => {
  // Group forecast by day
  const dailyForecast = data.list.reduce((acc, curr) => {
    const date = new Date(curr.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
    if (!acc[date] && Object.keys(acc).length < 5) {
      acc[date] = curr;
    }
    return acc;
  }, {});

  return (
    <div className="mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
      <h2 className="text-3xl font-black text-slate-800 mb-8 flex items-center gap-3">
        <span className="w-10 h-1.5 bg-blue-500 rounded-full"></span>
        5-Day Forecast
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {Object.entries(dailyForecast).map(([day, weather], index) => (
          <div 
            key={index} 
            className="bg-white/40 backdrop-blur-xl rounded-[2rem] p-8 border border-white/60 flex flex-col items-center hover:bg-white/60 transition-all hover:-translate-y-2 shadow-lg hover:shadow-blue-200/50 cursor-default group"
          >
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-4">{day}</p>
            <div className="group-hover:scale-125 transition-transform duration-500">
              <WeatherIcon condition={weather.weather[0].main} />
            </div>
            <p className="text-3xl font-black text-slate-800 mt-6">{Math.round(weather.main.temp)}°</p>
            <p className="text-slate-500 text-sm mt-2 capitalize font-medium text-center leading-tight">
              {weather.weather[0].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
