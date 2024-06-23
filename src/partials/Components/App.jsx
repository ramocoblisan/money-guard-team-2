import React from 'react';
import { Route, Routes, BrowserRouter, HashRouter } from 'react-router-dom';

import BackupHome from '../Pages/BackupHome';
import Register from '../Pages/RegisterPage';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<BackupHome />} />
        <Route path="home" element={<BackupHome />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
