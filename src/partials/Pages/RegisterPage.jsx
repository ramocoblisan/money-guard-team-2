import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginRegisterForm from '../Components/LoginRegisterForm/LoginRegisterForm';
import { registerThunk } from '../../redux/auth/operations';
import { registerSchema } from '../../Schema/registerShema';
import * as style from '../../sass/Module/RegisterPage.module.scss';
import { selectIsLoggedIn } from '../../redux/auth/authSlice';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  


  const handleRegister = async (data) => {
    await dispatch(registerThunk(data));
    
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard'); 
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className={style?.registerWrapper}>
      <LoginRegisterForm
        onDataSubmit={handleRegister}
        formType="register"
        schema={registerSchema}
      />
    </div>
  );
};

export default Register;
