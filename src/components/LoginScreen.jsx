import { useState } from 'react';

export default function LoginScreen({ onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('demo@identity.app');
  const [password, setPassword] = useState('demo123');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'demo@identity.app' && password === 'demo123' && name.trim()) {
      onLogin({ name: name.trim(), email });
    } else {
      alert('Please enter your name and use demo@identity.app / demo123');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-400 p-5">
      <div className="bg-white p-12 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-2">Identity Development</h1>
        <p className="text-slate-500 mb-8">Discover who you are. Build who you want to become.</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-base outline-none focus:border-indigo-500 transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-base outline-none focus:border-indigo-500 transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-base outline-none focus:border-indigo-500 transition-colors"
          />
          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl text-base transition-colors"
          >
            Start Your Journey
          </button>
        </form>

        <p className="text-slate-400 text-sm mt-4">
          Demo: enter any name / demo@identity.app / demo123
        </p>
      </div>
    </div>
  );
}
