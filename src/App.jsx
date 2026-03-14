import React, { useState } from "react";
import MusicGraphLocal from "./components/MusicGraphLocal";
import SplashScreen from "./components/SplashScreen";
import "./App.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}
      
      {!showSplash && (
        <div className="App" style={{ 
          padding: 0,
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "linear-gradient(135deg, #ff6b6b 0%, #c41e3a 100%)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column"
        }}>
          {/* ========== ШАПКА (красная сверху) ========== */}
          <div style={{ 
            textAlign: "center", 
            color: "white",
            padding: "20px 20px 10px 20px",
            backgroundColor: "transparent" // прозрачный, виден градиент
          }}>
            <h1 style={{ 
              fontSize: "2.5rem", 
              margin: "0 0 10px 0",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
            }}>
              ГРАФ МУЗЫКАЛЬНЫХ ГРУПП
            </h1>
            <p style={{ 
              fontSize: "1.1rem",
              margin: "0",
              opacity: 0.9
            }}>
              100+ групп • Интерактивный граф
            </p>
          </div>
          
          {/* ========== ГРАФ (белая область) ========== */}
          <div style={{ 
            flex: 1, 
            padding: "0 20px 20px 20px"
          }}>
            <MusicGraphLocal />
          </div>
          
          {/* ========== ПОДВАЛ (красный снизу) ========== */}
          <div style={{ 
            textAlign: "center", 
            color: "white", 
            padding: "0 20px 20px 20px",
            opacity: 0.8,
            backgroundColor: "transparent" // прозрачный, виден градиент
          }}>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
              💡 Перетаскивай узлы • Наводи для инфо • Кликай для деталей
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;