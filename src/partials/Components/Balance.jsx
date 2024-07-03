import React from 'react';
import * as styles from '../../sass/Module/Balance.module.scss';

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