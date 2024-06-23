import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { RestrictedRoute } from '../../authRoutes/RestrictedRoute';

import BackupHome from '../Pages/BackupHome';
import Register from '../Pages/RegisterPage';

function App() {
  return (
    <BrowserRouter basename="/money-guard-team-2">
      <Route path="/" element={<BackupHome />} />
      <Route path="/home" element={<BackupHome />} />
      <Route path="/register" element={<Register />} />
    </BrowserRouter>
  );
}

export default App;
