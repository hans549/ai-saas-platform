import { useState } from 'react';
import { VISION_AREAS } from '../data/constants';

export default function VisionBuilder({ data, setData, addTimeline }) {
  const [activeArea, setActiveArea] = useState(null);
  const [text, setText] = useState('');

  const selectArea = (key) => {
    setActiveArea(key);
    setText(data.visions[key] || '');
  };

  const saveVision = () => {
    if (!text.trim() || !activeArea) return;
    addTimeline('Wrote vision for ' + VISION_AREAS[activeArea].title);
    setData((prev) => ({
      ...prev,
      visions: { ...prev.visions, [activeArea]: text.trim() },
    }));
  };

  const savedEntries = Object.entries(data.visions);

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-2">Life Vision Builder</h1>
      <p className="text-slate-500 mb-8 text-lg">
        Craft a clear picture of the person you want to become and the life you want to live.
      </p>

      {/* Area Picker */}
      <div className="bg-white rounded-xl p-7 border border-slate-200 mb-6">
        <h3 className="text-lg font-bold mb-4">Choose a life area to envision</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(VISION_AREAS).map(([key, area]) => (
            <button
              key={key}
              onClick={() => selectArea(key)}
              className={`text-left p-5 rounded-xl border-2 transition-all ${
                activeArea === key
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-slate-200 hover:border-indigo-300'
              }`}
            >
              <div
                className="text-2xl mb-2"
                dangerouslySetInnerHTML={{ __html: area.icon }}
              />
              <h4 className="font-semibold text-sm mb-1">{area.title}</h4>
              <p className="text-xs text-slate-500">{area.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Editor */}
      {activeArea && (
        <div className="bg-white rounded-xl p-7 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold mb-2">{VISION_AREAS[activeArea].title} Vision</h3>
          <p className="text-sm text-slate-500 mb-3">
            Describe in detail what this area of your life looks like in 5 years. Be specific and vivid.
          </p>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="In 5 years, I see myself..."
            rows={6}
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-base outline-none focus:border-indigo-500 transition-colors resize-y font-inherit leading-relaxed"
          />
          <button
            onClick={saveVision}
            className="mt-4 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg text-sm transition-colors"
          >
            Save Vision
          </button>
        </div>
      )}

      {/* Saved Visions */}
      {savedEntries.map(([area, visionText]) => (
        <div
          key={area}
          className="bg-green-50 border-2 border-green-300 rounded-xl p-5 mb-4"
        >
          <h4 className="font-bold text-green-800 mb-2">{VISION_AREAS[area]?.title}</h4>
          <p className="whitespace-pre-wrap text-slate-700">{visionText}</p>
        </div>
      ))}
    </div>
  );
}
