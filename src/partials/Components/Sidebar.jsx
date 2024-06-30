import React from 'react';
import * as style from '../../sass/Module/Sidebar.module.css';
import { Link } from 'react-router-dom';
import { LuLineChart, LuHome } from 'react-icons/lu';
import Balance from '../Components/Balance';
import Currency from '../Components/Currency';

const Sidebar = () => {
  return (
    <div className={style.sidebarContainer}>
      <nav style={{ marginRight: '100px' }}>
        <ul className={style.menu}>
          <li>
            <Link to="/dashboard/home">
              <div className={style.navItem}>
                <LuHome />
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/statistics">
              <div className={style.navItem}>
                <LuLineChart />
                Statistics
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <Balance />
      <Currency />
    </div>
  );
};

export default Sidebar;