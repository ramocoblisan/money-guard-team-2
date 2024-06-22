import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from '../authRoutes/RestrictedRoute';

import Loader from '../components/Loader';
import Register from '../partials/Pages/RegisterPage';
import BackupHome from '../partials/Pages/BackupHome';
import LoginPage from '../partials/Pages/LoginPage';

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<BackupHome />} />
          <Route path="home" element={<BackupHome />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={Register} redirectTo="/home" />
            }
          />
        </Routes>
      </Suspense>
      Loading ....
    </>
  );
}

export default App;
