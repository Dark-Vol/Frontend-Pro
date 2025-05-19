const DebugOverlay = ({ votes }) => {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      right: 0,
      background: '#eee',
      padding: '0.5rem 1rem',
      fontSize: '14px',
      borderTopLeftRadius: '8px',
      boxShadow: '0 -1px 6px rgba(0,0,0,0.2)',
    }}>
      <strong>Debug:</strong>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {Object.entries(votes).map(([id, count]) => (
          <li key={id}>{id}: {count}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebugOverlay;
