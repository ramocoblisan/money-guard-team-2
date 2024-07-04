import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../redux/auth/authSlice';
import { logoutThunk } from '../../redux/auth/operations';

import sprite from '../../images/svg/sprite.svg';
import * as style from "../../sass/Module/ExitModal.module.scss";

export const Exit = ({ closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutThunk());
    dispatch(logout());
    closeModal();
    navigate('/');
  };
  return (
    <div className={style.wrap}>
      <a href="" className={style.logo}>
        <svg width="36" height="36">
          <use xlinkHref={`${sprite}#icon-logo`}></use>
        </svg>
        Money Guard
      </a>
      <p className={style.text}>Are you sure you want to log out?</p>

      <button className="modalButtonColor" onClick={onLogout}>
        Logout
      </button>
      <button className="modalButton" onClick={closeModal}>
        Cancel
      </button>
    </div>
  );
};