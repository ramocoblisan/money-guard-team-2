import * as yup from 'yup';

export const registerSchema = yup
  .object({
    username: yup.string().required(),
    password: yup
      .string()
      .required()
      .min(6, 'Must be more then 6 symbols')
      .max(12, 'Must be less then 12 symbols'),
    email: yup.string().required().email('Email is not valid'),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required();
