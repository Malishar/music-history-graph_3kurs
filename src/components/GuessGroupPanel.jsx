import React, { useState, useEffect } from 'react';

const GuessGroupPanel = ({ isOpen, onClose, graphData }) => {
  const [currentGroup, setCurrentGroup] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showResult, setShowResult] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Выбираем случайную группу и варианты ответов
  const pickNewQuestion = () => {
    if (!graphData.nodes.length) return;

    // Выбираем случайную группу
    const randomIndex = Math.floor(Math.random() * graphData.nodes.length);
    const group = graphData.nodes[randomIndex];
    
    // Выбираем 3 случайные другие группы для вариантов
    const otherGroups = graphData.nodes
      .filter(g => g.id !== group.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(g => g.name);
    
    // Перемешиваем варианты (правильный + 3 неправильных)
    const allOptions = [group.name, ...otherGroups].sort(() => Math.random() - 0.5);
    
    setCurrentGroup(group);
    setOptions(allOptions);
    setSelectedAnswer(null);
    setImgError(false);
  };

  // Запускаем игру при открытии
  useEffect(() => {
    if (isOpen && graphData.nodes.length) {
      setScore({ correct: 0, total: 0 });
      pickNewQuestion();
    }
  }, [isOpen, graphData]);

  const handleAnswer = (answer) => {
    if (selectedAnswer) return; // уже ответили
    
    setSelectedAnswer(answer);
    const isCorrect = answer === currentGroup.name;
    
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    pickNewQuestion();
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
    maxWidth: '500px',
    width: '90%',
    color: '#333',
    border: '2px solid #c41e3a',
    textAlign: 'center'
  };

  const optionStyle = (isSelected, isCorrect) => ({
    padding: '15px',
    margin: '10px 0',
    background: isSelected 
      ? (isCorrect ? '#4ecdc4' : '#c41e3a') 
      : '#f5f5f5',
    color: isSelected ? 'white' : '#333',
    borderRadius: '8px',
    cursor: selectedAnswer ? 'default' : 'pointer',
    transition: 'all 0.2s',
    border: '1px solid transparent'
  });

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

  return (
    <div style={dialogStyle} onClick={onClose}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <div style={scoreStyle}>
          {score.correct} / {score.total}
        </div>

        <h2 style={{ 
          color: '#c41e3a', 
          margin: '0 0 20px 0',
          fontSize: '24px'
        }}>
          🎸 УГАДАЙ ГРУППУ ПО ФОТО
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
                  alt="Угадай группу"
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

            {/* Варианты ответов */}
            <div style={{ marginTop: '20px' }}>
              {options.map((option, index) => {
                const isCorrect = option === currentGroup.name;
                return (
                  <div
                    key={index}
                    style={optionStyle(selectedAnswer === option, isCorrect)}
                    onClick={() => !selectedAnswer && handleAnswer(option)}
                    onMouseEnter={(e) => {
                      if (!selectedAnswer) {
                        e.currentTarget.style.background = '#e0e0e0';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!selectedAnswer) {
                        e.currentTarget.style.background = '#f5f5f5';
                      }
                    }}
                  >
                    {option}
                    {selectedAnswer === option && isCorrect && ' ✓'}
                    {selectedAnswer === option && !isCorrect && ' ✗'}
                  </div>
                );
              })}
            </div>

            {/* Результат и кнопка "Далее" */}
            {showResult && (
              <div style={{ marginTop: '20px' }}>
                <p style={{ 
                  color: selectedAnswer === currentGroup.name ? '#4ecdc4' : '#c41e3a',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '15px'
                }}>
                  {selectedAnswer === currentGroup.name 
                    ? '✅ Правильно!' 
                    : `❌ Неправильно! Это ${currentGroup.name}`}
                </p>
                
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
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = '#a01830';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = '#c41e3a';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  СЛЕДУЮЩАЯ ГРУППА →
                </button>
              </div>
            )}
          </>
        )}

        {!currentGroup && (
          <p style={{ color: '#666' }}>Загрузка...</p>
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

export default GuessGroupPanel;