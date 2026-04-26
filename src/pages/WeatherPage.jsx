import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, AlertCircle } from 'lucide-react';
import { fetchCurrentWeather, fetchForecast } from '../utils/api';
import WeatherCard from '../components/WeatherCard';
import ForecastCard from '../components/ForecastCard';
import SearchBar from '../components/SearchBar';
import LoadingSkeleton from '../components/LoadingSkeleton';

const WeatherPage = () => {
  const { city } = useParams();
  const [currentData, setCurrentData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [current, forecast] = await Promise.all([
          fetchCurrentWeather(city),
          fetchForecast(city)
        ]);

        setCurrentData(current);
        setForecastData(forecast);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getWeatherData();
  }, [city]);

  if (loading) return (
    <div className="max-w-5xl mx-auto p-6">
      <LoadingSkeleton />
    </div>
  );

  if (error) return (
    <div className="max-w-5xl mx-auto p-6 text-center">
      <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-12 text-white">
        <AlertCircle size={64} className="mx-auto text-red-400 mb-6" />
        <h2 className="text-3xl font-bold mb-4">Oops! {error}</h2>
        <p className="text-white/60 mb-8">We couldn't find the city "{city}". Please check the spelling and try again.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-white/90 transition-colors">
          <ChevronLeft size={20} />
          Go Back Home
        </Link>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-6 pb-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <Link to="/" className="text-white/60 hover:text-white flex items-center gap-2 transition-colors">
          <ChevronLeft size={24} />
          <span className="text-lg font-medium">Home</span>
        </Link>
        <div className="w-full max-w-sm">
          <SearchBar initialValue={city} />
        </div>
      </div>

      <WeatherCard data={currentData} />
      <ForecastCard data={forecastData} />
    </div>
  );
};

export default WeatherPage;
