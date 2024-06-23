import React, { useState } from 'react';
import LoginProgress from './LoginProgress';

import * as style from '../../../sass/Module/LoginRegisterForm.module.scss';
import svg from '../../../images/svg/sprite.svg';

import { PiEyeClosed, PiEyeThin } from 'react-icons/pi';

const PassInputField = ({
  register,
  errors,
  name,
  placeholder,
  getValues,
  formType,
  className,
}) => {
  const [type, setType] = useState('password');
  const [confPassword, setConfPassword] = useState('');

  function handleChange(evt) {
    setConfPassword(evt.target.value);
  }
  return (
    <>
      <div className={style.error_container}>
        <label className={style.password_label}>
          <div className={style.password_icon}>
            <svg className={style.svg_name}>
              <use xlinkHref={`${svg}#icon-lock`} />
            </svg>
          </div>
          <input
            autoComplete={name}
            {...register(name, {
              required: 'Password is required',
              validate: value =>
                value === getValues('password') || 'Passwords do not match',
            })}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            className={style.password_input}
          />{' '}
          <div
            className={style.eye}
            onClick={() => {
              setType(type === 'password' ? 'text' : 'password');
            }}
          >
            {type === 'password' ? (
              <PiEyeClosed style={{ color: 'rgba(255, 255, 255, 0.4)' }} />
            ) : (
              <PiEyeThin style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
            )}
          </div>
        </label>
        {errors?.[name] && (
          <span className={style[className]}>{errors[name].message}</span>
        )}
      </div>
      {name === 'password' && formType !== 'login' && (
        <LoginProgress password={confPassword} />
      )}
    </>
  );
};

export default PassInputField;
