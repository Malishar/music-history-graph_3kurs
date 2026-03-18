import React, { useState, useEffect } from 'react';
import { bandsData } from '../data/bandsData';

const AlbumTimelineGame = ({ isOpen, onClose, graphData }) => {
  const [currentBand, setCurrentBand] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [userOrder, setUserOrder] = useState([]);
  const [correctOrder, setCorrectOrder] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [message, setMessage] = useState('');
  const [imgErrors, setImgErrors] = useState({});

  // Выбираем случайную группу с >=3 альбомами
  const pickRandomBand = () => {
    const bandsWithAlbums = graphData.nodes.filter(node => 
      bandsData[node.id]?.albums?.length >= 3
    );

    if (bandsWithAlbums.length === 0) return;

    const randomBand = bandsWithAlbums[Math.floor(Math.random() * bandsWithAlbums.length)];
    const bandAlbums = bandsData[randomBand.id].albums;
    
    // Правильный порядок по годам
    const sorted = [...bandAlbums].sort((a, b) => a.year - b.year);
    
    // Перемешиваем для игры
    const shuffled = [...bandAlbums].sort(() => Math.random() - 0.5);
    
    setCurrentBand(randomBand);
    setAlbums(shuffled);
    setCorrectOrder(sorted.map(a => a.name));
    setUserOrder([]);
    setShowResult(false);
    setMessage('');
    setImgErrors({});
  };

  useEffect(() => {
    if (isOpen && graphData.nodes.length) {
      setScore({ correct: 0, total: 0 });
      pickRandomBand();
    }
  }, [isOpen, graphData]);

  const handleAlbumClick = (album) => {
    if (showResult) return; // нельзя кликать после проверки
    if (userOrder.includes(album.name)) return; // уже выбрано
    
    setUserOrder([...userOrder, album.name]);
  };

  // Отмена последнего шага
  const handleUndo = () => {
    if (showResult || userOrder.length === 0) return;
    const newUserOrder = [...userOrder];
    newUserOrder.pop();
    setUserOrder(newUserOrder);
  };

  // Сброс всего порядка
  const handleReset = () => {
    if (showResult) return;
    setUserOrder([]);
  };

  // Перемешать альбомы заново
  const handleShuffle = () => {
    if (showResult) return;
    const shuffled = [...albums].sort(() => Math.random() - 0.5);
    setAlbums(shuffled);
    setUserOrder([]);
  };

  const handleCheck = () => {
    if (userOrder.length !== albums.length) {
      setMessage('❌ Расставьте все альбомы!');
      return;
    }

    let isCorrect = true;
    for (let i = 0; i < userOrder.length; i++) {
      if (userOrder[i] !== correctOrder[i]) {
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
      setMessage('✅ ПРАВИЛЬНО!');
      setScore(prev => ({
        correct: prev.correct + 1,
        total: prev.total + 1
      }));
    } else {
      setMessage('❌ Неправильно!');
      setScore(prev => ({
        ...prev,
        total: prev.total + 1
      }));
    }
    setShowResult(true);
  };

  const handleNext = () => {
    pickRandomBand();
  };

  const handleImageError = (albumName) => {
    setImgErrors(prev => ({ ...prev, [albumName]: true }));
  };

  if (!isOpen) return null;

  const dialogStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000
  };

  const contentStyle = {
    background: 'white',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(196, 30, 58, 0.3)',
    maxWidth: '800px',
    width: '95%',
    maxHeight: '80vh',
    overflowY: 'auto',
    color: '#333',
    border: '2px solid #c41e3a'
  };

  const scoreStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: '#c41e3a',
    color: 'white',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 'bold'
  };

  // Компонент обложки альбома
  const AlbumCover = ({ album, isSelected, isCorrect, showResult, onClick }) => {
    const [imgError, setImgError] = useState(false);
    
    let borderColor = 'transparent';
    if (showResult && isCorrect) borderColor = '#4ecdc4';
    else if (showResult && isSelected && !isCorrect) borderColor = '#c41e3a';
    else if (isSelected) borderColor = '#c41e3a';

    return (
      <div
        onClick={onClick}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          border: `3px solid ${borderColor}`,
          cursor: (showResult || isSelected) ? 'default' : 'pointer',
          transition: 'all 0.2s',
          opacity: isSelected ? 0.9 : 1,
          transform: isSelected ? 'scale(1.02)' : 'scale(1)',
          margin: '0 auto'
        }}
        onMouseEnter={(e) => {
          if (!showResult && !isSelected) {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
          }
        }}
        onMouseLeave={(e) => {
          if (!showResult && !isSelected) {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
          }
        }}
      >
        {!imgError && album.cover ? (
          <img 
            src={album.cover}
            alt={album.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
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
            fontSize: '12px',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '5px',
            boxSizing: 'border-box'
          }}>
            {album.name}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={dialogStyle} onClick={onClose}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <div style={scoreStyle}>
          {score.correct} / {score.total}
        </div>

        <h2 style={{ 
          color: '#c41e3a', 
          margin: '0 0 20px 0',
          fontSize: '24px',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          ⏳ РАССТАВЬ АЛЬБОМЫ ПО ПОРЯДКУ
        </h2>

        {currentBand && (
          <>
            {/* Информация о группе */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '25px',
              padding: '15px',
              background: '#f5f5f5',
              borderRadius: '10px'
            }}>
              <img 
                src={currentBand.image}
                alt={currentBand.name}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #c41e3a'
                }}
                onError={(e) => e.target.style.display = 'none'}
              />
              <div>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
                  {currentBand.name}
                </div>
                <div style={{ fontSize: '14px', color: '#666' }}>
                  Расставьте альбомы в хронологическом порядке
                </div>
              </div>
            </div>

            {/* Две колонки */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginBottom: '20px'
            }}>
              {/* Доступные альбомы */}
              <div>
                <h3 style={{ color: '#c41e3a', fontSize: '16px', marginBottom: '15px', textAlign: 'center' }}>
                  Альбомы
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                  gap: '15px',
                  minHeight: '300px',
                  background: '#f9f9f9',
                  padding: '15px',
                  borderRadius: '10px'
                }}>
                  {albums
                    .filter(album => !userOrder.includes(album.name))
                    .map(album => (
                      <AlbumCover
                        key={album.name}
                        album={album}
                        isSelected={false}
                        isCorrect={false}
                        showResult={false}
                        onClick={() => handleAlbumClick(album)}
                      />
                    ))}
                </div>
              </div>

              {/* Выбранные альбомы */}
              <div>
                <h3 style={{ color: '#c41e3a', fontSize: '16px', marginBottom: '15px', textAlign: 'center' }}>
                  Ваш порядок
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                  gap: '15px',
                  minHeight: '300px',
                  background: '#f9f9f9',
                  padding: '15px',
                  borderRadius: '10px'
                }}>
                  {userOrder.map((albumName, index) => {
                    const album = albums.find(a => a.name === albumName);
                    const isCorrect = showResult && correctOrder[index] === albumName;
                    return (
                      <div key={albumName} style={{ position: 'relative' }}>
                        <AlbumCover
                          album={album}
                          isSelected={true}
                          isCorrect={isCorrect}
                          showResult={showResult}
                          onClick={() => {}}
                        />
                        <div style={{
                          position: 'absolute',
                          top: '-5px',
                          left: '-5px',
                          background: '#c41e3a',
                          color: 'white',
                          borderRadius: '50%',
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}>
                          {index + 1}
                        </div>
                      </div>
                    );
                  })}
                  {userOrder.length === 0 && (
                    <div style={{ 
                      gridColumn: '1/-1', 
                      color: '#999', 
                      fontStyle: 'italic', 
                      padding: '20px',
                      textAlign: 'center'
                    }}>
                      Кликайте на обложки слева
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Сообщение */}
            {message && (
              <div style={{
                padding: '10px',
                marginBottom: '15px',
                background: message.includes('✅') ? '#e8f5e9' : '#ffebee',
                color: message.includes('✅') ? '#2e7d32' : '#c62828',
                borderRadius: '5px',
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                {message}
              </div>
            )}

            {/* Кнопки */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {!showResult ? (
                <>
                  <button
                    onClick={handleCheck}
                    style={{
                      background: '#c41e3a',
                      color: 'white',
                      border: 'none',
                      padding: '12px 20px',
                      borderRadius: '30px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      boxShadow: '0 5px 0 #8b0000',
                      transition: 'all 0.2s',
                      flex: '1 1 auto',
                      minWidth: '120px'
                    }}
                  >
                    ПРОВЕРИТЬ
                  </button>
                  <button
                    onClick={handleUndo}
                    disabled={userOrder.length === 0}
                    style={{
                      background: userOrder.length === 0 ? '#e0e0e0' : '#f0f0f0',
                      color: userOrder.length === 0 ? '#aaa' : '#666',
                      border: 'none',
                      padding: '12px 20px',
                      borderRadius: '30px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: userOrder.length === 0 ? 'default' : 'pointer',
                      boxShadow: userOrder.length === 0 ? 'none' : '0 5px 0 #ddd',
                      transition: 'all 0.2s',
                      flex: '1 1 auto',
                      minWidth: '120px'
                    }}
                  >
                    ↩️ ОТМЕНИТЬ
                  </button>
                  <button
                    onClick={handleReset}
                    disabled={userOrder.length === 0}
                    style={{
                      background: userOrder.length === 0 ? '#e0e0e0' : '#f0f0f0',
                      color: userOrder.length === 0 ? '#aaa' : '#666',
                      border: 'none',
                      padding: '12px 20px',
                      borderRadius: '30px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: userOrder.length === 0 ? 'default' : 'pointer',
                      boxShadow: userOrder.length === 0 ? 'none' : '0 5px 0 #ddd',
                      transition: 'all 0.2s',
                      flex: '1 1 auto',
                      minWidth: '120px'
                    }}
                  >
                    🗑️ СБРОС
                  </button>
                  <button
                    onClick={handleShuffle}
                    style={{
                      background: '#f0f0f0',
                      color: '#666',
                      border: 'none',
                      padding: '12px 20px',
                      borderRadius: '30px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      boxShadow: '0 5px 0 #ddd',
                      transition: 'all 0.2s',
                      flex: '1 1 auto',
                      minWidth: '120px'
                    }}
                  >
                    ПЕРЕМЕШАТЬ
                  </button>
                </>
              ) : (
                <button
                  onClick={handleNext}
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
                >
                  СЛЕДУЮЩАЯ ГРУППА →
                </button>
              )}
            </div>
          </>
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
            transition: 'all 0.2s',
            width: '100%'
          }}
        >
          ЗАКРЫТЬ
        </button>
      </div>
    </div>
  );
};

export default AlbumTimelineGame;