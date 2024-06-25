import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TransactionTable from '../Components/TransactionTable';


import { fetchTransactionsDataThunk } from '../../redux/transactions/operations';
import useResize from '../../hooks/useResize';

const Home = () => {
  const dispatch = useDispatch();

  const screenWidth = useResize().windowWidth;

  useEffect(() => {
    dispatch(fetchTransactionsDataThunk());
  }, [dispatch]);

  return (
    <>
      {screenWidth < 768 && <Balance />}
      <TransactionTable />
    </>
  );
};

export default Home;