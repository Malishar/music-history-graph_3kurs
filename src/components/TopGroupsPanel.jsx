import React, { useState, useEffect } from 'react';

const TopGroupsPanel = ({ isOpen, onClose, graphData, onGroupSelect }) => {
  const [topGroups, setTopGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('score'); // 'score' или 'name'

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      // Небольшая задержка для красоты
      setTimeout(() => {
        const calculated = calculateTopGroups();
        setTopGroups(calculated);
        setLoading(false);
      }, 500);
    }
  }, [isOpen, graphData]);

  // Алгоритм расчета топа (Вариант 2 с весами)
  const calculateTopGroups = () => {
    const weightMap = {
      'influence': 3,  // влияние
      'same_genre': 2, // один жанр
      'same_era': 1,   // одна эпоха
      'members': 2     // общие участники
    };
    
    const scores = {};
    
    graphData.nodes.forEach(node => {
      scores[node.id] = 0;
    });
    
    graphData.links.forEach(link => {
      const weight = weightMap[link.type] || 1;
      scores[link.source] = (scores[link.source] || 0) + weight;
      scores[link.target] = (scores[link.target] || 0) + weight;
    });
    
    // Нормализуем баллы к шкале 0-10
    const maxScore = Math.max(...Object.values(scores));
    
    return graphData.nodes
      .map(node => ({
        id: node.id,
        name: node.name,
        score: maxScore > 0 ? Number(((scores[node.id] / maxScore) * 10).toFixed(2)) : 0,
        connections: scores[node.id],
        image: node.image,
        year: node.year,
        country: node.country,
        genre: node.genre
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  };

  const handleSort = () => {
    if (sortBy === 'score') {
      setSortBy('name');
      setTopGroups([...topGroups].sort((a, b) => a.name.localeCompare(b.name)));
    } else {
      setSortBy('score');
      setTopGroups([...topGroups].sort((a, b) => b.score - a.score));
    }
  };

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
    padding: '35px 40px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(196, 30, 58, 0.3)',
    maxWidth: '700px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    color: '#333',
    border: '2px solid #c41e3a'
  };

  const medalColors = ['#FFD700', '#C0C0C0', '#CD7F32'];

  const GroupRow = ({ group, index }) => {
    const [imgError, setImgError] = useState(false);
    const medal = index < 3 ? medalColors[index] : null;

    return (
      <div
        onClick={() => {
          onGroupSelect(group);
          onClose();
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px 15px',
          marginBottom: '8px',
          background: index % 2 === 0 ? '#f9f9f9' : 'white',
          borderRadius: '10px',
          cursor: 'pointer',
          transition: 'all 0.2s',
          border: '1px solid transparent'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#f0f0f0';
          e.currentTarget.style.border = '1px solid #c41e3a';
          e.currentTarget.style.transform = 'scale(1.01)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = index % 2 === 0 ? '#f9f9f9' : 'white';
          e.currentTarget.style.border = '1px solid transparent';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        {/* Место и медаль */}
        <div style={{ width: '50px', textAlign: 'center', fontWeight: 'bold' }}>
          {medal ? (
            <span style={{ fontSize: '24px' }}>{index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}</span>
          ) : (
            <span style={{ color: '#999' }}>#{index + 1}</span>
          )}
        </div>

        {/* Фото группы */}
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginRight: '15px',
          border: '2px solid #c41e3a'
        }}>
          {!imgError && group.image ? (
            <img 
              src={group.image}
              alt={group.name}
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
              fontSize: '20px'
            }}>
              {group.name.charAt(0)}
            </div>
          )}
        </div>

        {/* Информация о группе */}
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#333' }}>
            {group.name}
          </div>
          <div style={{ fontSize: '12px', color: '#666' }}>
            {group.year} • {group.country} • {group.genre}
          </div>
        </div>

        {/* Рейтинг */}
        <div style={{
          background: '#f0f0f0',
          padding: '8px 15px',
          borderRadius: '20px',
          fontWeight: 'bold',
          color: '#c41e3a',
          fontSize: '18px'
        }}>
          {group.score}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div style={dialogStyle} onClick={onClose}>
        <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
          <h2 style={{ color: '#c41e3a', marginBottom: '20px', textAlign: 'center' }}>
            🏆 ТОП-10 ГРУПП
          </h2>
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <div style={{
              width: '50px',
              height: '50px',
              margin: '0 auto 20px',
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
            <p style={{ color: '#666' }}>Вычисляем рейтинг групп...</p>
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
          margin: '0 0 15px 0',
          fontSize: '28px',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          🏆 ТОП-10 ГРУПП
        </h2>

        <p style={{
          textAlign: 'center',
          color: '#666',
          fontSize: '13px',
          marginBottom: '20px',
          fontStyle: 'italic'
        }}>
          Рейтинг основан на количестве и важности связей с другими группами
        </p>

        {/* Кнопка сортировки */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
          <button
            onClick={handleSort}
            style={{
              background: 'none',
              border: '1px solid #ddd',
              padding: '5px 10px',
              borderRadius: '15px',
              fontSize: '12px',
              color: '#666',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            {sortBy === 'score' ? '📊 По рейтингу' : '🔤 По алфавиту'}
            <span>↕️</span>
          </button>
        </div>

        {/* Список групп */}
        <div>
          {topGroups.map((group, index) => (
            <GroupRow key={group.id} group={group} index={index} />
          ))}
        </div>

        {/* Пояснение */}
        <div style={{
          marginTop: '20px',
          padding: '15px',
          background: '#f5f5f5',
          borderRadius: '8px',
          fontSize: '12px',
          color: '#666'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>⚖️ Как считается рейтинг:</div>
          <div>• Влияние (influence) — 3 балла</div>
          <div>• Общие участники (members) — 2 балла</div>
          <div>• Один жанр (same_genre) — 2 балла</div>
          <div>• Одна эпоха (same_era) — 1 балл</div>
          <div style={{ marginTop: '5px' }}>Итоговый балл нормализован к шкале 0-10</div>
        </div>

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
            marginTop: '20px',
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

export default TopGroupsPanel;