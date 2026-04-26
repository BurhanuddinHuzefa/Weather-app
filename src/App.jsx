import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen text-slate-800 selection:bg-blue-200">
        <main className="container mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weather/:city" element={<WeatherPage />} />
          </Routes>
        </main>
        
        <footer className="relative z-0 py-12 text-center text-slate-500 text-sm font-medium">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-px bg-slate-200"></span>
            <p>© 2026 WeatherCast</p>
            <span className="w-8 h-px bg-slate-200"></span>
          </div>
          <p>Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
