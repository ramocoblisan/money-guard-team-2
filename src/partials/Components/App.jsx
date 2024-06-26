import React, { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import RestrictedRoute from '../../authRoutes/RestrictedRoute';
import PrivateRoute from '../../authRoutes/PrivateRoute';
import { useNavigate } from 'react-router-dom';

import BackupHome from '../Pages/BackupHome';
import Register from '../Pages/RegisterPage';
import Login from '../Pages/LoginPage';
import Dashboard from '../Pages/DashboardPage';
import Home from '../Pages/HomePage';
import StatisticsPage from '../Pages/StatisticsPage/Statistics'


const basename = process.env.NODE_ENV === 'production' ? '/money-guard-team-2' : '/';

function App() {

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<BackupHome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<PrivateRoute component={DashboardLayout} redirectTo="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const DashboardLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="statistics" element={<Suspense fallback={<div>Loading...</div>}><StatisticsPage /></Suspense>} />
      </Route>
    </Routes>
  );
};