import React from 'react';
import { useDispatch } from 'react-redux';

import { Form } from './Form';
import { addTransactionThunk } from '../../redux/transactions/operations';
import { addTransactionShema } from '../../Schema/SchemaAddTransaction';

export function AddTransactionForm({ categories, toggle }) {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(addTransactionThunk(data));
    toggle()
  };
  return (
    <Form
      schema={addTransactionShema}
      categories={categories}
      onDataSubmit={handleSubmit}
      toggle={toggle}
      typeForm="add"
    />
  );
}