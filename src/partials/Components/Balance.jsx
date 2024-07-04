import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../sass/Module/Balance.module.scss';
import { selectTotalAmount } from '../../redux/transactions/transactionsSlice';

const CurrentBalance = () => {
  const totalAmount = useSelector(selectTotalAmount);
  console.log('Total Amount:', totalAmount); // Debugging

  return (
    <div className={styles.wrapper}>
      <div className={styles.balanceContainer}>
        <div className={styles.balanceTitle}>YOUR BALANCE</div>
        <div className={styles.remainBalance}>RON {totalAmount.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CurrentBalance;
