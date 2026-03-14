import React, { useState } from 'react';

const SearchDialog = ({ isOpen, onClose, onGroupSelect, groups }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  if (!isOpen) return null;

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.length > 1) {
      const results = groups.filter(group => 
        group.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results.slice(0, 5)); // показываем только первые 5
    } else {
      setSearchResults([]);
    }
  };

  const dialogStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000
  };

  const contentStyle = {
    background: 'white',
    padding: '30px 25px',  // одинаковые отступы слева и справа
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(196, 30, 58, 0.3)',
    maxWidth: '400px',
    width: '90%',
    color: '#333',
    border: '2px solid #c41e3a',
    textAlign: 'center'
    };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '20px 0 20px 0',  // оставляем только вертикальные отступы
    border: '2px solid #ddd',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.2s',
    backgroundColor: 'white',
    color: '#333',
    boxSizing: 'border-box'  // чтобы padding не увеличивал ширину
  };

  const resultItemStyle = {
    padding: '10px',
    margin: '5px 0',
    background: '#f5f5f5',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    border: '1px solid transparent'
  };

  return (
    <div style={dialogStyle} onClick={onClose}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ 
          color: '#c41e3a', 
          margin: '0 0 20px 0',
          fontSize: '24px'
        }}>
          ПОИСК ГРУПП
        </h2>
        
        <input
          type="text"
          placeholder="Введите название группы..."
          value={searchTerm}
          onChange={handleSearch}
          style={inputStyle}
          onFocus={(e) => e.target.style.border = '2px solid #c41e3a'}
          onBlur={(e) => e.target.style.border = '2px solid #ddd'}
          autoFocus
        />
        
        {searchResults.length > 0 && (
          <div style={{ marginTop: '10px' }}>
            {searchResults.map(group => (
              <div
                key={group.id}
                style={resultItemStyle}
                onClick={() => {
                  onGroupSelect(group);
                  onClose();
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e0e0e0';
                  e.currentTarget.style.border = '1px solid #c41e3a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f5f5f5';
                  e.currentTarget.style.border = '1px solid transparent';
                }}
              >
                <div style={{ fontWeight: 'bold', color: '#333' }}>{group.name}</div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  {group.year} • {group.country} • {group.genre}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {searchTerm.length > 1 && searchResults.length === 0 && (
          <p style={{ color: '#666', fontStyle: 'italic' }}>
            Ничего не найдено
          </p>
        )}
        
        <button
          onClick={onClose}
          style={{
            background: '#f0f0f0',
            color: '#666',
            border: 'none',
            padding: '10px 30px',
            borderRadius: '30px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '20px',
            boxShadow: '0 5px 0 #ddd',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#e0e0e0';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#f0f0f0';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ЗАКРЫТЬ
        </button>
      </div>
    </div>
  );
};

export default SearchDialog;