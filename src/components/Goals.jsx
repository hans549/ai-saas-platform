import { useState } from 'react';

export default function Goals({ data, setData, addTimeline }) {
  const [title, setTitle] = useState('');
  const [why, setWhy] = useState('');
  const [linkedValue, setLinkedValue] = useState('');

  const addGoal = () => {
    if (!title.trim()) return;
    const goal = {
      id: Date.now(),
      title: title.trim(),
      why: why.trim(),
      value: linkedValue,
      done: false,
      createdAt: new Date().toISOString(),
    };
    addTimeline('Set new goal: ' + goal.title);
    setData((prev) => ({ ...prev, goals: [...prev.goals, goal] }));
    setTitle('');
    setWhy('');
    setLinkedValue('');
  };

  const toggleGoal = (id) => {
    setData((prev) => {
      const goals = prev.goals.map((g) => {
        if (g.id !== id) return g;
        const done = !g.done;
        if (done) addTimeline('Completed goal: ' + g.title);
        return { ...g, done };
      });
      return { ...prev, goals };
    });
  };

  const deleteGoal = (id) => {
    setData((prev) => ({
      ...prev,
      goals: prev.goals.filter((g) => g.id !== id),
    }));
  };

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-2">Identity-Aligned Goals</h1>
      <p className="text-slate-500 mb-8 text-lg">
        Set goals that align with your values and vision. These aren't just tasks - they're steps toward becoming who you want to be.
      </p>

      {/* Add Goal */}
      <div className="bg-white rounded-xl p-7 border border-slate-200 mb-6">
        <h3 className="text-lg font-bold mb-4">Add a New Goal</h3>
        <input
          type="text"
          placeholder="What do you want to achieve?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-base outline-none focus:border-indigo-500 transition-colors mb-3"
        />
        <input
          type="text"
          placeholder="Why does this matter to your identity?"
          value={why}
          onChange={(e) => setWhy(e.target.value)}
          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-base outline-none focus:border-indigo-500 transition-colors mb-3"
        />
        <select
          value={linkedValue}
          onChange={(e) => setLinkedValue(e.target.value)}
          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-base outline-none focus:border-indigo-500 transition-colors bg-white mb-4"
        >
          <option value="">Link to a core value (optional)</option>
          {data.coreValues.map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
        <button
          onClick={addGoal}
          className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg text-sm transition-colors"
        >
          Add Goal
        </button>
      </div>

      {/* Goal List */}
      <div className="bg-white rounded-xl p-7 border border-slate-200">
        <h3 className="text-lg font-bold mb-4">Your Goals</h3>
        {data.goals.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            <div className="text-5xl mb-4">&#10003;</div>
            <p>No goals yet. Add your first identity-aligned goal above.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {data.goals.map((g) => (
              <div key={g.id} className="flex items-start gap-4 py-5">
                <button
                  onClick={() => toggleGoal(g.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                    g.done
                      ? 'bg-emerald-500 border-emerald-500 text-white text-xs'
                      : 'border-slate-300 hover:border-indigo-400'
                  }`}
                >
                  {g.done ? '&#10003;' : ''}
                </button>
                <div className="flex-1">
                  <h4 className={`text-base font-medium ${g.done ? 'line-through text-slate-400' : ''}`}>
                    {g.title}
                  </h4>
                  {g.why && <p className="text-sm text-slate-500 mt-0.5">{g.why}</p>}
                  {g.value && (
                    <span className="inline-block mt-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold">
                      {g.value}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => deleteGoal(g.id)}
                  className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                  &#10005;
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
