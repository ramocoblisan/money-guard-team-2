import React from "react";

import * as style from "../../sass/Module/LoginRegisterForm.module.css";
import svg from "../../images/svg/sprite.svg"

const InputField=({errors, name, className, register, placeholder})=>{
    return(
        <>
        <div className={style.error_container}>
            <label className={style.name_label}>
                {name==="username"?
                (<div className={style.name_user_icon}>
                    <svg className={style.svg_name}>
                    <use xlinkHref={`${svg}#icon-user`}></use>
                    </svg>
                </div>):
                (<div className={style.icon_email_cont}>
                    <svg className={style.svg_name}>
                      <use xlinkHref={`${svg}#icon-email`}></use>
                    </svg>
                  </div>)}
                  <input className={style.name_input} 
                  type="text" 
                  {...register(name)} 
                  placeholder={placeholder}
                  autoComplete="none" />
            </label>{''}
            {errors?.[name] && (
                <span className={style[className]}>
                {errors[name].message}
            </span>)}
        </div>

        </>
    );
};

export default InputField;