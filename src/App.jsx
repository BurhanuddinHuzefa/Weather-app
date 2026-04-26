import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 text-white">
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weather/:city" element={<WeatherPage />} />
          </Routes>
        </main>
        
        <footer className="border-t border-white/5 py-8 text-center text-white/30 text-sm">
          <p>© Weather app.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
