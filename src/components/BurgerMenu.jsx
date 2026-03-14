import React, { useState } from 'react';

const BurgerMenu = ({ topGroups, onMenuItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    zIndex: 2000
  };

  const burgerButtonStyle = {
    width: '40px',
    height: '40px',
    background: '#c41e3a',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    border: '2px solid white'
  };

  const lineStyle = {
    width: '25px',
    height: '3px',
    background: 'white',
    margin: '3px 0',
    borderRadius: '2px'
  };

  const menuPanelStyle = {
    position: 'absolute',
    top: '50px',
    left: '0',
    width: '280px',
    background: 'white',
    borderRadius: '8px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    border: '2px solid #c41e3a',
    overflow: 'hidden',
    display: isOpen ? 'block' : 'none'
  };

  const menuItemStyle = {
    padding: '15px 20px',
    cursor: 'pointer',
    borderBottom: '1px solid #eee',
    transition: 'background 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '15px',
    color: '#333'  // ← тёмно-серый
  };

  const subMenuItemStyle = {
    padding: '12px 20px 12px 52px',
    cursor: 'pointer',
    borderBottom: '1px solid #f0f0f0',
    transition: 'background 0.2s',
    fontSize: '14px',
    color: '#555'
  };

  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <div style={menuStyle}>
      <div style={burgerButtonStyle} onClick={() => setIsOpen(!isOpen)}>
        <div style={lineStyle}></div>
        <div style={lineStyle}></div>
        <div style={lineStyle}></div>
      </div>
      
      {isOpen && (
        <div style={menuPanelStyle}>
          {/* Топ-10 групп */}
          <div 
            style={menuItemStyle}
            onClick={() => {
              onMenuItemClick('top10');
              setIsOpen(false);
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
          >
            <span style={{ fontSize: '20px' }}>📊</span>
            <span style={{ fontWeight: 'bold' }}>Топ-10 групп</span>
          </div>
        
            {/* Викторина */}
            <div 
            style={menuItemStyle}
            onClick={() => {
                onMenuItemClick('quiz');
                setIsOpen(false);
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f5f5f5';
                e.currentTarget.style.color = '#222';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#333';
            }}
            >
            <span style={{ fontSize: '20px' }}>🎮</span>
            <span style={{ fontWeight: 'bold' }}>Викторина</span>
            </div>

          {/* Поиск групп */}
          <div 
            style={menuItemStyle}
            onClick={() => {
              onMenuItemClick('search');
              setIsOpen(false);
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
          >
            <span style={{ fontSize: '20px' }}>🔍</span>
            <span style={{ fontWeight: 'bold' }}>Поиск групп</span>
          </div>

          {/* Аналитика (с подменю) */}
          <div>
            <div 
              style={menuItemStyle}
              onClick={() => setOpenSubmenu(openSubmenu === 'analytics' ? null : 'analytics')}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
            >
              <span style={{ fontSize: '20px' }}>📈</span>
              <span style={{ fontWeight: 'bold', flex: 1 }}>Аналитика</span>
              <span>{openSubmenu === 'analytics' ? '▼' : '▶'}</span>
            </div>
            
            {openSubmenu === 'analytics' && (
              <div>
                <div 
                  style={subMenuItemStyle}
                  onClick={() => {
                    onMenuItemClick('mostConnected');
                    setIsOpen(false);
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                >
                  🔗 Самая связанная группа
                </div>
                <div 
                  style={subMenuItemStyle}
                  onClick={() => {
                    onMenuItemClick('shortestPath');
                    setIsOpen(false);
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                >
                  🛤️ Кратчайший путь
                </div>
                <div 
                  style={subMenuItemStyle}
                  onClick={() => {
                    onMenuItemClick('clusters');
                    setIsOpen(false);
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                >
                  🎯 Кластеры по жанрам
                </div>
              </div>
            )}
          </div>

          {/* О проекте */}
          <div 
            style={{...menuItemStyle, borderBottom: 'none'}}
            onClick={() => {
              onMenuItemClick('about');
              setIsOpen(false);
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
          >
            <span style={{ fontSize: '20px' }}>ℹ️</span>
            <span style={{ fontWeight: 'bold' }}>О проекте</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;