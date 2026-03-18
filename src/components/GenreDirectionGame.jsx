import React, { useState, useEffect } from 'react';
import { bandsData } from '../data/bandsData';

const GenreDirectionGame = ({ isOpen, onClose, graphData }) => {
  const [currentGroup, setCurrentGroup] = useState(null);
  const [genres, setGenres] = useState([]);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showResult, setShowResult] = useState(false);
  const [message, setMessage] = useState('');
  const [imgError, setImgError] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);

  // Выбираем случайную группу и два жанра
  const pickRandomGroup = () => {
    if (!graphData.nodes.length) return;

    // Выбираем случайную группу
    const randomIndex = Math.floor(Math.random() * graphData.nodes.length);
    const group = graphData.nodes[randomIndex];
    
    // Получаем основной жанр группы
    const groupGenre = group.genre.split(' ')[0];
    
    // Собираем все уникальные жанры
    const allGenres = [...new Set(graphData.nodes.map(node => 
      node.genre.split(' ')[0]
    ))].filter(g => g !== groupGenre);
    
    // Выбираем случайный жанр для сравнения
    const randomGenre = allGenres[Math.floor(Math.random() * allGenres.length)];
    
    // Перемешиваем, чтобы правильный ответ был то слева, то справа
    const genreOptions = Math.random() > 0.5 
      ? [groupGenre, randomGenre] 
      : [randomGenre, groupGenre];
    
    setCurrentGroup(group);
    setGenres(genreOptions);
    setImgError(false);
    setShowResult(false);
    setMessage('');
    setSwipeDirection(null);
  };

  useEffect(() => {
    if (isOpen && graphData.nodes.length) {
      setScore({ correct: 0, total: 0 });
      pickRandomGroup();
    }
  }, [isOpen, graphData]);

  const handleSwipe = (direction) => {
    if (showResult) return;
    
    setSwipeDirection(direction);
    const selectedGenre = direction === 'left' ? genres[0] : genres[1];
    const correctGenre = currentGroup.genre.split(' ')[0];
    
    const isCorrect = selectedGenre === correctGenre;
    
    if (isCorrect) {
      setMessage('✅ ПРАВИЛЬНО!');
      setScore(prev => ({
        correct: prev.correct + 1,
        total: prev.total + 1
      }));
    } else {
      setMessage(`❌ Неправильно! Это ${correctGenre}`);
      setScore(prev => ({
        ...prev,
        total: prev.total + 1
      }));
    }
    setShowResult(true);
  };

  const handleNext = () => {
    pickRandomGroup();
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
    maxWidth: '700px',
    width: '90%',
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

  const arrowButtonStyle = (direction) => ({
    flex: 1,
    padding: '40px 20px',
    fontSize: '48px',
    background: swipeDirection === direction 
      ? (message.includes('✅') ? '#4ecdc4' : '#c41e3a')
      : '#f0f0f0',
    color: swipeDirection === direction ? 'white' : '#666',
    border: 'none',
    borderRadius: '15px',
    cursor: showResult ? 'default' : 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    opacity: showResult && swipeDirection !== direction ? 0.5 : 1
  });

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
          🎸 В КАКУЮ СТОРОНУ?
        </h2>

        {currentGroup && (
          <>
            {/* Фото группы */}
            <div style={{
              width: '200px',
              height: '200px',
              borderRadius: '10px',
              margin: '0 auto 20px',
              overflow: 'hidden',
              backgroundColor: '#f0f0f0',
              border: '3px solid #c41e3a',
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
            }}>
              {!imgError && currentGroup.image ? (
                <img 
                  src={currentGroup.image}
                  alt={currentGroup.name}
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
                  fontSize: '60px',
                  fontWeight: 'bold'
                }}>
                  ?
                </div>
              )}
            </div>

            {/* Название группы */}
            <h3 style={{
              textAlign: 'center',
              fontSize: '24px',
              margin: '0 0 30px 0',
              color: '#333'
            }}>
              {currentGroup.name}
            </h3>

            {/* Стрелки для выбора */}
            <div style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '20px'
            }}>
              {/* Левая стрелка */}
              <button
                style={arrowButtonStyle('left')}
                onClick={() => !showResult && handleSwipe('left')}
                disabled={showResult}
              >
                <span>◀</span>
                <span style={{ fontSize: '18px' }}>{genres[0]}</span>
              </button>

              {/* Правая стрелка */}
              <button
                style={arrowButtonStyle('right')}
                onClick={() => !showResult && handleSwipe('right')}
                disabled={showResult}
              >
                <span style={{ fontSize: '18px' }}>{genres[1]}</span>
                <span>▶</span>
              </button>
            </div>

            {/* Сообщение */}
            {message && (
              <div style={{
                padding: '15px',
                marginBottom: '20px',
                background: message.includes('✅') ? '#e8f5e9' : '#ffebee',
                color: message.includes('✅') ? '#2e7d32' : '#c62828',
                borderRadius: '5px',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '16px'
              }}>
                {message}
              </div>
            )}

            {/* Кнопка "Далее" */}
            {showResult && (
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
                onMouseOver={(e) => {
                  e.target.style.background = '#a01830';
                  e.target.style.transform = 'scale(1.02)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#c41e3a';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                СЛЕДУЮЩАЯ ГРУППА →
              </button>
            )}
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

export default GenreDirectionGame;