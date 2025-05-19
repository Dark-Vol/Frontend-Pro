import { useEffect, useState } from 'react';
import './EmojiVoteApp.scss';
import { loadVotes, saveVotes, clearVotes } from '../utils/localStorage';
import DebugOverlay from './DebugOverlay';

const EMOJIS = [
  { id: 'smile1', icon: '😃' },
  { id: 'smile2', icon: '😊' },
  { id: 'cool', icon: '😎' },
  { id: 'star', icon: '🤩' },
  { id: 'love', icon: '😍' },
];

const EmojiVoteApp = () => {
  const [votes, setVotes] = useState({});
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setVotes(loadVotes(EMOJIS.map(e => e.id)));
  }, []);

  const handleVote = (id) => {
    const updated = { ...votes, [id]: votes[id] + 1 };
    setVotes(updated);
    saveVotes(updated);
  };

  const showResults = () => {
    const max = Math.max(...Object.values(votes));
    const win = Object.keys(votes).find(id => votes[id] === max);
    setWinner(win);
  };

  const resetVotes = () => {
    const reset = {};
    EMOJIS.forEach(({ id }) => (reset[id] = 0));
    setVotes(reset);
    clearVotes();
    setWinner(null);
  };

  return (
    <div className="emoji-vote-app">
      <h1>Голосування за найкращий смайлик</h1>
      <div className="emoji-list">
        {EMOJIS.map(({ id, icon }) => (
          <div key={id} className="emoji-item" onClick={() => handleVote(id)}>
            <span className="emoji-icon\">{icon}</span>
            <span className="emoji-count\">{votes[id] || 0}</span>
          </div>
        ))}
      </div>

      <div className="buttons\">
        <button onClick={showResults}>Show Results</button>
        <button onClick={resetVotes} className="reset">Очистити результати</button>
      </div>

      {winner && (
        <div className="results">
          <h2>Результати голосування:</h2>
          <p>Переможець:</p>
          <span className="winner-icon\">{EMOJIS.find(e => e.id === winner)?.icon}</span>
          <p>Кількість голосів: {votes[winner]}</p>
        </div>
      )}

      <DebugOverlay votes={votes} />
    </div>
  );
};

export default EmojiVoteApp;
