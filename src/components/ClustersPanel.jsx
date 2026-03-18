import React, { useState } from 'react';

const ClustersPanel = ({ isOpen, onClose, graphData, onGroupSelect }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [viewMode, setViewMode] = useState('list');
  const [expandedGenres, setExpandedGenres] = useState({});

  if (!isOpen) return null;

  // Группируем группы по жанрам
  const clusters = {};
  graphData.nodes.forEach(node => {
    const genre = node.genre.split(' ')[0];
    if (!clusters[genre]) {
      clusters[genre] = [];
    }
    clusters[genre].push(node);
  });

  // Сортируем жанры по количеству групп
  const sortedGenres = Object.entries(clusters)
    .sort(([, groupsA], [, groupsB]) => groupsB.length - groupsA.length)
    .filter(([, groups]) => groups.length > 3);

  // Функция для раскрытия/сворачивания жанра
  const toggleGenre = (genre) => {
    setExpandedGenres(prev => ({
      ...prev,
      [genre]: !prev[genre]
    }));
  };

  // Компонент для отображения группы с фото
  const GroupCard = ({ group }) => {
    const [imgError, setImgError] = useState(false);
    const initial = group.name.charAt(0).toUpperCase();

    const handleClick = () => {
      onGroupSelect(group);
      onClose();
    };

    return (
      <div
        onClick={handleClick}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '12px',
          background: '#f9f9f9',
          borderRadius: '10px',
          border: '1px solid #e0e0e0',
          transition: 'all 0.2s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#f0f0f0';
          e.currentTarget.style.border = '1px solid #c41e3a';
          e.currentTarget.style.transform = 'scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#f9f9f9';
          e.currentTarget.style.border = '1px solid #e0e0e0';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: '#f0f0f0',
          border: '2px solid #c41e3a',
          marginBottom: '8px'
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
              fontSize: '24px'
            }}>
              {initial}
            </div>
          )}
        </div>
        <span style={{ 
          fontSize: '13px', 
          color: '#333', 
          fontWeight: '500',
          textAlign: 'center'
        }}>
          {group.name}
        </span>
        <span style={{ 
          fontSize: '11px', 
          color: '#666',
          marginTop: '4px'
        }}>
          {group.year}
        </span>
      </div>
    );
  };

  // Компонент для отображения группы в виде чипса (для режима списка)
  const GroupChip = ({ group }) => {
    const handleClick = () => {
      onGroupSelect(group);
      onClose();
    };

    return (
      <div
        onClick={handleClick}
        style={{
          padding: '8px 15px',
          background: '#f5f5f5',
          borderRadius: '30px',
          fontSize: '14px',
          color: '#333',
          border: '1px solid transparent',
          cursor: 'pointer',
          transition: 'all 0.2s',
          display: 'inline-block'
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
        {group.name}
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
    maxWidth: '800px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    color: '#333',
    border: '2px solid #c41e3a'
  };

  return (
    <div style={dialogStyle} onClick={onClose}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ 
          color: '#c41e3a', 
          margin: '0 0 10px 0',
          fontSize: '26px',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          🎸 ГРУППЫ ПО СТИЛЯМ
        </h2>

        <p style={{
          textAlign: 'center',
          color: '#666',
          marginBottom: '25px',
          fontSize: '14px'
        }}>
          Найдено {sortedGenres.length} музыкальных направлений
        </p>

        {/* Кнопки переключения режима */}
        <div style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '25px'
        }}>
          <button
            onClick={() => setViewMode('list')}
            style={{
              padding: '8px 20px',
              background: viewMode === 'list' ? '#c41e3a' : '#f0f0f0',
              color: viewMode === 'list' ? 'white' : '#666',
              border: 'none',
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            СПИСКОМ
          </button>
          <button
            onClick={() => setViewMode('grid')}
            style={{
              padding: '8px 20px',
              background: viewMode === 'grid' ? '#c41e3a' : '#f0f0f0',
              color: viewMode === 'grid' ? 'white' : '#666',
              border: 'none',
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            ИКОНКОЙ
          </button>
        </div>

        {viewMode === 'list' ? (
          // РЕЖИМ СПИСКА
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {sortedGenres.map(([genre, groups]) => {
              const isExpanded = expandedGenres[genre];
              const displayGroups = isExpanded ? groups : groups.slice(0, 10);
              
              return (
                <div
                  key={genre}
                  style={{
                    border: '2px solid #e0e0e0',
                    borderRadius: '10px',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    background: 'linear-gradient(135deg, #ff6b6b, #c41e3a)',
                    color: 'white',
                    padding: '15px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
                      {genre}
                    </span>
                    <span style={{
                      background: 'white',
                      color: '#c41e3a',
                      padding: '5px 15px',
                      borderRadius: '30px',
                      fontSize: '14px',
                      fontWeight: 'bold'
                    }}>
                      {groups.length} групп
                    </span>
                  </div>

                  <div style={{ padding: '15px' }}>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '10px',
                      marginBottom: groups.length > 10 && !isExpanded ? '15px' : '0'
                    }}>
                      {displayGroups.map(group => (
                        <GroupChip key={group.id} group={group} />
                      ))}
                    </div>
                    
                    {/* Кнопка "Показать все / Скрыть" */}
                    {groups.length > 10 && (
                      <button
                        onClick={() => toggleGenre(genre)}
                        style={{
                          background: 'none',
                          border: '2px solid #c41e3a',
                          color: '#c41e3a',
                          padding: '8px 20px',
                          borderRadius: '30px',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          marginTop: '10px',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#c41e3a';
                          e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'none';
                          e.target.style.color = '#c41e3a';
                        }}
                      >
                        {isExpanded ? ' СКРЫТЬ' : `ПОКАЗАТЬ ВСЕ (${groups.length - 10})`}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // РЕЖИМ ПЛИТКИ
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {sortedGenres.map(([genre, groups]) => {
              const isExpanded = expandedGenres[genre];
              const displayGroups = isExpanded ? groups : groups.slice(0, 8);
              
              return (
                <div key={genre}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '15px',
                    paddingBottom: '8px',
                    borderBottom: '2px solid #c41e3a'
                  }}>
                    <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
                      {genre}
                    </span>
                    <span style={{
                      background: '#c41e3a',
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '30px',
                      fontSize: '14px'
                    }}>
                      {groups.length}
                    </span>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                    gap: '15px'
                  }}>
                    {displayGroups.map(group => (
                      <GroupCard key={group.id} group={group} />
                    ))}
                  </div>

                  {/* Кнопка "Показать все / Скрыть" для плитки */}
                  {groups.length > 8 && (
                    <button
                      onClick={() => toggleGenre(genre)}
                      style={{
                        background: 'none',
                        border: '2px solid #c41e3a',
                        color: '#c41e3a',
                        padding: '8px 20px',
                        borderRadius: '30px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginTop: '15px',
                        width: '100%',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#c41e3a';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'none';
                        e.target.style.color = '#c41e3a';
                      }}
                    >
                      {isExpanded ? '👆 СКРЫТЬ' : `👇 ПОКАЗАТЬ ВСЕ (${groups.length - 8})`}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <button
          onClick={onClose}
          style={{
            background: '#f0f0f0',
            color: '#666',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '30px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '25px',
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

export default ClustersPanel;