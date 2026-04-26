import React from 'react';
import { Cloud, Sun, CloudRain } from 'lucide-react';

const WeatherIcon = ({ condition }) => {
  const cond = condition.toLowerCase();
  if (cond.includes('clear')) return <Sun size={32} className="text-yellow-400" />;
  if (cond.includes('rain')) return <CloudRain size={32} className="text-blue-400" />;
  if (cond.includes('cloud')) return <Cloud size={32} className="text-gray-300" />;
  return <Sun size={32} className="text-yellow-400" />;
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
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-6">5-Day Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(dailyForecast).map(([day, weather], index) => (
          <div 
            key={index} 
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center hover:bg-white/10 transition-colors"
          >
            <p className="text-white/70 font-medium mb-3">{day}</p>
            <WeatherIcon condition={weather.weather[0].main} />
            <p className="text-2xl font-bold text-white mt-3">{Math.round(weather.main.temp)}°</p>
            <p className="text-white/50 text-xs mt-1 capitalize text-center leading-tight">
              {weather.weather[0].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
