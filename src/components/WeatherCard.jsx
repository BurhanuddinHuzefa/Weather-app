import React from 'react';
import { Cloud, Sun, CloudRain, Wind, Droplets, Thermometer } from 'lucide-react';

const WeatherIcon = ({ condition, size = 48 }) => {
  const cond = condition.toLowerCase();
  if (cond.includes('clear')) return <Sun size={size} className="text-yellow-400" />;
  if (cond.includes('rain')) return <CloudRain size={size} className="text-blue-400" />;
  if (cond.includes('cloud')) return <Cloud size={size} className="text-gray-300" />;
  return <Sun size={size} className="text-yellow-400" />;
};

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;
  const condition = weather[0].main;
  const description = weather[0].description;

  return (
    <div className="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-white mb-2">{name}</h1>
          <p className="text-xl text-white/70 capitalize">{description}</p>
        </div>
        
        <div className="flex items-center gap-6">
          <WeatherIcon condition={condition} size={80} />
          <div className="text-7xl font-light text-white">
            {Math.round(main.temp)}°
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 bg-white/5 rounded-2xl p-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-500/20 rounded-xl text-blue-300">
            <Thermometer size={24} />
          </div>
          <div>
            <p className="text-white/50 text-sm">Feels like</p>
            <p className="text-white text-lg font-semibold">{Math.round(main.feels_like)}°C</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-purple-500/20 rounded-xl text-purple-300">
            <Droplets size={24} />
          </div>
          <div>
            <p className="text-white/50 text-sm">Humidity</p>
            <p className="text-white text-lg font-semibold">{main.humidity}%</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-green-500/20 rounded-xl text-green-300">
            <Wind size={24} />
          </div>
          <div>
            <p className="text-white/50 text-sm">Wind Speed</p>
            <p className="text-white text-lg font-semibold">{wind.speed} m/s</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-orange-500/20 rounded-xl text-orange-300">
            <Cloud size={24} />
          </div>
          <div>
            <p className="text-white/50 text-sm">Pressure</p>
            <p className="text-white text-lg font-semibold">{main.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
