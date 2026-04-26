import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { POPULAR_CITIES } from '../utils/constants';

const SearchBar = ({ initialValue = "" }) => {
  const [query, setQuery] = useState(initialValue);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    if (query.trim().length > 0) {
      const startMatches = POPULAR_CITIES.filter(city => 
        city.toLowerCase().startsWith(query.toLowerCase())
      ).sort();

      const containMatches = POPULAR_CITIES.filter(city => 
        city.toLowerCase().includes(query.toLowerCase()) && 
        !city.toLowerCase().startsWith(query.toLowerCase())
      ).sort();

      const combined = startMatches.length > 0 
        ? startMatches.slice(0, 5) 
        : containMatches.slice(0, 5);
      
      setSuggestions(combined);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/weather/${query.trim().toLowerCase()}`);
      setShowSuggestions(false);
    }
  };

  const handleSelectCity = (city) => {
    setQuery(city);
    navigate(`/weather/${city.toLowerCase()}`);
    setShowSuggestions(false);
  };

  return (
    <div className="relative z-50 w-full max-w-md" ref={searchRef}>
      <form onSubmit={handleSearch} className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search for a city..."
          className="w-full px-6 py-4 pl-14 bg-white/50 backdrop-blur-xl border-2 border-white/80 rounded-[2rem] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 transition-all shadow-lg hover:shadow-xl hover:bg-white/70"
        />
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={24} />
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute w-full mt-3 bg-white border border-white/60 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden z-[1000] animate-in fade-in zoom-in-95 duration-200">
          {suggestions.map((city, index) => (
            <button
              key={index}
              onClick={() => handleSelectCity(city)}
              className="w-full px-6 py-4 text-left text-slate-700 hover:bg-blue-500 hover:text-white transition-all border-b border-slate-100 last:border-0 font-medium"
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
