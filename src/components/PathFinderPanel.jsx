import React, { useState } from 'react';

const PathFinderPanel = ({ isOpen, onClose, onFindPath, graphData }) => {
  const [startInput, setStartInput] = useState('');
  const [endInput, setEndInput] = useState('');
  const [suggestions, setSuggestions] = useState({ start: [], end: [] });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const allBandNames = graphData.nodes.map(node => node.name);

  // Поиск подсказок
  const handleInputChange = (value, field) => {
    if (field === 'start') {
      setStartInput(value);
    } else {
      setEndInput(value);
    }

    if (value.length > 1) {
      const filtered = allBandNames
        .filter(name => name.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5);
      setSuggestions(prev => ({ ...prev, [field]: filtered }));
    } else {
      setSuggestions(prev => ({ ...prev, [field]: [] }));
    }
  };

  const handleSuggestionClick = (suggestion, field) => {
    if (field === 'start') {
      setStartInput(suggestion);
    } else {
      setEndInput(suggestion);
    }
    setSuggestions(prev => ({ ...prev, [field]: [] }));
  };

  const handleFindClick = () => {
    if (!startInput.trim() || !endInput.trim()) {
      setError('Введите обе группы');
      return;
    }

    const path = onFindPath(startInput.trim(), endInput.trim());
    
    if (path) {
      setResult(path);
      setError(null);
    } else {
      setError('Путь не найден');
      setResult(null);
    }
  };

  // Компонент для отображения узла с фото
  const PathNode = ({ name }) => {
    const [imgError, setImgError] = useState(false);
    const band = graphData.nodes.find(node => node.name === name);
    const imagePath = band?.image;
    const initial = name.charAt(0).toUpperCase();

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        minWidth: '80px'
      }}>
        <div style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
          border: '3px solid #c41e3a',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          {!imgError && imagePath ? (
            <img 
              src={imagePath}
              alt={name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #ff6b6b, #c41e3a)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '28px'
            }}>
              {initial}
            </div>
          )}
        </div>
        <span style={{ 
          fontSize: '13px', 
          color: '#333', 
          textAlign: 'center',
          fontWeight: '500',
          maxWidth: '90px',
          wordWrap: 'break-word'
        }}>
          {name}
        </span>
      </div>
    );
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
    padding: '30px 25px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(196, 30, 58, 0.3)',
    maxWidth: '600px',  // сделали побольше
    width: '90%',
    color: '#333',
    border: '2px solid #c41e3a'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0 5px 0',
    border: '2px solid #ddd',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.2s',
    backgroundColor: 'white',
    color: '#333',
    boxSizing: 'border-box'
  };

  const suggestionStyle = {
    padding: '10px',
    margin: '5px 0',
    background: '#f5f5f5',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    border: '1px solid transparent',
    color: '#333',
    textAlign: 'left'
  };

  return (
    <div style={dialogStyle} onClick={onClose}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ 
          color: '#c41e3a', 
          margin: '0 0 25px 0',
          fontSize: '26px',
          fontWeight: 'bold'
        }}>
          КАК СВЯЗАНЫ ГРУППЫ?
        </h2>
        
        {/* Первая группа */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ 
            display: 'block', 
            textAlign: 'left', 
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '5px',
            fontSize: '14px'
          }}>
            Первая группа:
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Введите название..."
              value={startInput}
              onChange={(e) => handleInputChange(e.target.value, 'start')}
              style={inputStyle}
              onFocus={(e) => e.target.style.border = '2px solid #c41e3a'}
              onBlur={(e) => e.target.style.border = '2px solid #ddd'}
            />
            {suggestions.start.length > 0 && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: 'white',
                border: '2px solid #c41e3a',
                borderRadius: '8px',
                marginTop: '2px',
                zIndex: 1001,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}>
                {suggestions.start.map((s, i) => (
                  <div
                    key={i}
                    style={suggestionStyle}
                    onClick={() => handleSuggestionClick(s, 'start')}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#e0e0e0';
                      e.currentTarget.style.border = '1px solid #c41e3a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f5f5f5';
                      e.currentTarget.style.border = '1px solid transparent';
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Вторая группа */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            textAlign: 'left', 
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '5px',
            fontSize: '14px'
          }}>
            Вторая группа:
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Введите название..."
              value={endInput}
              onChange={(e) => handleInputChange(e.target.value, 'end')}
              style={inputStyle}
              onFocus={(e) => e.target.style.border = '2px solid #c41e3a'}
              onBlur={(e) => e.target.style.border = '2px solid #ddd'}
            />
            {suggestions.end.length > 0 && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: 'white',
                border: '2px solid #c41e3a',
                borderRadius: '8px',
                marginTop: '2px',
                zIndex: 1001,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}>
                {suggestions.end.map((s, i) => (
                  <div
                    key={i}
                    style={suggestionStyle}
                    onClick={() => handleSuggestionClick(s, 'end')}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#e0e0e0';
                      e.currentTarget.style.border = '1px solid #c41e3a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f5f5f5';
                      e.currentTarget.style.border = '1px solid transparent';
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Ошибка */}
        {error && (
          <div style={{
            backgroundColor: '#fee9e7',
            border: '2px solid #c41e3a',
            padding: '12px',
            marginBottom: '20px',
            borderRadius: '8px',
            color: '#333',
            fontWeight: '500'
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* Результат */}
        {result && (
          <div style={{
            backgroundColor: '#f9f9f9',
            border: '2px solid #c41e3a',
            padding: '20px',
            marginBottom: '20px',
            borderRadius: '8px'
          }}>
            <div style={{ 
              fontWeight: 'bold', 
              marginBottom: '15px', 
              color: '#c41e3a',
              fontSize: '18px',
              textAlign: 'center'
            }}>
              НАЙДЕННЫЙ ПУТЬ:
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px'
            }}>
              {result.map((name, index) => (
                <React.Fragment key={index}>
                  <PathNode name={name} />
                  {index < result.length - 1 && (
                    <span style={{ 
                      color: '#c41e3a', 
                      fontSize: '32px',
                      fontWeight: 'bold'
                    }}>→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Кнопки */}
        <div style={{ 
          display: 'flex', 
          gap: '15px', 
          justifyContent: 'center',
          marginTop: '20px'
        }}>
          <button
            onClick={handleFindClick}
            style={{
              background: '#c41e3a',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 5px 0 #8b0000',
              transition: 'all 0.2s',
              flex: 1
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#a01830';
              e.target.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#c41e3a';
              e.target.style.transform = 'scale(1)';
            }}
          >
            НАЙТИ ПУТЬ
          </button>
          
          <button
            onClick={() => {
              setStartInput('');
              setEndInput('');
              setResult(null);
              setError(null);
            }}
            style={{
              background: '#f0f0f0',
              color: '#666',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 5px 0 #ddd',
              transition: 'all 0.2s',
              flex: 1
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#e0e0e0';
              e.target.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#f0f0f0';
              e.target.style.transform = 'scale(1)';
            }}
          >
            СБРОСИТЬ
          </button>
        </div>

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
            transition: 'all 0.2s',
            width: '100%'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#e0e0e0';
            e.target.style.transform = 'scale(1.02)';
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

export default PathFinderPanel;