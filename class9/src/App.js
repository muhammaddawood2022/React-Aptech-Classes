import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-slate-900 flex items-center justify-center p-4">
      
      {/* Main Glassmorphic Card */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl text-center max-w-md w-full text-white">
        
        <h1 className="text-3xl font-extrabold tracking-wide mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Redux Toolkit Counter
        </h1>
        <p className="text-gray-300 text-sm mb-8">Powered by Tailwind CSS & React</p>

        {/* Counter Display Box */}
        <div className="bg-black/40 border border-white/10 py-6 rounded-2xl mb-8 shadow-inner">
          <span className="text-gray-400 text-sm uppercase tracking-widest block mb-1">Current Count</span>
          <span className={`text-6xl font-black transition-all duration-300 inline-block ${count < 0 ? 'text-red-400' : 'text-purple-400'}`}>
            {count}
          </span>
        </div>

        {/* Professional Buttons Container */}
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => dispatch(decrement())}
            className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform active:scale-95 transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-red-500/30"
          >
            ➖ Decrement
          </button>

          <button 
            onClick={() => dispatch(increment())}
            className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform active:scale-95 transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-purple-500/30"
          >
            ➕ Increment
          </button>
        </div>

      </div>

    </div>
  );
}

export default App;