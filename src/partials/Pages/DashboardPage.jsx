import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Home from './HomePage';
import Statistics from './StatisticsPage';
import Balance from '../components/Balance';
import Currency from '../components/Currency';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Header />
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
  );
};

export default Dashboard;