import * as yup from 'yup';

export const addTransactionShema = yup.object({
  comment: yup
    .string()
    .required(`Describe your transaction`)
    .min(5, 'Give more details'),
  transactionDate: yup.date(),
  amount: yup
    .number()
    .typeError('Please enter the number')
    .min(1, 'Number must be at least 1 character')
    .required('Sum is required'),
});