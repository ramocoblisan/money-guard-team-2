import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../Components/Header';
import Home from './HomePage';
import Statistics from './StatisticsPage/Statistics';
import * as styles from '../../sass/Module/DashboardPage.module.scss';
import Sidebar from '../Components/Sidebar';

const Dashboard = () => {
  return (
    <div className={styles.containerPage}>
      <Header />
      <div className={styles.dashboardPage}>
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>
        <div className={styles.rightSide}>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="*" element={<Navigate to="home" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
