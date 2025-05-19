const STORAGE_KEY = 'emojiVotes';

export const loadVotes = (emojiIds) => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return JSON.parse(saved);
  const initial = {};
  emojiIds.forEach(id => (initial[id] = 0));
  return initial;
};

export const saveVotes = (votes) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
};

export const clearVotes = () => {
  localStorage.removeItem(STORAGE_KEY);
};
