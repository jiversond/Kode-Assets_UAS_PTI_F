import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import maps from './assets/MapBeranda.png';
import SoundTemple from './assets/backsound/soundawalgame.ogg';


function App() {
  const navigate = useNavigate();
  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <div className="app-container">
      {/* BACKSOUND */}
      <audio src={SoundTemple} autoPlay loop />

      {/* MAP & UI */}
      <img src={maps} alt="MapBeranda" className="map-image" />
      <div className="overlay">
        <h1 className="game-title">Knight's Journey</h1>
        <button
          className="start-button"
          onClick={() => navigate('/game')}
        >
          START
        </button>
        <button
          className="info-button"
          onClick={() => setShowInfoModal(true)}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#fff',
            background: 'linear-gradient(45deg, #4b0082, #8a2be2)',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          ABOUT THE GAME
        </button>
      </div>

      {showInfoModal && (
        <div
          className="modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1300,
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: '#1a1a2e',
              padding: '30px',
              borderRadius: '12px',
              maxWidth: '500px',
              width: '90%',
              color: '#fff',
              textAlign: 'center',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
            }}
          >
            <button
              onClick={() => setShowInfoModal(false)}
              className="close-button"
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                background: 'none',
                border: 'none',
                color: '#ff3377',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
              aria-label="Close modal"
            >
              ×
            </button>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#00ffcc' }}>
              About Knight's Journey
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Embark on an epic adventure in *Knight's Journey*! Explore a vast world, from treacherous dungeons to serene beaches and rugged mountains. Battle fierce enemies like Lions, Skeletons, and the mighty Giant Spirit to grow stronger and level up. Collect gold coins to trade for resources and manage your health and hunger to survive. Your mission: conquer challenges, defeat enemies, and become the ultimate knight in this thrilling RPG!
            </p>
            <button
              onClick={() => setShowInfoModal(false)}
              className="modal-button"
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#fff',
                background: 'linear-gradient(45deg, #007bff, #66b3ff)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
