import React, { useEffect, useState } from 'react';
import * as style from '../../sass/Module/Sidebar.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LuLineChart, LuHome } from 'react-icons/lu';
import Balance from '../Components/Balance';
import Currency from '../Components/Currency';

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className={style.sidebarContainer}>
      <div className={style.wrapper}>
        <nav style={{ marginRight: '100px' }}>
          <ul className={style.menu}>
            <li>
              <Link to="/dashboard/home">
                <div
                  className={`${style.navItem} ${
                    location.pathname === '/dashboard/home' ? style.active : ''
                  }`}
                >
                  <LuHome className={style.iconMenu} />
                  <p className={style.textMenu}>Home</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/statistics">
                <div
                  className={`${style.navItem} ${
                    location.pathname === '/dashboard/statistics'
                      ? style.active
                      : ''
                  }`}
                >
                  <LuLineChart className={style.iconMenu} />
                  <p className={style.textMenu}>Statistics</p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <Balance />
      </div>
      <Currency />
    </div>
  );
};

export default Sidebar;
