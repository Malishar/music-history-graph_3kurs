import React, { useRef, useEffect, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import FilterPanel from './FilterPanel';

const MusicGraphLocal = () => {
  const [images, setImages] = useState({});
  const fgRef = useRef();
  
  //Данные для графа
  const graphData = {
    nodes: [
      { 
        id: "The Beatles", 
        name: "The Beatles", 
        year: 1960, 
        genre: "Rock", 
        country: "UK",
        image: "/images/bands/the-beatles.jpg"
      },
      { 
        id: "Queen", 
        name: "Queen", 
        year: 1970, 
        genre: "Rock", 
        country: "UK",
        image: "/images/bands/queen.jpg" 
      },
      { 
        id: "Pink Floyd", 
        name: "Pink Floyd", 
        year: 1965, 
        genre: "Progressive Rock", 
        country: "UK",
        image: "/images/bands/pink-floyd.jpg"
      },
      { 
        id: "The Rolling Stones", 
        name: "The Rolling Stones", 
        year: 1962, 
        genre: "Rock", 
        country: "UK",
        image: "/images/bands/rolling-stones.jpg"
      },
      { 
        id: "Led Zeppelin", 
        name: "Led Zeppelin", 
        year: 1968, 
        genre: "Hard Rock", 
        country: "UK",
        image: "/images/bands/led-zeppelin.jpg"
      },
      { 
        id: "Nirvana", 
        name: "Nirvana", 
        year: 1987, 
        genre: "Grunge", 
        country: "USA",
        image: "/images/bands/nirvana.jpg"
      },
      { 
        id: "AC/DC", 
        name: "AC/DC", 
        year: 1973, 
        genre: "Hard Rock", 
        country: "Australia",
        image: "/images/bands/acdc.jpg"
      },
      { 
        id: "Metallica", 
        name: "Metallica", 
        year: 1981, 
        genre: "Heavy Metal", 
        country: "USA",
        image: "/images/bands/metallica.jpg"
      },
      { 
        id: "Radiohead", 
        name: "Radiohead", 
        year: 1985, 
        genre: "Alternative Rock", 
        country: "UK",
        image: "/images/bands/radiohead.jpg"
      },
      { 
        id: "The Doors", 
        name: "The Doors", 
        year: 1965, 
        genre: "Rock", 
        country: "USA",
        image: "/images/bands/the-doors.jpg"
      },
      { 
        id: "Black Sabbath", 
        name: "Black Sabbath", 
        year: 1968, 
        genre: "Heavy Metal", 
        country: "UK",
        image: "/images/bands/black-sabbath.jpg"
      },
      { 
        id: "Red Hot Chili Peppers", 
        name: "Red Hot Chili Peppers", 
        year: 1983, 
        genre: "Funk Rock", 
        country: "USA",
        image: "/images/bands/rhcp.jpg"
      },
      { 
        id: "Guns N' Roses", 
        name: "Guns N' Roses", 
        year: 1985, 
        genre: "Hard Rock", 
        country: "USA",
        image: "/images/bands/guns-n-roses.jpg"
      },
      { 
        id: "The Who", 
        name: "The Who", 
        year: 1964, 
        genre: "Rock", 
        country: "UK",
        image: "/images/bands/the-who.jpg"
      },
      { 
        id: "Deep Purple", 
        name: "Deep Purple", 
        year: 1968, 
        genre: "Hard Rock", 
        country: "UK",
        image: "/images/bands/deep-purple.jpg"
      },
      { 
        id: "Iron Maiden", 
        name: "Iron Maiden", 
        year: 1975, 
        genre: "Heavy Metal", 
        country: "UK",
        image: "/images/bands/iron-maiden.jpg"
      },
      { 
        id: "Rammstein", 
        name: "Rammstein", 
        year: 1994, 
        genre: "Industrial Metal", 
        country: "Germany",
        image: "/images/bands/rammstein.jpg"
      },
      { 
        id: "System of a Down", 
        name: "System of a Down", 
        year: 1994, 
        genre: "Alternative Metal", 
        country: "USA",
        image: "/images/bands/soad.jpg"
      },
      { 
        id: "Linkin Park", 
        name: "Linkin Park", 
        year: 1996, 
        genre: "Nu Metal", 
        country: "USA",
        image: "/images/bands/linkin-park.jpg"
      },
      { 
        id: "Ramones", 
        name: "Ramones", 
        year: 1974, 
        genre: "Punk Rock", 
        country: "USA",
        image: "/images/bands/ramones.jpg"
      },
      { 
        id: "Sex Pistols", 
        name: "Sex Pistols", 
        year: 1975, 
        genre: "Punk Rock", 
        country: "UK",
        image: "/images/bands/sex-pistols.jpg"
      }
    ],
    links: [
      // Старые связи
      { source: "The Beatles", target: "Queen" },
      { source: "The Beatles", target: "The Rolling Stones" },
      { source: "Queen", target: "Led Zeppelin" },
      { source: "Pink Floyd", target: "Led Zeppelin" },
      { source: "Led Zeppelin", target: "Black Sabbath", type: "same_era" },
      { source: "Black Sabbath", target: "Metallica", type: "influence" },
      { source: "Nirvana", target: "The Beatles", type: "influence" },
      { source: "AC/DC", target: "Led Zeppelin", type: "same_genre" },
      { source: "The Doors", target: "The Beatles", type: "same_era" },
      { source: "Radiohead", target: "Pink Floyd", type: "influence" },
      { source: "Metallica", target: "AC/DC", type: "same_genre" },
      { source: "Nirvana", target: "Radiohead", type: "alternative" },
      
      // Связи для дополнительных групп
      { source: "Red Hot Chili Peppers", target: "The Beatles", type: "influence" },
      { source: "Guns N' Roses", target: "Led Zeppelin", type: "influence" },
      { source: "The Who", target: "The Beatles", type: "same_era" },
      { source: "Deep Purple", target: "Led Zeppelin", type: "same_era" },
      { source: "Iron Maiden", target: "Black Sabbath", type: "influence" },
      { source: "Rammstein", target: "Metallica", type: "influence" },
      { source: "System of a Down", target: "Metallica", type: "influence" },
      { source: "Linkin Park", target: "Nirvana", type: "influence" },
      
      // Новые связи для панк-групп
      { source: "Ramones", target: "The Beatles", type: "punk_reaction" },
      { source: "Sex Pistols", target: "The Rolling Stones", type: "punk_reaction" },
      { source: "Ramones", target: "Sex Pistols", type: "same_genre" },
      { source: "Nirvana", target: "Ramones", type: "influence" },
      
      { source: "Red Hot Chili Peppers", target: "The Doors", type: "influence" },
      { source: "Guns N' Roses", target: "AC/DC", type: "same_genre" },
      { source: "The Who", target: "Led Zeppelin", type: "same_era" },
      { source: "Deep Purple", target: "Black Sabbath", type: "same_era" },
      { source: "Iron Maiden", target: "Metallica", type: "same_genre" }
    ]
  };


  // ========== НАЧАЛО ВСТАВКИ ==========
  const [activeFilters, setActiveFilters] = useState({
    influence: true,
    same_era: true,
    same_genre: true,
    members: true
  });

  const [expandedNode, setExpandedNode] = useState(null);
  const [showOnlyConnected, setShowOnlyConnected] = useState(false);
  const [filteredData, setFilteredData] = useState(graphData);

  // Функция для фильтрации связей
  const filterLinks = () => {
    return graphData.links.filter(link => activeFilters[link.type]);
  };

  // Функция для раскрытия узла
  const expandNode = (node) => {
    if (expandedNode === node.id) {
      setExpandedNode(null);
      setShowOnlyConnected(false);
      setFilteredData(graphData);
    } else {
      const nodeLinks = graphData.links.filter(link => 
        (link.source === node.id || link.target === node.id) && activeFilters[link.type]
      );
      
      const connectedNodes = new Set([node.id]);
      nodeLinks.forEach(link => {
        connectedNodes.add(link.source);
        connectedNodes.add(link.target);
      });
      
      const filteredNodes = graphData.nodes.filter(n => connectedNodes.has(n.id));
      const filteredLinks = graphData.links.filter(link => 
        (connectedNodes.has(link.source) && connectedNodes.has(link.target)) &&
        activeFilters[link.type]
      );
      
      setExpandedNode(node.id);
      setShowOnlyConnected(true);
      setFilteredData({
        nodes: filteredNodes,
        links: filteredLinks
      });
    }
  };

  // Сброс фильтров
  const resetFilters = () => {
    setActiveFilters({
      influence: true,
      same_era: true,
      same_genre: true,
      members: true
    });
    setExpandedNode(null);
    setShowOnlyConnected(false);
    setFilteredData(graphData);
  };

  // Обновление при изменении фильтров
  useEffect(() => {
    if (!showOnlyConnected) {
      setFilteredData({
        nodes: graphData.nodes,
        links: filterLinks()
      });
    } else if (expandedNode) {
      const nodeLinks = graphData.links.filter(link => 
        (link.source === expandedNode || link.target === expandedNode) && activeFilters[link.type]
      );
      
      const connectedNodes = new Set([expandedNode]);
      nodeLinks.forEach(link => {
        connectedNodes.add(link.source);
        connectedNodes.add(link.target);
      });
      
      const filteredNodes = graphData.nodes.filter(n => connectedNodes.has(n.id));
      const filteredLinks = graphData.links.filter(link => 
        (connectedNodes.has(link.source) && connectedNodes.has(link.target)) &&
        activeFilters[link.type]
      );
      
      setFilteredData({
        nodes: filteredNodes,
        links: filteredLinks
      });
    }
  }, [activeFilters]); 

  // Загружаем изображения при монтировании компонента
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = {};
      const imagePromises = graphData.nodes.map(node => {
        return new Promise((resolve) => {
          if (node.image) {
            const img = new Image();
            img.onload = () => {
              loadedImages[node.id] = img;
              resolve();
            };
            img.onerror = () => {
              console.warn(`Не удалось загрузить: ${node.image}`);
              loadedImages[node.id] = null;
              resolve();
            };
            img.src = node.image;
          } else {
            resolve();
          }
        });
      });

      await Promise.all(imagePromises);
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  // Функция для отрисовки узлов с изображениями
  const paintNode = (node, ctx, globalScale) => {
    const size = 10;
    const img = images[node.id];

    // Рисуем фон
    ctx.beginPath();
    ctx.arc(node.x, node.y, size + 2, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fill();

    // Рисуем обводку разного цвета в зависимости от страны
    ctx.lineWidth = 2 / globalScale;
    const countryColors = {
      'UK': '#ff6b6b',
      'USA': '#4ecdc4',
      'Australia': '#45b7d1',
      'Germany': '#ff9ff3'
    };
    ctx.strokeStyle = countryColors[node.country] || '#95a5a6';
    ctx.stroke();

    // Рисуем изображение если оно загружено
    if (img) {
      try {
        const imgSize = size * 1.8;
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, 2 * Math.PI);
        ctx.clip();
        ctx.drawImage(img, node.x - imgSize/2, node.y - imgSize/2, imgSize, imgSize);
        ctx.restore();
      } catch (e) {
        drawFallbackNode(node, ctx, size);
      }
    } else {
      drawFallbackNode(node, ctx, size);
    }

    // Подпись названия группы
    ctx.fillStyle = '#333';
    ctx.font = '7px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(node.name, node.x, node.y + size + 2);
  };

  // Резервный вариант если изображение не загрузилось
  const drawFallbackNode = (node, ctx, size) => {
    const countryColors = {
      'UK': '#ff6b6b',
      'USA': '#4ecdc4', 
      'Australia': '#45b7d1',
      'Germany': '#ff9ff3'
    };
    
    ctx.fillStyle = countryColors[node.country] || '#95a5a6';
    ctx.beginPath();
    ctx.arc(node.x, node.y, size, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.font = '5px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(node.name.substring(0, 3), node.x, node.y);
  };

  return (
    <div style={{ 
      width: '100%', 
      height: '800px',
      border: '2px solid #e0e0e0',
      borderRadius: '10px',
      background: '#f8f9fa',
      position: 'relative'
    }}>
      <FilterPanel 
        activeFilters={activeFilters}
        onFilterChange={(type, value) => 
          setActiveFilters(prev => ({ ...prev, [type]: value }))
        }
        onReset={resetFilters}
      />
      
      {expandedNode && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: 'rgba(255,255,255,0.95)',
          padding: '8px 12px',
          borderRadius: '5px',
          zIndex: 1000,
          fontSize: '12px',
          border: '2px solid #c41e3a'
        }}>
          Показаны связи: {expandedNode}
          <button 
            onClick={() => {
              setExpandedNode(null);
              setShowOnlyConnected(false);
              setFilteredData(graphData);
            }}
            style={{
              marginLeft: '10px',
              background: '#c41e3a',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              padding: '2px 5px',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
        </div>
      )}
      
      <ForceGraph2D
        ref={fgRef}
        graphData={filteredData}
        nodeLabel={node => `
           ${node.name}
           ${node.year}
           ${node.country}
           ${node.genre}
        `}
        nodeCanvasObject={paintNode}
        nodePointerAreaPaint={(node, color, ctx) => {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 12, 0, 2 * Math.PI);
          ctx.fill();
        }}
        linkColor={link => {
          const linkColors = {
            'influence': '#ff9ff3',
            'same_era': '#feca57', 
            'same_genre': '#48dbfb',
            'members': '#9b59b6'
          };
          return linkColors[link.type] || '#999';
        }}
        linkWidth={link => {
          if (expandedNode && (link.source === expandedNode || link.target === expandedNode)) {
            return 2;
          }
          return 1;
        }}
        linkCurvature={0.2}
        enableNodeDrag={true}
        onNodeClick={(node) => {
          console.log('Клик по:', node);
          expandNode(node);
          alert(` ${node.name}\n ${node.year}\n ${node.country}\n ${node.genre}`);
        }}
      />
    </div>
  );
};

export default MusicGraphLocal;
