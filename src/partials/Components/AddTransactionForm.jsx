import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from './Form';
import { addTransactionThunk } from '../../redux/transactions/operations';
import { addTransactionShema } from '../../Schema/SchemaAddTransaction';
import { fetchTransactionCategoriesThunk } from '../../redux/transactions/operations';
import { selectorCategoriesTr, selectorIsLoading, selectorError } from '../../redux/transactions/selectors';


export function AddTransactionForm({ toggle }) {
  const dispatch = useDispatch();
  const categories = useSelector(selectorCategoriesTr);
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);

  useEffect(() => {
    dispatch(fetchTransactionCategoriesThunk());
  }, [dispatch]);

  const handleSubmit = data => {
    dispatch(addTransactionThunk(data));
    toggle()
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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