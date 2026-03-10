import React from 'react';

const GroupCountSlider = ({ count, setCount, maxGroups }) => {
  return (
    <div style={{
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      zIndex: 1000,
      minWidth: '250px',
      border: '2px solid #c41e3a'
    }}>
      <h4 style={{ 
        margin: '0 0 10px 0', 
        color: '#c41e3a',
        fontSize: '14px',
        fontWeight: 'bold'
      }}>
        КОЛИЧЕСТВО ГРУПП: {count}
      </h4>
      
      <input
        type="range"
        min="5"
        max={maxGroups}
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
        style={{
          width: '100%',
          margin: '10px 0',
          accentColor: '#c41e3a'
        }}
      />
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px',
        color: '#666'
      }}>
        <span>5</span>
        <span>{maxGroups}</span>
      </div>
    </div>
  );
};

export default GroupCountSlider;