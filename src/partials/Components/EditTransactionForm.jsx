import React from 'react';
import { useDispatch } from 'react-redux';

import  {Form}  from './Form';
import { editTransactionThunk } from '../../redux/transactions/operations';
import { editTransactionShema } from '../../Schema/SchemaEditTransaction';

export function EditTransactionForm({ categories, editContent, toggle }) {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(
      editTransactionThunk({ content: { ...data }, id: editContent.id })
    );
    toggle()
  };

  return (
    <Form
      schema={editTransactionShema}
      toggle={toggle}
      content={editContent.content}
      categories={categories}
      onDataSubmit={handleSubmit}
      typeForm="edit"
    />
  );
}