import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../Components/Header';
import Home from './HomePage';
import Statistics from './Statistics';
import * as styles from '../../sass/Module/DashboardPage.module.scss';
import Sidebar from '../Components/Sidebar';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className={styles.dashboardPage}>
        <Sidebar />
        <div className={styles.rightSide}>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="*" element={<Navigate to="home" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
