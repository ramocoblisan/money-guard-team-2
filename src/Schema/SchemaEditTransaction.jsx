import * as yup from 'yup';

export const editTransactionShema = yup.object({
  comment: yup.string().min(5, 'Give more details'),
  transactionDate: yup.date(),
  amount: yup
    .number()
    .typeError('Please enter the number')
    .min(1, 'Number must be at least 1 character'),
});