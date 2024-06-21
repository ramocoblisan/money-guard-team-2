import React from'react';
import style from "../../sass/Module/LoginRegisterForm.module.css";

const LoginProgress = ({password}) => {
  return (
    <div className={style.progress_container}>
      <div 
      className={style.progress_bar}
       password={password}
       minLength={6}></div>
    </div>
  );
};

export default LoginProgress;