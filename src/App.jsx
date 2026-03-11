import { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import LoginScreen from './components/LoginScreen';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CoreValues from './components/CoreValues';
import Strengths from './components/Strengths';
import VisionBuilder from './components/VisionBuilder';
import Goals from './components/Goals';
import Journal from './components/Journal';
import Progress from './components/Progress';

export default function App() {
  const { data, setData, addTimeline, updateStreak } = useLocalStorage();
  const [page, setPage] = useState('dashboard');

  const handleLogin = (user) => {
    setData((prev) => ({
      ...prev,
      user,
      startDate: prev.startDate || new Date().toISOString(),
    }));
  };

  const handleLogout = () => {
    setData((prev) => ({ ...prev, user: null }));
  };

  useEffect(() => {
    if (data.user) updateStreak();
  }, [data.user, updateStreak]);

  if (!data.user) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const pageProps = { data, setData, addTimeline };

  const pages = {
    dashboard: <Dashboard data={data} onNavigate={setPage} />,
    values: <CoreValues {...pageProps} />,
    strengths: <Strengths {...pageProps} />,
    vision: <VisionBuilder {...pageProps} />,
    goals: <Goals {...pageProps} />,
    journal: <Journal {...pageProps} />,
    progress: <Progress data={data} />,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        userName={data.user.name}
        streak={data.streak}
        onLogout={handleLogout}
      />
      <div className="flex min-h-[calc(100vh-65px)]">
        <Sidebar activePage={page} onNavigate={setPage} />
        <main className="flex-1 p-8 max-w-4xl">
          {pages[page]}
        </main>
      </div>
    </div>
  );
}
