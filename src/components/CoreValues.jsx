import { ALL_VALUES } from '../data/constants';

export default function CoreValues({ data, setData, addTimeline }) {
  const { values, coreValues } = data;

  const toggleValue = (value) => {
    setData((prev) => {
      const idx = prev.values.indexOf(value);
      const next = [...prev.values];
      if (idx >= 0) {
        next.splice(idx, 1);
      } else if (next.length < 10) {
        next.push(value);
      }
      return { ...prev, values: next };
    });
  };

  const moveValue = (index, dir) => {
    setData((prev) => {
      const next = [...prev.values];
      const newIdx = index + dir;
      if (newIdx < 0 || newIdx >= next.length) return prev;
      [next[index], next[newIdx]] = [next[newIdx], next[index]];
      return { ...prev, values: next };
    });
  };

  const saveValues = () => {
    const top5 = values.slice(0, 5);
    addTimeline('Defined core values: ' + top5.join(', '));
    setData((prev) => ({ ...prev, coreValues: top5 }));
  };

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-2">Core Values Assessment</h1>
      <p className="text-slate-500 mb-8 text-lg">
        Select the values that resonate most deeply with who you are. Choose up to 10, then rank your top 5.
      </p>

      {/* Step 1: Select */}
      <div className="bg-white rounded-xl p-7 border border-slate-200 mb-6">
        <h3 className="text-lg font-bold mb-2">Step 1: Select values that matter to you</h3>
        <p className="text-sm text-slate-500 mb-4">
          Selected: <strong>{values.length}</strong> / 10
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {ALL_VALUES.map((v) => (
            <button
              key={v}
              onClick={() => toggleValue(v)}
              className={`px-4 py-3 rounded-lg text-sm font-medium border-2 transition-all ${
                values.includes(v)
                  ? 'bg-indigo-500 text-white border-indigo-500'
                  : 'border-slate-200 hover:border-indigo-400 text-slate-700'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Rank */}
      {values.length >= 5 && (
        <div className="bg-white rounded-xl p-7 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold mb-2">Step 2: Rank your top 5</h3>
          <p className="text-sm text-slate-500 mb-4">
            Use the arrows to reorder. The top 5 become your core values.
          </p>
          <ol className="divide-y divide-slate-100">
            {values.map((v, i) => (
              <li key={v} className="flex items-center gap-3 py-4">
                <span className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </span>
                <span className="flex-1 text-base">{v}</span>
                <button
                  onClick={() => moveValue(i, -1)}
                  disabled={i === 0}
                  className="px-3 py-1 text-sm border-2 border-slate-200 rounded-lg disabled:opacity-30 hover:border-indigo-400 transition-colors"
                >
                  &#9650;
                </button>
                <button
                  onClick={() => moveValue(i, 1)}
                  disabled={i === values.length - 1}
                  className="px-3 py-1 text-sm border-2 border-slate-200 rounded-lg disabled:opacity-30 hover:border-indigo-400 transition-colors"
                >
                  &#9660;
                </button>
              </li>
            ))}
          </ol>
          <button
            onClick={saveValues}
            className="mt-5 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg text-sm transition-colors"
          >
            Save My Core Values
          </button>
        </div>
      )}

      {/* Saved Values */}
      {coreValues.length > 0 && (
        <div className="bg-white rounded-xl p-7 border border-slate-200">
          <h3 className="text-lg font-bold mb-4">Your Core Values</h3>
          <ol className="divide-y divide-slate-100">
            {coreValues.map((v, i) => (
              <li key={v} className="flex items-center gap-3 py-4">
                <span className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-base">{v}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
