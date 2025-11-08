import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-gray-600 md:flex-row">
        <p>
          © {new Date().getFullYear()} Daily Conversation Cards. Built for EFL learners.
        </p>
        <p>
          Tip: Practice a little every day. Consistency beats intensity.
        </p>
      </div>
    </footer>
  );
}
