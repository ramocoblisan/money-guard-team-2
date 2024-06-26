import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from '../Components/Header';
import Home from './HomePage';
import Statistics from './StatisticsPage/Statistics';
import Balance from '../Components/Balance';
import Currency from '../Components/Currency';
import { Link, Outlet } from 'react-router-dom';
import * as style from '../../sass/Module/DashboardPage.module.scss';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className={style.dashboardContent}>
        <div style={{ display: 'flex', margin: '80px' }}>
          <nav style={{ marginRight: '100px' }}>
            <ul>
              <li><Link to="/dashboard/home">Home</Link></li>
              <li><Link to="/dashboard/statistics">Statistics</Link></li>
            </ul>
          </nav>
          <div style={{ flexGrow: 1 }}>
            <Outlet />
          </div>
        </div>
        <Balance />
        <Currency />
      </div>
    </div>
  );
};

export default Dashboard;