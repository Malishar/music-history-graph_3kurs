import React, { useState } from 'react';

const CountryFilterPanel = ({ activeCountries, onCountryChange, onClearAll, graphData }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const countries = [
    // Европа
    { id: 'UK', label: 'Великобритания', color: '#ff6b6b' },
    { id: 'USA', label: 'США', color: '#4ecdc4' },
    { id: 'Germany', label: 'Германия', color: '#ff9ff3' },
    { id: 'Sweden', label: 'Швеция', color: '#feca57' },
    { id: 'Norway', label: 'Норвегия', color: '#1dd1a1' },
    { id: 'Finland', label: 'Финляндия', color: '#5f27cd' },
    { id: 'France', label: 'Франция', color: '#ff6b6b' },
    { id: 'Italy', label: 'Италия', color: '#00d2d3' },
    { id: 'Spain', label: 'Испания', color: '#ff9f43' },
    { id: 'Netherlands', label: 'Нидерланды', color: '#f368e0' },
    { id: 'Belgium', label: 'Бельгия', color: '#0abde3' },
    { id: 'Switzerland', label: 'Швейцария', color: '#feca57' },
    { id: 'Austria', label: 'Австрия', color: '#ee5a24' },
    { id: 'Poland', label: 'Польша', color: '#ff3f34' },
    { id: 'Czech Republic', label: 'Чехия', color: '#1289A7' },
    { id: 'Greece', label: 'Греция', color: '#006266' },
    { id: 'Portugal', label: 'Португалия', color: '#ED4C67' },
    { id: 'Denmark', label: 'Дания', color: '#ffb8b8' },
    { id: 'Ireland', label: 'Ирландия', color: '#A3CB38' },
    { id: 'Russia', label: 'Россия', color: '#c44569' },
    { id: 'Georgia', label: 'Грузия', color: '#786fa6' },
    
    // Америка
    { id: 'Canada', label: 'Канада', color: '#12CBC4' },
    { id: 'Brazil', label: 'Бразилия', color: '#ffda79' },
    
    // Азия
    { id: 'Japan', label: 'Япония', color: '#ffcccc' },
    
    // Океания
    { id: 'Australia', label: 'Австралия', color: '#45b7d1' },
    { id: 'New Zealand', label: 'Новая Зеландия', color: '#b8e994' },
    
    // Африка
    { id: 'South Africa', label: 'ЮАР', color: '#f6e58d' },
    
    // Специальные случаи
    { id: 'USA/UK', label: 'США/Великобритания', color: '#4ecdc4' },
    { id: 'UK/USA', label: 'Великобритания/США', color: '#ff6b6b' },
    { id: 'International', label: 'Интернациональные', color: '#95a5a6' }
  ];

  // Сортировка по алфавиту
  const sortedCountries = [...countries].sort((a, b) => 
    a.label.localeCompare(b.label)
  );

  const panelStyle = {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    background: 'white',
    padding: '12px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    zIndex: 1000,
    width: '220px',
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
    fontSize: '14px',
    color: '#c41e3a',
    fontWeight: 'bold'
  };

  const countriesContainerStyle = {
    maxHeight: '200px',
    overflowY: 'auto',
    marginBottom: '10px',
    paddingRight: '4px'
  };

  const countryItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '4px',
    padding: '5px',
    background: '#f5f5f5',
    borderRadius: '4px',
    fontSize: '12px',
    opacity: 0.7,
    cursor: 'not-allowed'
  };

  const colorDotStyle = (color) => ({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: color,
    marginRight: '6px',
    flexShrink: 0
  });

  const soonBadgeStyle = {
    marginLeft: 'auto',
    fontSize: '9px',
    color: '#999',
    fontStyle: 'italic',
    background: '#e0e0e0',
    padding: '2px 5px',
    borderRadius: '8px'
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '8px',
    marginBottom: '6px'
  };

  const buttonStyle = {
    border: 'none',
    borderRadius: '4px',
    padding: '6px 10px',
    fontSize: '12px',
    cursor: 'not-allowed',
    flex: 1,
    fontWeight: 'bold',
    opacity: 0.6
  };

  // Стили для скроллбара
  const scrollbarStyles = `
    .country-scroll::-webkit-scrollbar {
      width: 4px;
    }
    .country-scroll::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    .country-scroll::-webkit-scrollbar-thumb {
      background: #c41e3a;
      border-radius: 10px;
    }
    .country-scroll::-webkit-scrollbar-thumb:hover {
      background: #8b0000;
    }
  `;

  return (
    <div style={panelStyle}>
      <style>{scrollbarStyles}</style>
      
      <div style={headerStyle} onClick={() => setIsExpanded(!isExpanded)}>
        <h3 style={titleStyle}>🌍 ФИЛЬТР ПО СТРАНАМ</h3>
        <span style={{ color: '#c41e3a', fontSize: '12px' }}>{isExpanded ? '▼' : '▶'}</span>
      </div>

      {isExpanded && (
        <>
          <div style={countriesContainerStyle} className="country-scroll">
            {sortedCountries.map(country => (
              <div
                key={country.id}
                style={countryItemStyle}
              >
                <span style={colorDotStyle(country.color)} />
                <span style={{ flex: 1, color: '#333' }}>{country.label}</span>
                <span style={soonBadgeStyle}></span>
              </div>
            ))}
          </div>

          <div style={buttonContainerStyle}>
            <button style={{ ...buttonStyle, background: '#c41e3a', color: 'white' }} disabled>
              ВСЕ
            </button>
            <button style={{ ...buttonStyle, background: '#666', color: 'white' }} disabled>
              СБРОС
            </button>
          </div>

          <div style={{
            fontSize: '10px',
            color: '#999',
            textAlign: 'center',
            borderTop: '1px solid #eee',
            paddingTop: '6px',
            fontStyle: 'italic'
          }}>
          </div>
        </>
      )}
    </div>
  );
};

export default CountryFilterPanel;