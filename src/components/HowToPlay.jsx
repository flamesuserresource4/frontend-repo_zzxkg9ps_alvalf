import React from 'react';
import { BookOpen, Users, Timer, Mic } from 'lucide-react';

export default function HowToPlay() {
  return (
    <section id="how-to-play" className="bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-700">
            <BookOpen size={14} /> How to Play
          </span>
          <h2 className="mt-3 text-2xl font-semibold text-gray-900 md:text-3xl">Use the cards for fluent speaking practice</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 md:text-base">
            Simple routines for students and teachers. Flip for questions and vocabulary hints, shuffle for a new topic.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-700">
              <Timer size={18} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Solo Practice (3–5 min)</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Press Shuffle, then Flip to view questions and vocabulary.</li>
              <li>Speak for 60–90 seconds per question. Use new words naturally.</li>
              <li>Record your voice and listen for clarity and pronunciation.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700">
              <Users size={18} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Pair Work (5–8 min)</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Student A answers Question 1 while Student B listens.</li>
              <li>Switch roles every question; ask 1–2 follow-up questions.</li>
              <li>Use vocabulary hints to paraphrase and extend answers.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-600/10 text-rose-700">
              <Mic size={18} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Teacher Mode (8–10 min)</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Show one card to the class. Give 30 seconds to plan.</li>
              <li>Students speak in pairs; rotate partners after each question.</li>
              <li>Collect 2–3 strong phrases and common errors for feedback.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
