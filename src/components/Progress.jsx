import { useMemo } from 'react';

export default function Progress({ data }) {
  const { coreValues, strengthResults, visions, goals, journal, timeline, startDate } = data;

  const completion = useMemo(() => {
    let done = 0;
    if (coreValues.length > 0) done++;
    if (strengthResults) done++;
    if (Object.keys(visions).length > 0) done++;
    if (goals.length > 0) done++;
    if (journal.length > 0) done++;
    return Math.round((done / 5) * 100);
  }, [coreValues, strengthResults, visions, goals, journal]);

  const dashOffset = 440 - (440 * completion) / 100;
  const daysActive = useMemo(() => {
    if (!startDate) return 1;
    return Math.max(1, Math.ceil((Date.now() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)));
  }, [startDate]);

  const goalsAchieved = goals.filter((g) => g.done).length;

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-2">Growth Timeline</h1>
      <p className="text-slate-500 mb-8 text-lg">See how far you've come on your identity journey.</p>

      {/* Progress Ring */}
      <div className="bg-white rounded-xl p-7 border border-slate-200 mb-6">
        <h3 className="text-lg font-bold mb-4">Journey Completion</h3>
        <div className="text-center py-4">
          <svg width="160" height="160" viewBox="0 0 160 160" className="mx-auto">
            <circle cx="80" cy="80" r="70" fill="none" stroke="#e2e8f0" strokeWidth="12" />
            <circle
              cx="80" cy="80" r="70"
              fill="none"
              stroke="#6366f1"
              strokeWidth="12"
              strokeDasharray="440"
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              transform="rotate(-90 80 80)"
              style={{ transition: 'stroke-dashoffset 1s ease' }}
            />
            <text x="80" y="80" textAnchor="middle" dy="8" fontSize="28" fontWeight="700" fill="#6366f1">
              {completion}%
            </text>
          </svg>
          <p className="text-sm text-slate-500 mt-3">Overall Identity Journey</p>
        </div>
      </div>

      {/* Milestones */}
      <div className="bg-white rounded-xl p-7 border border-slate-200 mb-6">
        <h3 className="text-lg font-bold mb-4">Milestones</h3>
        <div className="grid grid-cols-3 gap-5">
          {[
            { value: daysActive, label: 'Days Active' },
            { value: journal.length, label: 'Reflections Written' },
            { value: goalsAchieved, label: 'Goals Achieved' },
          ].map((m) => (
            <div key={m.label} className="text-center bg-slate-50 rounded-xl p-5">
              <div className="text-2xl font-bold text-indigo-600">{m.value}</div>
              <div className="text-sm text-slate-500 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl p-7 border border-slate-200">
        <h3 className="text-lg font-bold mb-6">Activity Timeline</h3>
        {timeline.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            <div className="text-5xl mb-4">&#9650;</div>
            <p>Complete activities to build your timeline.</p>
          </div>
        ) : (
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-slate-200" />

            {timeline.slice(0, 20).map((item, i) => (
              <div key={i} className="relative pb-6">
                <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                  <span className="text-white text-xs">&#9679;</span>
                </div>
                <p className="text-xs text-slate-400 mb-0.5">{formatDate(item.date)}</p>
                <p className="text-sm text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
