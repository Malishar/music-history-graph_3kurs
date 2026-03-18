import React, { useState } from 'react';

const FilterPanel = ({ activeFilters, onFilterChange, onClearAll }) => {
  const [isExpanded, setIsExpanded] = useState(true); // добавить состояние

  const filterTypes = [
    { id: 'influence', label: 'Влияние', color: '#ff9ff3' },
    { id: 'same_era', label: 'Одна эпоха', color: '#feca57' },
    { id: 'same_genre', label: 'Один жанр', color: '#48dbfb' },
    { id: 'members', label: 'Общие участники', color: '#9b59b6' }
  ];

  return (
    <div style={{
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      zIndex: 1000,
      minWidth: '200px',
      border: '2px solid #c41e3a'
    }}>
      {/* Заголовок с кнопкой сворачивания */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: isExpanded ? '15px' : '0',
          cursor: 'pointer',
          borderBottom: isExpanded ? '2px solid #c41e3a' : 'none',
          paddingBottom: isExpanded ? '5px' : '0'
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 style={{ 
          margin: 0, 
          fontSize: '16px',
          color: '#c41e3a',
          fontWeight: 'bold'
        }}>
          ФИЛЬТРЫ СВЯЗЕЙ
        </h3>
        <span style={{ color: '#c41e3a' }}>{isExpanded ? '▼' : '▶'}</span>
      </div>

      {isExpanded && (
        <>
          {filterTypes.map(filter => (
            <label key={filter.id} style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
              cursor: 'pointer',
              fontSize: '14px',
              padding: '3px 0'
            }}>
              <input
                type="checkbox"
                checked={activeFilters[filter.id]}
                onChange={(e) => onFilterChange(filter.id, e.target.checked)}
                style={{
                  marginRight: '12px',
                  accentColor: filter.color,
                  width: '16px',
                  height: '16px',
                  cursor: 'pointer'
                }}
              />
              <span style={{ 
                color: '#333',
                fontWeight: activeFilters[filter.id] ? 'bold' : 'normal'
              }}>
                {filter.label}
              </span>
            </label>
          ))}
          
          <div style={{
            marginTop: '15px',
            paddingTop: '10px',
            borderTop: '1px solid #eee',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px'
          }}>
            <button 
              onClick={() => {
                Object.keys(activeFilters).forEach(key => onFilterChange(key, true));
              }}
              style={{
                background: '#c41e3a',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '8px 12px',
                fontSize: '13px',
                cursor: 'pointer',
                flex: 1,
                fontWeight: 'bold'
              }}
            >
              ВСЕ
            </button>
            <button 
              onClick={onClearAll}
              style={{
                background: '#666',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '8px 12px',
                fontSize: '13px',
                cursor: 'pointer',
                flex: 1,
                fontWeight: 'bold'
              }}
            >
              СБРОС
            </button>
          </div>
          
          <div style={{
            marginTop: '10px',
            fontSize: '12px',
            color: '#666',
            textAlign: 'center'
          }}>
            Активно: {Object.values(activeFilters).filter(Boolean).length} из 4
          </div>
        </>
      )}
    </div>
  );
};

export default FilterPanel;