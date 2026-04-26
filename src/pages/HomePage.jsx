import React from 'react';
import SearchBar from '../components/SearchBar';
import { CloudSun } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-12">
        <div className="inline-flex p-6 bg-blue-500/10 rounded-full mb-6">
          <CloudSun size={80} className="text-blue-400" />
        </div>
        <h1 className="text-6xl font-bold text-white mb-4">WeatherCast</h1>
        <p className="text-xl text-white/60 max-w-lg mx-auto">
          Get real-time weather updates and a 5-day forecast for any city in the world.
        </p>
      </div>
      
      <SearchBar />
      
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-40">
        <div className="text-white">
          <p className="text-2xl font-bold">24/7</p>
          <p className="text-sm">Real-time Data</p>
        </div>
        <div className="text-white">
          <p className="text-2xl font-bold">5 Days</p>
          <p className="text-sm">Detailed Forecast</p>
        </div>
        <div className="text-white">
          <p className="text-2xl font-bold">Smart</p>
          <p className="text-sm">Search Input</p>
        </div>
        <div className="text-white">
          <p className="text-2xl font-bold">Global</p>
          <p className="text-sm">World Coverage</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
