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
      // 1. First find cities that START with the query
      const startMatches = POPULAR_CITIES.filter(city => 
        city.toLowerCase().startsWith(query.toLowerCase())
      ).sort();

      // 2. If we need more, find cities that CONTAIN the query (but don't start with it)
      const containMatches = POPULAR_CITIES.filter(city => 
        city.toLowerCase().includes(query.toLowerCase()) && 
        !city.toLowerCase().startsWith(query.toLowerCase())
      ).sort();

      // Combine them: If we have prefix matches, only show those.
      // If no prefix matches, show substring matches.
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
    <div className="relative w-full max-w-md mx-auto" ref={searchRef}>
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search for a city..."
          className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={20} />
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute w-full mt-2 bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
          {suggestions.map((city, index) => (
            <button
              key={index}
              onClick={() => handleSelectCity(city)}
              className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
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
