import React, { useEffect } from 'react';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const handleKeyPress = () => {
      onFinish();
    };
    
    const handleClick = () => {
      onFinish();
    };
    
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('click', handleClick);
    };
  }, [onFinish]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#c41e3a',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 20000,
      cursor: 'pointer'
    }}>
      {/* Красный фон */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #c41e3a 0%, #8b0000 100%)',
        opacity: 0.9
      }} />
      
      {/* Контент */}
      <div style={{
        position: 'relative',
        zIndex: 20001,
        textAlign: 'center',
        color: 'white',
        padding: '20px',
        animation: 'pulse 2s infinite'
      }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          marginBottom: '20px',
          fontWeight: 'bold',
          textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
          letterSpacing: '2px'
        }}>
          MUSIC HISTORY
        </h1>
        
        <h2 style={{
          fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
          marginBottom: '40px',
          fontWeight: 'normal',
          opacity: 0.9
        }}>
          ГРАФ МУЗЫКАЛЬНЫХ ГРУПП
        </h2>
        
        <div style={{
          width: '100px',
          height: '100px',
          margin: '40px auto',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: '4px solid white',
            borderRadius: '50%',
            animation: 'ripple 1.5s infinite'
          }} />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '40px'
          }}>
          </div>
        </div>
        
        <p style={{
          fontSize: '1.2rem',
          opacity: 0.8,
          marginTop: '20px',
          animation: 'fadeInOut 2s infinite'
        }}>
          Нажмите любую клавишу или кликните мышкой
        </p>
      </div>
      
      {/* Анимации */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes ripple {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes fadeInOut {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;