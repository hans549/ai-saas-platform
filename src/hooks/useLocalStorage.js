import { useState, useCallback } from 'react';

const STORAGE_KEY = 'identity_app_data';

const defaultData = {
  user: null,
  values: [],
  coreValues: [],
  strengthAnswers: {},
  strengthResults: null,
  visions: {},
  goals: [],
  journal: [],
  timeline: [],
  streak: 0,
  lastVisit: null,
  startDate: null,
};

export function useLocalStorage() {
  const [data, setDataState] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? { ...defaultData, ...JSON.parse(stored) } : { ...defaultData };
    } catch {
      return { ...defaultData };
    }
  });

  const setData = useCallback((updater) => {
    setDataState((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const addTimeline = useCallback((text) => {
    setData((prev) => {
      const timeline = [{ text, date: new Date().toISOString() }, ...prev.timeline].slice(0, 50);
      return { ...prev, timeline };
    });
  }, [setData]);

  const updateStreak = useCallback(() => {
    setData((prev) => {
      const today = new Date().toDateString();
      let streak = prev.streak;

      if (prev.lastVisit) {
        const last = new Date(prev.lastVisit).toDateString();
        if (last === today) return prev;
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        streak = last === yesterday.toDateString() ? streak + 1 : 1;
      } else {
        streak = 1;
      }

      return { ...prev, streak, lastVisit: new Date().toISOString() };
    });
  }, [setData]);

  return { data, setData, addTimeline, updateStreak };
}
