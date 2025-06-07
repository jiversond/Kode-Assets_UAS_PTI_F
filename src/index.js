import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import GamePage from './GamePage';
import GameplayPage from './GameplayPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/gameplay" element={<GameplayPage/>}/>
      
    </Routes>
  </BrowserRouter>
);
