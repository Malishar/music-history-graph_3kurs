import React from "react";
import MusicGraphLocal from "./components/MusicGraphLocal";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ 
      padding: "20px", 
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(135deg, #ff6b6b 0%, #c41e3a 100%)", // КРАСНЫЙ ГРАДИЕНТ
      minHeight: "100vh"
    }}>
      <div style={{ 
        textAlign: "center", 
        color: "white",
        marginBottom: "30px"
      }}>
        <h1 style={{ 
          fontSize: "2.5rem", 
          marginBottom: "10px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
        }}>
          ГРАФ МУЗЫКАЛЬНЫХ ГРУПП
        </h1>
        <p style={{ 
          fontSize: "1.1rem",
          opacity: 0.9
        }}>
          100 групп • 4 десятилетия • Интерактивный граф
        </p>
      </div>
      
      <MusicGraphLocal />
      
      <div style={{ 
        textAlign: "center", 
        color: "white", 
        marginTop: "20px",
        opacity: 0.8
      }}>
        <p>💡 Перетаскивай узлы • Наводи для инфо • Кликай для деталей</p>
      </div>
    </div>
  );
}

export default App;