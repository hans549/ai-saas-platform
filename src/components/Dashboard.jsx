import { useMemo } from 'react';
import { QUOTES } from '../data/constants';

export default function Dashboard({ data, onNavigate }) {
  const quote = useMemo(() => {
    const dayIdx = Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % QUOTES.length;
    return QUOTES[dayIdx];
  }, []);

  const doneGoals = data.goals.filter((g) => g.done).length;
  const strengthCount = data.strengthResults
    ? data.strengthResults.filter((s) => s.pct >= 50).length
    : 0;

  const nextStep = useMemo(() => {
    if (data.coreValues.length === 0) return { text: "Start by discovering your core values - they're the foundation of your identity.", btn: 'Discover Values', page: 'values' };
    if (!data.strengthResults) return { text: "Great values! Now let's discover your natural strengths.", btn: 'Find Strengths', page: 'strengths' };
    if (Object.keys(data.visions).length === 0) return { text: 'You know your values and strengths. Time to build your life vision.', btn: 'Build Vision', page: 'vision' };
    if (data.goals.length === 0) return { text: 'Your vision is taking shape. Set goals that align with your identity.', btn: 'Set Goals', page: 'goals' };
    if (data.journal.length === 0) return { text: 'Reflect on your journey so far. Journaling deepens self-awareness.', btn: 'Start Journaling', page: 'journal' };
    return { text: 'Keep going! Continue journaling and working toward your goals.', btn: 'View Progress', page: 'progress' };
  }, [data]);

  const stats = [
    { icon: '\u2666', value: data.coreValues.length, label: 'Core Values' },
    { icon: '\u2605', value: strengthCount, label: 'Strengths Found' },
    { icon: '\u270E', value: data.journal.length, label: 'Journal Entries' },
    { icon: '\u2713', value: `${doneGoals}/${data.goals.length}`, label: 'Goals Completed' },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl p-10 mb-8">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {data.user?.name}!</h2>
        <p className="opacity-90 text-lg">Your identity journey continues. Small steps lead to big transformations.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
            <div className="text-2xl mb-2">{s.icon}</div>
            <div className="text-2xl font-bold text-indigo-600">{s.value}</div>
            <div className="text-sm text-slate-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Daily Quote */}
      <div className="bg-gradient-to-r from-amber-100 to-yellow-200 rounded-xl p-8 mb-8 text-center">
        <p className="text-lg italic text-amber-900">{quote.text}</p>
        <p className="font-semibold text-amber-800 mt-3 text-sm">- {quote.author}</p>
      </div>

      {/* Next Step */}
      <div className="bg-white rounded-xl p-7 border border-slate-200">
        <h3 className="text-lg font-bold mb-3">Suggested Next Step</h3>
        <p className="text-slate-500 mb-4">{nextStep.text}</p>
        <button
          onClick={() => onNavigate(nextStep.page)}
          className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg text-sm transition-colors"
        >
          {nextStep.btn}
        </button>
      </div>
    </div>
  );
}
