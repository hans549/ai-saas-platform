export default function Header({ userName, streak, onLogout }) {
  return (
    <header className="bg-white px-8 py-4 flex justify-between items-center border-b border-slate-200 sticky top-0 z-50">
      <div className="text-xl font-bold text-indigo-600">Identity</div>
      <div className="flex items-center gap-4">
        <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {streak}-day streak
        </span>
        <span className="font-semibold text-sm text-slate-700">{userName}</span>
        <button
          onClick={onLogout}
          className="px-4 py-2 text-sm font-semibold border-2 border-slate-200 rounded-lg hover:border-indigo-500 hover:text-indigo-500 transition-colors"
        >
          Log out
        </button>
      </div>
    </header>
  );
}
