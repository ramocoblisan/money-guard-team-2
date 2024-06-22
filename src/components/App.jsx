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
      {/* <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/register" replace />} />
          <Route path="home" element={<BackupHome />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={Register}
                redirectTo="/dashboard/home"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={LoginPage}
                redirectTo="/dashboard/home"
              />
            }
          />
          <Route
            path="dashboard"
            element={<RestrictedRoute component={DashboardPage} redirectTo="/login" />}
          >
            <Route path="/" element={<Navigate to="home" replace />} />
            <Route path="home" element={<HomePage />} />
            <Route path="statistics" element={<StatisticsPage />} />
          </Route>
        </Routes>
      </Suspense> */}
      Loading ....
    </>
  );
}

export default App;
