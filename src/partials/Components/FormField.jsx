import React from 'react';

import * as style from "../../sass/Module/Form.module.scss";

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