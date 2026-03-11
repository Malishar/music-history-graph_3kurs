import React from 'react';

const ConfirmDialog = ({ isOpen, groupName, onConfirm, onCancel }) => {
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
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(196, 30, 58, 0.3)',
    maxWidth: '350px',
    width: '90%',
    color: '#333',
    border: '2px solid #c41e3a',
    textAlign: 'center'
  };

  const buttonStyle = {
    padding: '12px 35px',
    borderRadius: '30px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: 'none',
    margin: '0 8px',
    transition: 'all 0.2s'
  };

  return (
    <div style={dialogStyle} onClick={onCancel}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ 
          margin: '0 0 20px 0', 
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#c41e3a',
          textShadow: '1px 1px 2px rgba(196, 30, 58, 0.2)'
        }}>
          {groupName}
        </h2>
        
        <p style={{
          fontSize: '18px',
          margin: '20px 0',
          fontStyle: 'italic',
          color: '#666'
        }}>
          Выбрать эту группу?
        </p>
        
        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center'
        }}>
          {/* Кнопка ДА — теперь серая */}
          <button 
            onClick={onConfirm}
            style={{
              ...buttonStyle,
              background: '#f0f0f0',
              color: '#666',
              border: '1px solid #ccc',
              boxShadow: '0 5px 0 #ddd'
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
            ДА
          </button>
          
          {/* Кнопка НЕТ — теперь красная */}
          <button 
            onClick={onCancel}
            style={{
              ...buttonStyle,
              background: '#c41e3a',
              color: 'white',
              boxShadow: '0 5px 0 #8b0000'
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
            НЕТ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;