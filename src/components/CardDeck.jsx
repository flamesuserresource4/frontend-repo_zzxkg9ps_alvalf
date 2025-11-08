import React, { useMemo, useState } from 'react';
import { RefreshCw, Shuffle, Volume2, RotateCw } from 'lucide-react';

const DEFAULT_CARDS = [
  {
    title: 'Weekend Plans',
    questions: [
      'What do you usually do on weekends?',
      'What will you do next weekend?',
      'Who do you spend time with?'
    ],
    vocab: ['relax', 'hang out', 'schedule', 'prefer', 'outdoors']
  },
  {
    title: 'Food Favorites',
    questions: [
      'What is your favorite food and why?',
      'How often do you cook at home?',
      'What is a local dish you recommend?'
    ],
    vocab: ['flavor', 'spicy', 'ingredient', 'recommend', 'healthy']
  },
  {
    title: 'Daily Routine',
    questions: [
      'What time do you wake up on weekdays?',
      'Which part of your day is the busiest?',
      'How do you relax in the evening?'
    ],
    vocab: ['commute', 'habit', 'productive', 'break', 'evening']
  },
  {
    title: 'Travel Dreams',
    questions: [
      'Where would you like to travel and why?',
      'What do you pack first when you travel?',
      'Do you prefer cities or nature?'
    ],
    vocab: ['destination', 'budget', 'itinerary', 'culture', 'adventure']
  },
  {
    title: 'Technology Use',
    questions: [
      'How does technology help you every day?',
      'Which app do you use the most?',
      'How do you balance screen time?'
    ],
    vocab: ['device', 'feature', 'connect', 'notification', 'privacy']
  }
];

function Card({ card, flipped, onFlip }) {
  return (
    <div
      className="group relative h-72 w-full cursor-pointer select-none rounded-2xl bg-gradient-to-br from-white to-white/90 p-[1px] shadow-xl transition-transform duration-300 sm:h-80 md:h-96"
      onClick={onFlip}
      aria-label={`Conversation card: ${card.title}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onFlip()}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50">
        {/* front */}
        <div className={`absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center transition-all ${flipped ? 'rotate-y-180 opacity-0' : 'opacity-100'} [backface-visibility:hidden]`}
             style={{ transformStyle: 'preserve-3d' }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-700">
            <span className="inline-block h-2 w-2 rounded-full bg-indigo-500" />
            Daily Topic
          </div>
          <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">{card.title}</h3>
          <p className="max-w-sm text-sm text-gray-600">Tap to see guiding questions and useful vocabulary.</p>
        </div>

        {/* back */}
        <div className={`absolute inset-0 flex h-full w-full flex-col justify-between p-5 transition-all ${flipped ? 'rotate-y-0 opacity-100' : '-rotate-y-180 opacity-0'} [backface-visibility:hidden]`} style={{ transformStyle: 'preserve-3d' }}>
          <div>
            <h4 className="mb-2 text-lg font-semibold text-gray-900">Questions</h4>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              {card.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-semibold text-gray-900">Vocabulary Hints</h4>
            <div className="flex flex-wrap gap-2">
              {card.vocab.map((v) => (
                <span key={v} className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-medium text-indigo-700">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CardDeck() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [seed, setSeed] = useState(0);

  const deck = useMemo(() => {
    // simple shuffle using seed for variety
    const rng = mulberry32(seed);
    const copy = [...DEFAULT_CARDS];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, [seed]);

  const current = deck[index % deck.length];

  function nextCard() {
    setFlipped(false);
    setIndex((i) => (i + 1) % deck.length);
  }
  function flipCard() {
    setFlipped((f) => !f);
  }
  function reshuffle() {
    setFlipped(false);
    setIndex(0);
    setSeed((s) => s + 1);
  }
  function speak() {
    if (!('speechSynthesis' in window)) return;
    const text = [current.title, ...current.questions, 'Vocabulary:', ...current.vocab].join('. ');
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  return (
    <section id="cards" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Today’s Conversation</h2>
        <div className="flex items-center gap-2">
          <button onClick={reshuffle} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow hover:bg-gray-50">
            <Shuffle size={16} /> Shuffle
          </button>
          <button onClick={nextCard} className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-black">
            <RefreshCw size={16} /> Next
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-5">
        <div className="md:col-span-3">
          <Card card={current} flipped={flipped} onFlip={flipCard} />
        </div>
        <aside className="md:col-span-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Tips for Fluency</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Speak for 60–90 seconds per question.</li>
              <li>Use 2–3 vocabulary hints naturally.</li>
              <li>Record yourself and listen for improvements.</li>
              <li>Paraphrase and extend your answers.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <button onClick={flipCard} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow hover:bg-gray-50">
                <RotateCw size={16} /> Flip
              </button>
              <button onClick={speak} className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-indigo-700">
                <Volume2 size={16} /> Read Aloud
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

// deterministic PRNG
function mulberry32(a) {
  let t = a + 0x6D2B79F5;
  return function () {
    t += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
