import { useState } from 'react';
import { QUIZ_QUESTIONS, STRENGTH_CATEGORIES } from '../data/constants';

export default function Strengths({ data, setData, addTimeline }) {
  const [currentQ, setCurrentQ] = useState(0);
  const { strengthAnswers, strengthResults } = data;

  const selectAnswer = (idx) => {
    setData((prev) => ({
      ...prev,
      strengthAnswers: { ...prev.strengthAnswers, [currentQ]: idx },
    }));
  };

  const nextQuestion = () => {
    if (strengthAnswers[currentQ] === undefined) return;
    if (currentQ < QUIZ_QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const calculateResults = () => {
    const scores = {};
    Object.keys(STRENGTH_CATEGORIES).forEach((c) => (scores[c] = 0));
    QUIZ_QUESTIONS.forEach((q, i) => {
      const ans = strengthAnswers[i];
      if (ans !== undefined) scores[q.opts[ans].cat] += 1;
    });
    const max = Math.max(...Object.values(scores), 1);
    const results = Object.entries(scores)
      .map(([name, score]) => ({ name, score, pct: Math.round((score / max) * 100) }))
      .sort((a, b) => b.score - a.score);

    addTimeline('Completed strengths assessment. Top strength: ' + results[0].name);
    setData((prev) => ({ ...prev, strengthResults: results }));
  };

  const retake = () => {
    setCurrentQ(0);
    setData((prev) => ({ ...prev, strengthAnswers: {}, strengthResults: null }));
  };

  // Results view
  if (strengthResults) {
    return (
      <div className="animate-fadeIn">
        <h1 className="text-3xl font-bold mb-2">Strengths Discovery</h1>
        <p className="text-slate-500 mb-8 text-lg">Your personal strength profile based on your responses.</p>

        <div className="bg-white rounded-xl p-7 border border-slate-200">
          <h3 className="text-lg font-bold mb-6">Your Strength Profile</h3>
          <div className="space-y-6">
            {strengthResults.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="font-semibold text-sm">{s.name}</span>
                  <span className="text-sm text-slate-500">{s.pct}%</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
                <p className="text-xs text-slate-400 mt-1">{STRENGTH_CATEGORIES[s.name]}</p>
              </div>
            ))}
          </div>
          <button
            onClick={retake}
            className="mt-6 px-5 py-2 text-sm font-semibold border-2 border-slate-200 rounded-lg hover:border-indigo-400 hover:text-indigo-500 transition-colors"
          >
            Retake Assessment
          </button>
        </div>
      </div>
    );
  }

  // Quiz view
  const q = QUIZ_QUESTIONS[currentQ];

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-2">Strengths Discovery</h1>
      <p className="text-slate-500 mb-8 text-lg">Answer these questions to uncover your natural strengths and talents.</p>

      <div className="bg-white rounded-xl p-7 border border-slate-200">
        <h3 className="text-lg font-bold mb-1">Question {currentQ + 1}</h3>
        <p className="text-slate-500 mb-5">{q.q}</p>

        <div className="space-y-2.5">
          {q.opts.map((opt, i) => (
            <button
              key={i}
              onClick={() => selectAnswer(i)}
              className={`w-full text-left px-5 py-3.5 rounded-lg border-2 text-sm font-medium transition-all ${
                strengthAnswers[currentQ] === i
                  ? 'bg-indigo-500 text-white border-indigo-500'
                  : 'border-slate-200 hover:border-indigo-400 text-slate-700'
              }`}
            >
              {opt.text}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevQuestion}
            className={`px-5 py-2 text-sm font-semibold border-2 border-slate-200 rounded-lg hover:border-indigo-400 transition-colors ${
              currentQ === 0 ? 'invisible' : ''
            }`}
          >
            Previous
          </button>
          <span className="text-sm text-slate-400">{currentQ + 1} / {QUIZ_QUESTIONS.length}</span>
          <button
            onClick={nextQuestion}
            className="px-5 py-2 text-sm font-semibold bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors"
          >
            {currentQ === QUIZ_QUESTIONS.length - 1 ? 'See Results' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
