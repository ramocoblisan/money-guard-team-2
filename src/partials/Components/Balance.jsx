import React from 'react';
import * as styles from '../../sass/Module/Balance.module.scss';
import { useSelector } from 'react-redux';
import { selectTotalAmount } from '../../redux/transactions/transactionsSlice';


const Balance = () => {
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <div>
      <div className={styles.balanceContainer}>
        <div className={styles.balanceTitle}>YOUR BALANCE</div>
        <div className={styles.remainBalance}>RON {totalAmount.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Balance;