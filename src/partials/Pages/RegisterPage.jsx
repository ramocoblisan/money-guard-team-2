import React from 'react';
import { useDispatch } from 'react-redux';

import LoginRegisterForm from '../Components/LoginRegisterForm/LoginRegisterForm';

import { registerThunk } from '../../redux/auth/operations';
import { registerSchema } from '../../Schema/registerShema';

import * as style from '../../sass/Module/RegisterPage.module.scss';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(registerThunk(data));
  };

  return (
    <>
      <LoginRegisterForm
        className={style?.registerWrapper}
        onDataSubmit={handleSubmit}
        formType={'register'}
        schema={registerSchema}
      />
    </>
  );
};

export default Register;
