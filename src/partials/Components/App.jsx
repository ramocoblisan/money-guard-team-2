import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from '../../authRoutes/RestrictedRoute';

import Register from '../pages/RegisterPage';
import BackupHome from '../pages/BackupHome';

function App() {
  return (
    <>
      Loading ....
      <Routes>
        <Route path="/" element={<BackupHome />} />
        <Route path="home" element={<BackupHome />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={Register} redirectTo="/home" />}
        />
      </Routes>
    </>
  );
}

export default App;
