import React from 'react';
import styles from '../../sass/Module/Balance.module.css';

const Balance = () => {
  return (
    <div className={styles.balanceContainer}>
      <p className={styles.balanceTitle}>Your Balance</p>
      <div className={styles.remainBalance}>
        <div>RON 140.00</div>
      </div>
    </div>
  );
};

export default Balance;
