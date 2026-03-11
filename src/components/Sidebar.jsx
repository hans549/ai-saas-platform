const NAV_ITEMS = [
  { label: 'Discover', items: [
    { key: 'dashboard', icon: '\u25CE', text: 'Dashboard' },
    { key: 'values', icon: '\u2666', text: 'Core Values' },
    { key: 'strengths', icon: '\u2605', text: 'Strengths' },
  ]},
  { label: 'Build', items: [
    { key: 'vision', icon: '\u263C', text: 'Life Vision' },
    { key: 'goals', icon: '\u2713', text: 'Goals' },
  ]},
  { label: 'Reflect', items: [
    { key: 'journal', icon: '\u270E', text: 'Journal' },
    { key: 'progress', icon: '\u25B2', text: 'Progress' },
  ]},
];

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <nav className="w-64 bg-white border-r border-slate-200 py-6 flex-shrink-0">
      {NAV_ITEMS.map((group) => (
        <div key={group.label}>
          <div className="px-6 py-2 text-xs uppercase tracking-wider text-slate-400 font-bold">
            {group.label}
          </div>
          {group.items.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`flex items-center gap-3 w-full px-6 py-3 text-left text-base transition-colors ${
                activePage === item.key
                  ? 'bg-indigo-50 text-indigo-600 font-semibold'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
              }`}
            >
              <span className="w-6 text-center text-lg">{item.icon}</span>
              {item.text}
            </button>
          ))}
        </div>
      ))}
    </nav>
  );
}
