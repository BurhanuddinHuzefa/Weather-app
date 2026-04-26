import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="w-full animate-pulse">
      {/* Search Bar Skeleton */}
      <div className="h-14 bg-white/5 rounded-2xl mb-8 max-w-md mx-auto"></div>
      
      {/* Main Card Skeleton */}
      <div className="bg-white/5 rounded-3xl p-8 h-80 mb-12">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <div className="h-12 w-48 bg-white/10 rounded-xl"></div>
            <div className="h-6 w-32 bg-white/10 rounded-lg"></div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/10 rounded-full"></div>
            <div className="w-24 h-24 bg-white/10 rounded-xl"></div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-16">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-16 bg-white/10 rounded-xl"></div>
          ))}
        </div>
      </div>

      {/* Forecast Skeleton */}
      <div className="grid grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="h-40 bg-white/5 rounded-2xl"></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
