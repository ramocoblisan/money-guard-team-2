import React from 'react';
import { Route, Routes, BrowserRouter, HashRouter } from 'react-router-dom';
import { RestrictedRoute } from '../../authRoutes/RestrictedRoute';

import BackupHome from '../Pages/BackupHome';
import Register from '../Pages/RegisterPage';

function App() {
  return (
    <HashRouter basename="/money-guard-team-2">
      <Routes>
        <Route path="/" element={<BackupHome />} />
        <Route path="/home" element={<BackupHome />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={Register} redirectTo="/home" />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
