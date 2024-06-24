import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginRegisterForm from '../Components/LoginRegisterForm/LoginRegisterForm';
import { loginThunk } from '../../redux/auth/operations';
import { loginSchema } from '../../Schema/loginSchema';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/authSlice';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = async (data) => {
   await dispatch(loginThunk(data));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard'); // Redirecționează către Dashboard dacă utilizatorul este autentificat
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <LoginRegisterForm
        formType='login'
        onDataSubmit={handleSubmit}
        schema={loginSchema}
      />
    </>
  );
};

export default Login;
