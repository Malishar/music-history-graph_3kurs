import React from 'react';

const AboutPanel = ({ isOpen, onClose, graphData }) => {
  if (!isOpen) return null;

  // Безопасно получаем количество групп и связей
  const groupsCount = graphData?.nodes?.length || 0;
  const linksCount = graphData?.links?.length || 0;

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
    padding: '40px 45px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(196, 30, 58, 0.3)',
    maxWidth: '1100px',
    width: '95%',
    color: '#333',
    border: '2px solid #c41e3a'
  };

  // Разбиваем на три колонки
  const columnsStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '30px',
    marginTop: '20px'
  };

  const sectionStyle = {
    marginBottom: '25px',
    textAlign: 'left'
  };

  const titleStyle = {
    color: '#c41e3a',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderBottom: '2px solid #ffe0e0',
    paddingBottom: '5px'
  };

  const textStyle = {
    color: '#555',
    fontSize: '14px',
    lineHeight: '1.5',
    marginBottom: '10px',
    paddingLeft: '5px'
  };

  const listItemStyle = {
    color: '#555',
    fontSize: '13px',
    lineHeight: '1.8',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const shortcutStyle = {
    background: '#f5f5f5',
    padding: '3px 8px',
    borderRadius: '15px',
    fontSize: '11px',
    color: '#666',
    border: '1px solid #ddd',
    minWidth: '80px',
    textAlign: 'center'
  };

  const colorBoxStyle = (color, isLine = false) => ({
    display: 'inline-block',
    width: isLine ? '30px' : '18px',
    height: isLine ? '5px' : '18px',
    background: color,
    borderRadius: isLine ? '3px' : '50%',
    marginRight: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  });

  const statsBoxStyle = {
    background: '#f9f9f9',
    padding: '25px',
    borderRadius: '10px',
    border: '1px solid #e0e0e0',
    gridColumn: 'span 3',
    marginTop: '20px'
  };

  const countryGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '5px 15px',
    maxHeight: '300px',
    overflowY: 'auto',
    padding: '5px',
    border: '1px solid #f0f0f0',
    borderRadius: '8px',
    background: '#fafafa'
  };

  return (
    <div style={dialogStyle} onClick={onClose}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ 
          color: '#c41e3a', 
          margin: '0 0 20px 0',
          fontSize: '32px',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          🎸 MUSIC HISTORY GRAPH
        </h2>

        <div style={columnsStyle}>
          {/* Колонка 1: Основное */}
          <div>
            <div style={sectionStyle}>
              <div style={titleStyle}>
                <span>📌</span> КАК ПОЛЬЗОВАТЬСЯ
              </div>
              <div style={textStyle}>
                Интерактивный граф связей между музыкальными группами.
              </div>
            </div>

            <div style={sectionStyle}>
              <div style={titleStyle}>
                <span>🖱️</span> ОСНОВНЫЕ ДЕЙСТВИЯ
              </div>
              <div style={listItemStyle}>
                <span style={shortcutStyle}>Клик</span> Выбрать группу
              </div>
              <div style={listItemStyle}>
                <span style={shortcutStyle}>Правый клик</span> Инфо о группе
              </div>
              <div style={listItemStyle}>
                <span style={shortcutStyle}>Колесико</span> Масштаб
              </div>
              <div style={listItemStyle}>
                <span style={shortcutStyle}>Перетаскивание</span> Двигать
              </div>
            </div>

            <div style={sectionStyle}>
              <div style={titleStyle}>
                <span>🎯</span> МЕНЮ
              </div>
              <div style={listItemStyle}>
                <span style={{ fontSize: '16px', width: '24px' }}>📊</span> Топ-10 групп
              </div>
              <div style={listItemStyle}>
                <span style={{ fontSize: '16px', width: '24px' }}>🎮</span> Викторина
              </div>
              <div style={listItemStyle}>
                <span style={{ fontSize: '16px', width: '24px' }}>🔍</span> Поиск групп
              </div>
            </div>
          </div>

          {/* Колонка 2: Аналитика и фильтры */}
          <div>
            <div style={sectionStyle}>
              <div style={titleStyle}>
                <span>📈</span> АНАЛИТИКА
              </div>
              <div style={listItemStyle}>
                <span style={{ fontSize: '14px', width: '20px' }}>🔗</span> Самая связанная группа
              </div>
              <div style={listItemStyle}>
                <span style={{ fontSize: '14px', width: '20px' }}>🛤️</span> Кратчайший путь
              </div>
              <div style={listItemStyle}>
                <span style={{ fontSize: '14px', width: '20px' }}>🎯</span> Кластеры по жанрам
              </div>
            </div>

            <div style={sectionStyle}>
              <div style={titleStyle}>
                <span>🎨</span> ФИЛЬТРЫ
              </div>
              <div style={listItemStyle}>• Влияние (influence)</div>
              <div style={listItemStyle}>• Одна эпоха (same_era)</div>
              <div style={listItemStyle}>• Один жанр (same_genre)</div>
              <div style={listItemStyle}>• Общие участники (members)</div>
            </div>

            <div style={sectionStyle}>
              <div style={titleStyle}>
                <span>🔗</span> ЦВЕТА СВЯЗЕЙ
              </div>
              <div style={listItemStyle}>
                <span style={colorBoxStyle('#ff9ff3', true)} /> Влияние
              </div>
              <div style={listItemStyle}>
                <span style={colorBoxStyle('#feca57', true)} /> Одна эпоха
              </div>
              <div style={listItemStyle}>
                <span style={colorBoxStyle('#48dbfb', true)} /> Один жанр
              </div>
              <div style={listItemStyle}>
                <span style={colorBoxStyle('#9b59b6', true)} /> Общие участники
              </div>
            </div>
          </div>

          {/* Колонка 3: Цвета стран */}
          <div>
            <div style={sectionStyle}>
              <div style={titleStyle}>
                <span>🌍</span> ЦВЕТА СТРАН
              </div>
              <div style={textStyle}>Обводка узла показывает страну:</div>
              <div style={countryGridStyle}>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#ff6b6b')} /> Великобритания
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#4ecdc4')} /> США
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#45b7d1')} /> Австралия
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#ff9ff3')} /> Германия
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#feca57')} /> Швеция
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#1dd1a1')} /> Норвегия
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#5f27cd')} /> Финляндия
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#00d2d3')} /> Италия
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#ff9f43')} /> Испания
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#f368e0')} /> Нидерланды
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#0abde3')} /> Бельгия
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#ee5a24')} /> Австрия
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#ff3f34')} /> Польша
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#1289A7')} /> Чехия
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#006266')} /> Греция
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#ED4C67')} /> Португалия
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#ffb8b8')} /> Дания
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#A3CB38')} /> Ирландия
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#12CBC4')} /> Канада
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#ffda79')} /> Бразилия
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#ffcccc')} /> Япония
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#b8e994')} /> Новая Зеландия
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#f6e58d')} /> ЮАР
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#c44569')} /> Россия
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#786fa6')} /> Грузия
                </div>
                <div style={listItemStyle}>
                  <span style={colorBoxStyle('#95a5a6')} /> Другие страны
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Статистика внизу */}
        <div style={statsBoxStyle}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '14px', color: '#888' }}>Групп</div>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#c41e3a' }}>{groupsCount}</div>
            </div>
            <div>
              <div style={{ fontSize: '14px', color: '#888' }}>Связей</div>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#c41e3a' }}>{linksCount}</div>
            </div>
            <div>
              <div style={{ fontSize: '14px', color: '#888' }}>Десятилетия</div>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#c41e3a' }}>1960-2020</div>
            </div>
            <div>
              <div style={{ fontSize: '14px', color: '#888' }}>Версия</div>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#c41e3a' }}>2.0</div>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            background: '#c41e3a',
            color: 'white',
            border: 'none',
            padding: '15px 40px',
            borderRadius: '30px',
            fontSize: '18px',
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
          ПОНЯТНО
        </button>
      </div>
    </div>
  );
};

export default AboutPanel;