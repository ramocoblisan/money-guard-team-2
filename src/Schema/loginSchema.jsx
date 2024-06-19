import * as yup from 'yup';

export const loginSchema = yup
  .object({
    password: yup
      .string()
      .required()
      .min(6, 'Must be more then 6 symbols')
      .max(12, 'Must be less then 12 symbols'),
    email: yup.string().required().email('Email is not valid'),
  })
  .required();
