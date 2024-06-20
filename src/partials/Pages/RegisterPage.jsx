import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginRegisterForm from '../../components/LoginRegisterForm/LoginRegisterForm';

import { registerThunk } from '../../redux/auth/operations';
import { registerSchema } from '../../Schema/registerShema';

import style from '../../sass/Module/RegisterPage.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(registerThunk(data));
  };

  return (
    <>
      <LoginRegisterForm
       className={style.registerWrapper}
        onDataSubmit={handleSubmit}
        formType={'register'}
        schema={registerSchema}
      />
    </>
  );
};

export default Register;
