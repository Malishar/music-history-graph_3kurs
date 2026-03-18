import React, { useState, useEffect } from 'react';
import { bandsData } from '../data/bandsData';

const TimelinePanel = ({ isOpen, onClose, graphData }) => {
  const [timelineData, setTimelineData] = useState([]);
  const [selectedDecade, setSelectedDecade] = useState('all');
  const [expandedAlbum, setExpandedAlbum] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    // Собираем все альбомы из всех групп
    const allAlbums = [];
    
    graphData.nodes.forEach(node => {
      const bandInfo = bandsData[node.id];
      if (bandInfo?.albums) {
        bandInfo.albums.forEach(album => {
          allAlbums.push({
            ...album,
            bandName: node.name,
            bandImage: node.image,
            bandId: node.id,
            year: parseInt(album.year)
          });
        });
      }
    });

    // Сортируем по году
    const sorted = allAlbums.sort((a, b) => a.year - b.year);
    setTimelineData(sorted);
  }, [isOpen, graphData]);

  // Получаем уникальные десятилетия для фильтра
  const decades = ['all', ...new Set(timelineData.map(album => 
    Math.floor(album.year / 10) * 10
  ))].sort((a, b) => {
    if (a === 'all') return -1;
    if (b === 'all') return 1;
    return a - b;
  });

  // Фильтруем по десятилетию
  const filteredAlbums = timelineData.filter(album => {
    if (selectedDecade === 'all') return true;
    const decade = Math.floor(album.year / 10) * 10;
    return decade === selectedDecade;
  });

  // Группируем по годам
  const groupedByYear = filteredAlbums.reduce((acc, album) => {
    if (!acc[album.year]) {
      acc[album.year] = [];
    }
    acc[album.year].push(album);
    return acc;
  }, {});

  const years = Object.keys(groupedByYear).sort((a, b) => a - b);

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
    maxWidth: '900px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    color: '#333',
    border: '2px solid #c41e3a'
  };

  const timelineStyle = {
    position: 'relative',
    padding: '20px 0'
  };

  const yearStyle = {
    marginBottom: '30px',
    position: 'relative'
  };

  const yearHeaderStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#c41e3a',
    marginBottom: '15px',
    paddingBottom: '5px',
    borderBottom: '2px solid #c41e3a'
  };

  const albumsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '15px',
    marginLeft: '20px'
  };

  const albumCardStyle = {
    background: '#f5f5f5',
    borderRadius: '8px',
    padding: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    border: '2px solid transparent',
    textAlign: 'center'
  };

  const decadeFilterStyle = {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    marginBottom: '20px',
    justifyContent: 'center'
  };

  const filterButtonStyle = (isSelected) => ({
    padding: '8px 15px',
    background: isSelected ? '#c41e3a' : '#f0f0f0',
    color: isSelected ? 'white' : '#666',
    border: 'none',
    borderRadius: '30px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s'
  });

  const AlbumCard = ({ album }) => {
    const [imgError, setImgError] = useState(false);
    const isExpanded = expandedAlbum === album.name + album.year;

    return (
      <div
        style={{
          ...albumCardStyle,
          transform: isExpanded ? 'scale(1.02)' : 'scale(1)',
          border: isExpanded ? '2px solid #c41e3a' : '2px solid transparent',
          background: isExpanded ? '#ffffff' : '#f5f5f5'
        }}
        onClick={() => setExpandedAlbum(isExpanded ? null : album.name + album.year)}
        onMouseEnter={(e) => {
          if (!isExpanded) {
            e.currentTarget.style.background = '#e0e0e0';
            e.currentTarget.style.transform = 'scale(1.02)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isExpanded) {
            e.currentTarget.style.background = '#f5f5f5';
            e.currentTarget.style.transform = 'scale(1)';
          }
        }}
      >
        {/* Обложка альбома */}
        <div style={{
          width: '100%',
          height: '130px',
          borderRadius: '5px',
          overflow: 'hidden',
          marginBottom: '8px',
          background: '#ddd'
        }}>
          {!imgError && album.cover ? (
            <img 
              src={album.cover}
              alt={album.name}
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
              fontSize: '14px',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '5px',
              boxSizing: 'border-box'
            }}>
              {album.name}
            </div>
          )}
        </div>

        {/* Название альбома */}
        <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' }}>
          {album.name.length > 20 ? album.name.substring(0, 18) + '...' : album.name}
        </div>

        {/* Группа */}
        <div style={{ fontSize: '12px', color: '#c41e3a', fontWeight: '500' }}>
          {album.bandName}
        </div>

        {/* Дополнительная информация при раскрытии */}
        {isExpanded && (
          <div style={{
            marginTop: '10px',
            padding: '10px',
            background: '#f9f9f9',
            borderRadius: '5px',
            fontSize: '12px',
            textAlign: 'left'
          }}>
            <div><strong>Год:</strong> {album.year}</div>
            {album.tracks && (
              <div style={{ marginTop: '5px' }}>
                <strong>Треки:</strong>
                <ul style={{ margin: '5px 0 0 15px', paddingLeft: '10px' }}>
                  {album.tracks.slice(0, 3).map((track, i) => (
                    <li key={i}>{track.length > 25 ? track.substring(0, 23) + '...' : track}</li>
                  ))}
                  {album.tracks.length > 3 && (
                    <li style={{ color: '#666' }}>и ещё {album.tracks.length - 3}...</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={dialogStyle} onClick={onClose}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ 
          color: '#c41e3a', 
          margin: '0 0 20px 0',
          fontSize: '26px',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          ⏳ ХРОНОЛОГИЯ АЛЬБОМОВ
        </h2>

        {/* Фильтр по десятилетиям */}
        <div style={decadeFilterStyle}>
          {decades.map(decade => (
            <button
              key={decade}
              style={filterButtonStyle(selectedDecade === decade)}
              onClick={() => setSelectedDecade(decade)}
              onMouseOver={(e) => {
                if (selectedDecade !== decade) {
                  e.target.style.background = '#e0e0e0';
                }
              }}
              onMouseOut={(e) => {
                if (selectedDecade !== decade) {
                  e.target.style.background = '#f0f0f0';
                }
              }}
            >
              {decade === 'all' ? 'ВСЕ' : `${decade}-е`}
            </button>
          ))}
        </div>

        {/* Таймлайн */}
        <div style={timelineStyle}>
          {years.length > 0 ? (
            years.map(year => (
              <div key={year} style={yearStyle}>
                <div style={yearHeaderStyle}>
                  {year} год
                </div>
                <div style={albumsGridStyle}>
                  {groupedByYear[year].map((album, index) => (
                    <AlbumCard key={index} album={album} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', color: '#666', padding: '40px' }}>
              Нет альбомов за выбранный период
            </p>
          )}
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

export default TimelinePanel;