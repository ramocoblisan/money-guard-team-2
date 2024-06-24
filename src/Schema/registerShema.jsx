import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  username: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const validateRegistrationData = async (data) => {
  try {
    await registerSchema.validate(data, { abortEarly: false });
    return null; // No errors
  } catch (validationErrors) {
    return validationErrors.inner.map(error => error.message);
  }
};