import React from 'react';

import style from '../sass/Module/Form.module.css';

const FormInput = ({ name, register, errors, placeholder, className }) => {
  return (
    <div className={style.inputContainer}>
      <input
        autoComplete="off"
        className={className}
        {...register(name)}
        placeholder={placeholder}
      />
      {errors[name] && <span>{errors[name].message}</span>}
    </div>
  );
};

export default FormInput;