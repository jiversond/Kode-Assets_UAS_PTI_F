import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import soundawal from './assets/backsound/soundawalgame.ogg';

const characters = [
  {
    name: 'Knight',
    description: 'A brave warrior in steel armor, protector of the realm.',
    image: require('./assets/characters/Char/knight.png'),
  },
  {
    name: 'Captain',
    description: 'An elite commander leading the troops with golden armor.',
    image: require('./assets/characters/Char/knight_gold.png'),
  },
  {
    name: 'Mage',
    description: 'A master of elemental magic and ancient spells.',
    image: require('./assets/characters/Char/hunter.png'),
  },
];

export default function GamePage() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

  const character = characters[index];

  const next = () => setIndex((index + 1) % characters.length);
  const prev = () => setIndex((index - 1 + characters.length) % characters.length);

  const containerStyle = {
    textAlign: 'center',
    padding: 20,
    fontFamily: "'Poppins', sans-serif",
    background: '#1e1e2f',
    color: '#f0f0f5',
    minHeight: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'hidden',
  };

  const buttonStyle = {
    padding: '12px 20px',
    borderRadius: 30,
    border: 'none',
    background: 'linear-gradient(45deg, #5865f2, #4752c4)',
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(88,101,242,0.6)',
    transition: 'background 0.3s ease',
    maxWidth: '90vw',
    width: '100%',
    marginTop: 20,
  };

  const imageNavContainer = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginTop: 30,
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const navButton = {
    padding: '8px 16px',
    fontSize: 14,
    borderRadius: 10,
    border: 'none',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
  };

  const characterImageStyle = {
    width: 150,
    height: 'auto',
    margin: '0 20px',
  };

  const selectedImageStyle = {
    width: 200,
    height: 'auto',
    marginBottom: 20,
  };

  return (
    <div style={containerStyle}>
      {/* BACKSOUND AUTOPLAY */}
      <audio src={soundawal} autoPlay loop />

      {!selected ? (
        <>
          <h1 style={{ marginBottom: 10 }}>Pilih Karakter</h1>

          <div style={imageNavContainer}>
            <button onClick={prev} style={navButton}>
              &lt; Prev
            </button>
            <img
              src={character.image}
              alt={character.name}
              style={characterImageStyle}
            />
            <button onClick={next} style={navButton}>
              Next &gt;
            </button>
          </div>

          <h2 style={{ marginTop: 20 }}>{character.name}</h2>
          <p style={{ maxWidth: 400 }}>{character.description}</p>

          <button onClick={() => setSelected(true)} style={buttonStyle}>
            Pilih Karakter Ini
          </button>
        </>
      ) : (
        <>
          <h1>Selamat datang di permainan!</h1>
          <h2>Karakter yang kamu pilih:</h2>
          <img
            src={character.image}
            alt={character.name}
            style={selectedImageStyle}
          />
          <h3>{character.name}</h3>
          <p style={{ maxWidth: 400 }}>{character.description}</p>

          <button
            style={buttonStyle}
            onClick={() => navigate('/gameplay', { state: { character } })}
          >
            Mulai Game
          </button>

          <button
            style={{
              ...buttonStyle,
              background: '#444',
              boxShadow: 'none',
            }}
            onClick={() => setSelected(false)}
          >
            Pilih Karakter Lain
          </button>
        </>
      )}
    </div>
  );
}
