import './App.css';
import React from 'react';
import LoginPage from './pages/LoginPage';
import Tracking from './pages/Tracking';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/tracking" element={<Tracking />} />
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
