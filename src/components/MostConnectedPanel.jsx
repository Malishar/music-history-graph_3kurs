import React, { useState, useEffect } from 'react';

const MostConnectedPanel = ({ isOpen, onClose, graphData, onFindMostConnected }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      // Небольшая задержка для красоты
      setTimeout(() => {
        const mostConnected = onFindMostConnected();
        setResult(mostConnected);
        setLoading(false);
        setImgError(false);
      }, 500);
    }
  }, [isOpen, onFindMostConnected]);

  if (!isOpen) return null;

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
    padding: '30px 35px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(196, 30, 58, 0.3)',
    maxWidth: '450px',
    width: '90%',
    color: '#333',
    border: '2px solid #c41e3a',
    textAlign: 'center'
  };

  // Находим группу с фото
  const getGroupImage = () => {
    if (!result?.name) return null;
    const band = graphData.nodes.find(node => node.name === result.name);
    return band?.image;
  };

  const groupImage = getGroupImage();
  const initial = result?.name?.charAt(0).toUpperCase() || '?';

  if (loading) {
    return (
      <div style={dialogStyle} onClick={onClose}>
        <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
          <h2 style={{ color: '#c41e3a', marginBottom: '20px' }}>🔗 САМАЯ СВЯЗАННАЯ ГРУППА</h2>
          <div style={{ padding: '30px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              margin: '0 auto',
              border: '3px solid #c41e3a',
              borderTopColor: 'transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
            <style>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
            <p style={{ marginTop: '20px', color: '#666' }}>Анализируем граф...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={dialogStyle} onClick={onClose}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ 
          color: '#c41e3a', 
          margin: '0 0 20px 0',
          fontSize: '22px',
          fontWeight: 'bold'
        }}>
          🔗 САМАЯ СВЯЗАННАЯ ГРУППА
        </h2>

        {result ? (
          <>
            {/* Фото группы */}
            <div style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              margin: '0 auto 20px',
              overflow: 'hidden',
              backgroundColor: '#f0f0f0',
              border: '4px solid #c41e3a',
              boxShadow: '0 10px 20px rgba(196, 30, 58, 0.3)'
            }}>
              {!imgError && groupImage ? (
                <img 
                  src={groupImage}
                  alt={result.name}
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
                  fontSize: '60px'
                }}>
                  {initial}
                </div>
              )}
            </div>

            {/* Название группы */}
            <h3 style={{
              fontSize: '28px',
              margin: '0 0 10px 0',
              color: '#333',
              fontWeight: 'bold'
            }}>
              {result.name}
            </h3>

            {/* Количество связей */}
            <div style={{
              background: '#f5f5f5',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px'
            }}>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>
                Количество связей
              </div>
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#c41e3a' }}>
                {result.count}
              </div>
              <div style={{ fontSize: '12px', color: '#888', marginTop: '5px' }}>
                влияний, совместных эпох, жанров и участников
              </div>
            </div>

            {/* Дополнительная информация о группе */}
            {(() => {
              const band = graphData.nodes.find(node => node.name === result.name);
              if (!band) return null;
              
              return (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  marginBottom: '20px',
                  fontSize: '14px'
                }}>
                  <div style={{ background: '#f9f9f9', padding: '8px', borderRadius: '5px' }}>
                    <div style={{ color: '#888' }}>Страна</div>
                    <div style={{ fontWeight: 'bold' }}>{band.country}</div>
                  </div>
                  <div style={{ background: '#f9f9f9', padding: '8px', borderRadius: '5px' }}>
                    <div style={{ color: '#888' }}>Год</div>
                    <div style={{ fontWeight: 'bold' }}>{band.year}</div>
                  </div>
                  <div style={{ 
                    gridColumn: 'span 2', 
                    background: '#f9f9f9', 
                    padding: '8px', 
                    borderRadius: '5px' 
                  }}>
                    <div style={{ color: '#888' }}>Жанр</div>
                    <div style={{ fontWeight: 'bold' }}>{band.genre}</div>
                  </div>
                </div>
              );
            })()}

            {/* Пояснение */}
            <p style={{
              fontSize: '13px',
              color: '#666',
              fontStyle: 'italic',
              marginBottom: '20px',
              padding: '0 10px'
            }}>
              Эта группа имеет наибольшее количество связей с другими группами в графе
            </p>
          </>
        ) : (
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Не удалось найти самую связанную группу
          </p>
        )}

        <button
          onClick={onClose}
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
            width: '100%'
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
          ЗАКРЫТЬ
        </button>
      </div>
    </div>
  );
};

export default MostConnectedPanel;