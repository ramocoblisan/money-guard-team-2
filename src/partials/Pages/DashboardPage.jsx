import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from '../Components/Header';
import Home from './HomePage';
import Statistics from './StatisticsPage';
import Balance from '../Components/Balance';
import Currency from '../Components/Currency';
import { Link } from 'react-router-dom';
import * as style from '../../sass/Module/DashboardPage.module.scss';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className={style.dashboardContent}>
        <div style={{ display: 'flex' , margin: '20px' }}>
          <nav style={{ marginRight: '100px' }}>
            <ul>
              <li><Link to="/dashboard/home">Home</Link></li>
              <li><Link to="/dashboard/statistics">Statistics</Link></li>
            </ul>
          </nav>
          <div style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="/" element={<Navigate to="home" />} />
            </Routes>
          </div>
        </div>
        <Balance />
        <Currency />
      </div>
    </div>
  );
};

export default Dashboard;