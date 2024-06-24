import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from 'react-router-dom';

import * as style from '../../../sass/Module/LoginRegisterForm.module.scss';
import svg from '../../../images/svg/sprite.svg';

import InputField from './InputField';
import PassInputField from './PassInputField';

// const LoginRegisterForm = ({ onDataSubmit, formType, schema }) => {
//   const [size, setSize] = useState(0);
//   useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const {
//     register,
//     reset,
//     handleSubmit,
//     getValues,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const submit = dataS => {
//     const { passwordConfirmation, ...data } = dataS;
//     onDataSubmit(FormData);
//     reset();
//   };
//   return (
//     <>
//       <section
//         className={
//           formType === 'login'
//             ? `${style.login_register_section}`
//             : `${style.register_login_section}`
//         }
//       >
//         {formType === 'login' ? (
//           <>
//             <div className={style.background_container_login}>
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//             </div>{' '}
//             <div className={style.background_img_container_login}>
//               <div></div>
//               <div></div>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className={style.background_container_registration}>
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//             </div>
//             <div className={style.background_img_container_registration}>
//               <div></div>
//               <div></div>
//             </div>
//           </>
//         )}

//         <div
//           className={
//             formType === 'login'
//               ? style.form_container_login
//               : style.form_container_register
//           }
//         >
//           <a
//             href=""
//             className={style.logo_wrapper}
//             style={{ paddingBottom: formType === 'login' ? '11px' : '0px' }}
//           >
//             {size < 768 ? (
//               <svg className={style.svg_logo}>
//                 <use xlinkHref={`${svg}#icon-logo`} />
//               </svg>
//             ) : (
//               <svg className={style.svg_icon_logo}>
//                 <use xlinkHref={`${svg}#icon-logo`} />
//               </svg>
//             )}
//             Money Guard
//           </a>
//           <form className={style.form} onSubmit={handleSubmit(submit)}>
//             {formType === 'register' && (
//               <InputField
//                 register={register}
//                 errors={errors}
//                 name="username"
//                 placeholder="Name"
//                 className="username"
//               />
//             )}
//             <InputField
//               register={register}
//               errors={errors}
//               name="email"
//               placeholder="E-mail"
//               className="email"
//             />
//             <PassInputField
//               register={register}
//               errors={errors}
//               name="password"
//               placeholder="Password"
//               getValues={getValues}
//               // onChange={e => handleChange(e)}
//               formType={formType}
//               className="password"
//             />
//             {formType === 'register' && (
//               <>
//                 <PassInputField
//                   register={register}
//                   errors={errors}
//                   name="passwordConfirmation"
//                   placeholder="Confirm password"
//                   getValues={getValues}
//                   formType={formType}
//                   className="cpassword"
//                 />
//               </>
//             )}
//             {formType === 'login' ? (
//               <div className={style.button_cont}>
//                 <button className={style.submit_btn} type="submit">
//                   log in
//                 </button>
//                 <NavLink className={style.inactive_btn} to="/register">
//                   register
//                 </NavLink>
//               </div>
//             ) : (
//               <div className={style.button_cont}>
//                 <button className={style.submit_btn} type="submit">
//                   register
//                 </button>
//                 <NavLink className={style.inactive_btn} to="/login">
//                   log in
//                 </NavLink>
//               </div>
//             )}{' '}
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };


const LoginRegisterForm = ({ onDataSubmit, formType, schema }) => {
  const [size, setSize] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = dataS => {
    const { passwordConfirmation, ...data } = dataS; // Exclude passwordConfirmation
    onDataSubmit(data); // Trimite datele corecte
    reset();
  };

  return (
    <>
      <section
        className={
          formType === 'login'
            ? `${style.login_register_section}`
            : `${style.register_login_section}`
        }
      >
        {formType === 'login' ? (
          <>
            <div className={style.background_container_login}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={style.background_img_container_login}>
              <div></div>
              <div></div>
            </div>
          </>
        ) : (
          <>
            <div className={style.background_container_registration}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={style.background_img_container_registration}>
              <div></div>
              <div></div>
            </div>
          </>
        )}

        <div
          className={
            formType === 'login'
              ? style.form_container_login
              : style.form_container_register
          }
        >
          <a
            href=""
            className={style.logo_wrapper}
            style={{ paddingBottom: formType === 'login' ? '11px' : '0px' }}
          >
            {size < 768 ? (
              <svg className={style.svg_logo}>
                <use xlinkHref={`${svg}#icon-logo`} />
              </svg>
            ) : (
              <svg className={style.svg_icon_logo}>
                <use xlinkHref={`${svg}#icon-logo`} />
              </svg>
            )}
            Money Guard
          </a>
          <form className={style.form} onSubmit={handleSubmit(submit)}>
            {formType === 'register' && (
              <InputField
                register={register}
                errors={errors}
                name="username"
                placeholder="Name"
                className="username"
              />
            )}
            <InputField
              register={register}
              errors={errors}
              name="email"
              placeholder="E-mail"
              className="email"
            />
            <PassInputField
              register={register}
              errors={errors}
              name="password"
              placeholder="Password"
              getValues={getValues}
              formType={formType}
              className="password"
            />
            {formType === 'register' && (
              <PassInputField
                register={register}
                errors={errors}
                name="passwordConfirmation"
                placeholder="Confirm password"
                getValues={getValues}
                formType={formType}
                className="cpassword"
              />
            )}
            {formType === 'login' ? (
              <div className={style.button_cont}>
                <button className={style.submit_btn} type="submit">
                  log in
                </button>
                <NavLink className={style.inactive_btn} to="/register">
                  register
                </NavLink>
              </div>
            ) : (
              <div className={style.button_cont}>
                <button className={style.submit_btn} type="submit">
                  register
                </button>
                <NavLink className={style.inactive_btn} to="/login">
                  log in
                </NavLink>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginRegisterForm;
