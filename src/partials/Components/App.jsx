import React, { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { RestrictedRoute } from '../../authRoutes/RestrictedRoute';
import BackupHome from '../Pages/BackupHome';
import Register from '../Pages/RegisterPage';
import Login from '../Pages/LoginPage';
import Dashboard from '../Pages/DashboardPage';

const StatisticsPage = lazy(() => import('../Pages/StatisticsPage/Statistics'));

const basename = process.env.NODE_ENV === 'production' ? '/money-guard-team-2' : '/';

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<BackupHome />} />
        <Route path="/home" element={<BackupHome />} />
        {/* <Route
          path="/register"
          element={<RestrictedRoute component={Register} redirectTo="/" />}
        /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard/*" 
          element={<RestrictedRoute component={Dashboard} redirectTo="/login" />}
        />
        <Route path="/statistics" element={
          <Suspense fallback={<div>Loading...</div>}>
            <StatisticsPage />
          </Suspense>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
