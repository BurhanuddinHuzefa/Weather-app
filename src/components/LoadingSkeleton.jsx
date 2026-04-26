import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="w-full animate-pulse max-w-5xl mx-auto mt-20">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center mb-12">
        <div className="h-10 w-32 bg-slate-200 rounded-xl"></div>
        <div className="h-14 w-64 bg-slate-200 rounded-[2rem]"></div>
      </div>
      
      {/* Main Card Skeleton */}
      <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-12 h-[450px] mb-12 shadow-sm">
        <div className="flex justify-between items-start">
          <div className="space-y-6">
            <div className="h-16 w-64 bg-slate-200 rounded-2xl"></div>
            <div className="h-8 w-40 bg-slate-200 rounded-xl"></div>
          </div>
          <div className="flex items-center gap-8">
            <div className="w-24 h-24 bg-slate-200 rounded-3xl"></div>
            <div className="w-32 h-32 bg-slate-200 rounded-3xl"></div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-20">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-24 bg-slate-200/50 rounded-3xl"></div>
          ))}
        </div>
      </div>

      {/* Forecast Skeleton */}
      <div className="grid grid-cols-5 gap-6 mt-12">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="h-56 bg-white/30 rounded-[2rem] border border-white/40"></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
