import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ExitModal from '../ExitModal/ExitModal';
import { selectUser } from '../../redux/auth/authSlice';
import { useModal } from '../../hooks/useModal';
import { useDashboard } from '../../hooks/useDashboard';

import sprite from '../images/svg/sprite.svg';
import style from '../sass/Module/Header.module.css';

const Header = () => {
  const { isOpen, toggle } = useModal();
  const { isBigScreenOrTablet } = useDashboard();
  const user = useSelector(selectUser);

  const index = user.email.indexOf('@');
  const userEmail = user.email.slice(0, index);

  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <Link to="/" className={style.logo}>
          {isBigScreenOrTablet ? (
            <svg width="24" height="23">
              <use xlinkHref={`${sprite}#icon-logo`}></use>
            </svg>
          ) : (
            <svg width="17" height="17">
              <use xlinkHref={`${sprite}#icon-logo`}></use>
            </svg>
          )}
          Money Guard
        </Link>
        <div className={style.wrap}>
          <p className={style.user}>{userEmail}</p>
          <button className={style.button} onClick={toggle}>
            <svg width="18" height="18" className={style.icon}>
              <use href={`${sprite}#icon-exit`}></use>
            </svg>
            {isBigScreenOrTablet ? 'Exit' : ''}
          </button>
        </div>
        {isOpen && <ExitModal closeModal={toggle} />}
      </div>
    </header>
  );
};

export default Header;
