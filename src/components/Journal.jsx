import { useState } from 'react';
import { JOURNAL_PROMPTS, MOODS } from '../data/constants';

export default function Journal({ data, setData, addTimeline }) {
  const [entry, setEntry] = useState('');
  const [mood, setMood] = useState(null);

  const usePrompt = (prompt) => {
    setEntry(prompt + '\n\n');
  };

  const saveEntry = () => {
    if (!entry.trim()) return;
    const firstLine = entry.trim().split('\n')[0];
    const isPrompt = JOURNAL_PROMPTS.includes(firstLine);

    const journalEntry = {
      id: Date.now(),
      text: entry.trim(),
      mood,
      prompt: isPrompt ? firstLine : null,
      date: new Date().toISOString(),
    };

    addTimeline('Wrote journal entry');
    setData((prev) => ({
      ...prev,
      journal: [journalEntry, ...prev.journal],
    }));
    setEntry('');
    setMood(null);
  };

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-2">Identity Journal</h1>
      <p className="text-slate-500 mb-8 text-lg">
        Regular reflection builds self-awareness. Write freely or use a prompt.
      </p>

      {/* Write Entry */}
      <div className="bg-white rounded-xl p-7 border border-slate-200 mb-6">
        <h3 className="text-lg font-bold mb-3">Today's Reflection</h3>

        {/* Prompts */}
        <div className="flex flex-wrap gap-2 mb-4">
          {JOURNAL_PROMPTS.map((p) => (
            <button
              key={p}
              onClick={() => usePrompt(p)}
              className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium hover:bg-indigo-500 hover:text-white transition-colors"
            >
              {p}
            </button>
          ))}
        </div>

        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="What's on your mind today? How are you growing?"
          rows={5}
          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-base outline-none focus:border-indigo-500 transition-colors resize-y leading-relaxed mb-4"
        />

        {/* Mood Picker */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm text-slate-500">Mood:</span>
          <div className="flex gap-2">
            {MOODS.map((m, i) => (
              <button
                key={i}
                onClick={() => setMood(i)}
                className={`text-3xl transition-opacity ${
                  mood === i ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
                title={m.label}
              >
                {m.emoji}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={saveEntry}
          className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg text-sm transition-colors"
        >
          Save Entry
        </button>
      </div>

      {/* Past Entries */}
      <div className="bg-white rounded-xl p-7 border border-slate-200">
        <h3 className="text-lg font-bold mb-4">Past Entries</h3>
        {data.journal.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            <div className="text-5xl mb-4">&#9998;</div>
            <p>Your journal is empty. Start writing to track your growth.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {data.journal.map((e) => (
              <div key={e.id} className="py-5">
                <p className="text-xs text-slate-400 mb-1">{formatDate(e.date)}</p>
                {e.prompt && (
                  <p className="text-xs font-semibold text-indigo-600 mb-2">{e.prompt}</p>
                )}
                <p className="text-base whitespace-pre-wrap text-slate-700">{e.text}</p>
                {e.mood !== null && (
                  <div className="mt-2 text-xl">{MOODS[e.mood]?.emoji}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
