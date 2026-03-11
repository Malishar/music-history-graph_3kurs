import React, { useState } from 'react';
import { bandsData } from '../data/bandsData';

const InfoPanel = ({ group, onClose, isOpen }) => {
  const [activeTab, setActiveTab] = useState('info');
  const [flippedAlbum, setFlippedAlbum] = useState(null);  // ← ЭТО БЫЛО ПРОПУЩЕНО!

  if (!isOpen || !group) return null;

  const bandInfo = bandsData[group.id];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'flex-end',
        zIndex: 10000
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '1200px',
          height: '100%',
          background: 'white',
          padding: '20px',
          overflowY: 'auto',
          borderLeft: '4px solid #c41e3a'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Шапка */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '20px',
          borderBottom: '2px solid #c41e3a',
          paddingBottom: '10px'
        }}>
          <h2 style={{ color: '#c41e3a', margin: 0 }}>{group.name}</h2>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#666'
            }}
          >
            ✕
          </button>
        </div>

        {/* Фото группы */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img 
            src={group.image} 
            alt={group.name}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '3px solid #c41e3a',
              objectFit: 'cover'
            }}
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>

        {/* Табы */}
        <div style={{ 
          display: 'flex', 
          gap: '10px', 
          marginBottom: '20px',
          borderBottom: '1px solid #ddd',
          paddingBottom: '10px'
        }}>
          <button
            onClick={() => setActiveTab('info')}
            style={{
              padding: '8px 20px',
              background: activeTab === 'info' ? '#c41e3a' : '#f0f0f0',
              color: activeTab === 'info' ? 'white' : '#222',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            Инфо
          </button>
          <button
            onClick={() => setActiveTab('albums')}
            style={{
              padding: '8px 20px',
              background: activeTab === 'albums' ? '#c41e3a' : '#f0f0f0',
              color: activeTab === 'albums' ? 'white' : '#222',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            Альбомы
          </button>
          <button
            onClick={() => setActiveTab('members')}
            style={{
              padding: '8px 20px',
              background: activeTab === 'members' ? '#c41e3a' : '#f0f0f0',
              color: activeTab === 'members' ? 'white' : '#222',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            Участники
          </button>
        </div>

        {/* Контент */}
        <div>
          {activeTab === 'info' && (
            <div>
              {bandInfo?.bio ? (
                <>
                  <p style={{ lineHeight: '1.6', marginBottom: '20px', color: '#222' }}>{bandInfo.bio}</p>
                  <div style={{ background: '#f5f5f5', padding: '15px', borderRadius: '10px' }}>
                    <p style={{ color: '#222' }}><strong style={{ color: '#c41e3a' }}>Год:</strong> {group.year}</p>
                    <p style={{ color: '#222' }}><strong style={{ color: '#c41e3a' }}>Страна:</strong> {group.country}</p>
                    <p style={{ color: '#222' }}><strong style={{ color: '#c41e3a' }}>Жанр:</strong> {group.genre}</p>
                  </div>
                </>
              ) : (
                <p style={{ color: '#222' }}>Информация загружается...</p>
              )}
            </div>
          )}

          {activeTab === 'albums' && (
            <div>
              {bandInfo?.albums ? (
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '30px',
                  justifyContent: 'flex-start'
                }}>
                  {bandInfo.albums.map(album => (
                    <div
                      key={album.name}
                      style={{
                        perspective: '1000px',
                        width: '280px',
                        height: '280px',
                        cursor: 'pointer',
                        flex: '0 0 auto'
                      }}
                      onClick={() => setFlippedAlbum(flippedAlbum === album.name ? null : album.name)}
                    >
                      <div style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        transition: 'transform 0.6s',
                        transformStyle: 'preserve-3d',
                        transform: flippedAlbum === album.name ? 'rotateY(180deg)' : 'rotateY(0deg)'
                      }}>
                        {/* Лицевая сторона - обложка */}
                        <div style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          backfaceVisibility: 'hidden',
                          background: `url(${album.cover})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          borderRadius: '8px',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                          display: 'flex',
                          alignItems: 'flex-end'
                        }}>
                          <div style={{
                            width: '100%',
                            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                            color: 'white',
                            padding: '8px',
                            borderBottomLeftRadius: '8px',
                            borderBottomRightRadius: '8px',
                            fontSize: '15px',
                            textAlign: 'center'
                          }}>
                            <strong>{album.name}</strong>
                            <div style={{ fontSize: '13px' }}>{album.year}</div>
                          </div>
                        </div>
                        
                        {/* Задняя сторона - треки */}
                        <div style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                          background: '#f5f5f5',
                          borderRadius: '8px',
                          padding: '10px',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                          overflowY: 'auto',
                          border: '2px solid #c41e3a',
                          fontSize: '13px'
                        }}>
                          <h4 style={{ 
                            color: '#c41e3a', 
                            margin: '0 0 8px 0',
                            textAlign: 'center',
                            fontSize: '14px',
                            borderBottom: '1px solid #c41e3a',
                            paddingBottom: '4px'
                          }}>
                            {album.name}
                          </h4>
                          <ol style={{ 
                            paddingLeft: '16px',
                            margin: 0
                          }}>
                            {album.tracks.map(track => (
                              <li key={track} style={{ marginBottom: '3px', color: '#222' }}>
                                {track.length > 20 ? track.substring(0, 18) + '...' : track}
                              </li>
                            ))}
                          </ol>
                          <p style={{
                            textAlign: 'center',
                            margin: '8px 0 0 0',
                            fontSize: '9px',
                            color: '#666',
                            fontStyle: 'italic'
                          }}>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: '#222' }}>Альбомы загружаются...</p>
              )}
            </div>
          )}

          {activeTab === 'members' && (
            <div>
              {bandInfo?.members ? (
                <div>
                  {/* Текущие участники */}
                  {bandInfo.members.filter(m => m.current).length > 0 && (
                    <>
                      <h3 style={{ 
                        color: '#c41e3a', 
                        margin: '0 0 15px 0',
                        fontSize: '18px',
                        borderBottom: '2px solid #c41e3a',
                        paddingBottom: '5px'
                      }}>
                        Текущие участники
                      </h3>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '90px',
                        marginBottom: '25px'
                      }}>
                        {bandInfo.members.filter(m => m.current).map(member => (
                          <div
                            key={member.name}
                            style={{
                              width: '120px',
                              textAlign: 'center'
                            }}
                          >
                            <div style={{
                              width: '200px',
                              height: '240px',
                              borderRadius: '8px',
                              background: 'linear-gradient(135deg, #f0f0f0, #ddd)',
                              marginBottom: '8px',
                              border: '2px solid #c41e3a',
                              overflow: 'hidden',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 4px 8px rgba(196, 30, 58, 0.2)'
                            }}>
                              {member.image ? (
                                <img 
                                  src={member.image}
                                  alt={member.name}
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                  }}
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentNode.innerHTML = `<span style="font-size: 40px; color: #c41e3a">${member.name.charAt(0)}</span>`;
                                  }}
                                />
                              ) : (
                                <span style={{ fontSize: '40px', color: '#c41e3a' }}>
                                  {member.name.charAt(0)}
                                </span>
                              )}
                            </div>
                            <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#222', textAlign: 'center', width: '200px' }}>  {/* было 12px */}
                              {member.name}
                            </div>
                            <div style={{ fontSize: '15px', color: '#c41e3a', textAlign: 'center', width: '200px' }}>  {/* было 11px */}
                              {member.role}
                            </div>
                            <div style={{ fontSize: '14px', color: '#666', textAlign: 'center', width: '200px' }}>  {/* было 10px */}
                              {member.years}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Бывшие участники */}
                  {console.log('Количество бывших:', bandInfo.members.filter(m => !m.current).length)}
                  {bandInfo.members.filter(m => !m.current).length > 0 && (
                    <>
                      <h3 style={{ 
                        color: '#c41e3a', 
                        margin: '0 0 15px 0',
                        fontSize: '18px',
                        borderBottom: '2px solid #c41e3a',
                        paddingBottom: '5px'
                      }}>
                        Бывшие участники
                      </h3>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '90px',
                        marginBottom: '25px',
                        minHeight: '200px',
                      }}>
                        {bandInfo.members.filter(m => !m.current).map(member => (
                          <div
                            key={member.name}
                            style={{
                              width: '120px',
                              textAlign: 'center'
                            }}
                          >
                            <div style={{
                              width: '200px',
                              height: '240px',
                              borderRadius: '8px',
                              background: 'linear-gradient(135deg, #f0f0f0, #ddd)',
                              marginBottom: '8px',
                              border: '2px solid #666',
                              overflow: 'hidden',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                            }}>
                              {member.image ? (
                                <img 
                                  src={member.image}
                                  alt={member.name}
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                  }}
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentNode.innerHTML = `<span style="font-size:40px;color:#666">${member.name.charAt(0)}</span>`;
                                  }}
                                />
                              ) : (
                                <span style={{ fontSize: '40px', color: '#666' }}>
                                  {member.name.charAt(0)}
                                </span>
                              )}
                            </div>
                            <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#222', textAlign: 'center', width: '200px'  }}>  {/* было 12px */}
                              {member.name}
                            </div>
                            <div style={{ fontSize: '13px', color: '#666', textAlign: 'center', width: '200px'  }}>  {/* было 11px */}
                              {member.role}
                            </div>
                            <div style={{ fontSize: '12px', color: '#666', textAlign: 'center', width: '200px'  }}>  {/* было 10px */}
                              {member.years}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <p style={{ color: '#222' }}>Участники загружаются...</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;