import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import BackupHome from '../Pages/BackupHome';
import Register from '../Pages/RegisterPage';

function App() {
  return (
    <BrowserRouter basename="money-guard-team-2">
      <Routes>
        <Route path="/" element={<BackupHome />} />
        <Route path="/home" element={<BackupHome />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
