import React, { useState } from 'react';

const CountFilterPanel = ({ graphData }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const totalGroups = graphData.nodes.length;

  const panelStyle = {
    position: 'absolute',
    bottom: '20px',
    right: '280px',
    background: 'white',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    zIndex: 1000,
    width: '180px',
    border: '2px solid #c41e3a'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
    cursor: 'pointer',
    borderBottom: '2px solid #c41e3a',
    paddingBottom: '4px'
  };

  const titleStyle = {
    margin: 0,
    fontSize: '13px',
    color: '#c41e3a',
    fontWeight: 'bold'
  };

  const sliderStyle = {
    width: '100%',
    margin: '5px 0',
    accentColor: '#c41e3a',
    opacity: 0.5,
    cursor: 'not-allowed'
  };

  const valuesStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '11px',
    color: '#666',
    marginTop: '2px'
  };

  return (
    <div style={panelStyle}>
      <div style={headerStyle} onClick={() => setIsExpanded(!isExpanded)}>
        <h3 style={titleStyle}>🔢 КОЛИЧЕСТВО</h3>
        <span style={{ color: '#c41e3a', fontSize: '11px' }}>{isExpanded ? '▼' : '▶'}</span>
      </div>

      {isExpanded && (
        <>
          <input
            type="range"
            min="5"
            max={totalGroups}
            step="5"
            defaultValue={50}
            style={sliderStyle}
            disabled
          />

          <div style={valuesStyle}>
            <span>5</span>
            <span>{totalGroups}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CountFilterPanel;