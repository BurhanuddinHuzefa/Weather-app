import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, AlertCircle } from 'lucide-react';
import { fetchCurrentWeather, fetchForecast } from '../utils/api';
import WeatherCard from '../components/WeatherCard';
import ForecastCard from '../components/ForecastCard';
import SearchBar from '../components/SearchBar';
import LoadingSkeleton from '../components/LoadingSkeleton';
import WeatherBackground from '../components/WeatherBackground';

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
    <div className="max-w-5xl mx-auto p-6 min-h-screen">
      <WeatherBackground condition="clear" />
      <LoadingSkeleton />
    </div>
  );

  if (error) return (
    <div className="relative min-h-screen flex items-center justify-center p-6 text-center">
      <WeatherBackground condition="clouds" />
      <div className="relative z-10 bg-white/40 backdrop-blur-2xl border border-white/50 rounded-3xl p-12 text-slate-800 shadow-2xl max-w-xl">
        <AlertCircle size={64} className="mx-auto text-red-500 mb-6" />
        <h2 className="text-3xl font-bold mb-4">Oops! {error}</h2>
        <p className="text-slate-600 mb-8 font-medium">We couldn't get the data for "{city}". Please check your connection or city name.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
          <ChevronLeft size={20} />
          Go Back Home
        </Link>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen pb-20">
      <WeatherBackground condition={currentData.weather[0].main} />
      
      <div className="relative z-10 max-w-5xl mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <Link to="/" className="text-slate-700 hover:text-blue-600 flex items-center gap-2 transition-all group">
            <div className="p-2 bg-white/40 backdrop-blur-md rounded-lg group-hover:bg-white/60 transition-colors">
              <ChevronLeft size={24} />
            </div>
            <span className="text-lg font-bold">Back to Search</span>
          </Link>
          <div className="w-full max-w-sm">
            <SearchBar initialValue={city} />
          </div>
        </div>

        <WeatherCard data={currentData} />
        <ForecastCard data={forecastData} />
      </div>
    </div>
  );
};

export default WeatherPage;
