import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[75vh] md:h-screen overflow-hidden" aria-label="Daily Conversation Cards Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient for text readability - does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Practice English every day
        </span>
        <h1 className="mt-2 text-3xl font-semibold leading-tight md:text-5xl">
          Daily Conversation Cards
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/90 md:text-lg">
          Flip, shuffle, and speak. Short prompts with guiding questions and vocabulary
          hints to boost fluency for EFL learners.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#cards" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-900 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/70">
            Start Practicing
          </a>
          <a href="#how-to-play" className="rounded-full border border-white/60 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70">
            How to Play
          </a>
        </div>
      </div>
    </section>
  );
}
