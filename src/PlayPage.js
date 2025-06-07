import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Play() {
  const location = useLocation();
  const character = location.state?.character;

  if (!character) {
    return <div>Tidak ada karakter yang dipilih.</div>;
  }

  return (
    <div>
      <h1>Selamat datang, {character.name}!</h1>
      <img src={character.image} alt={character.name} />
      <p>{character.description}</p>
      {/* Lanjutkan game atau tampilan di sini */}
    </div>
  );
}
