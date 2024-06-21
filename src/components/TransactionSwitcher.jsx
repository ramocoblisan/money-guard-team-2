import React, { useState } from 'react';
import styles from '../sass/Module/TransactionSwitcher.module.css';

const TransactionSwitcher = ({ onChange }) => {
  const [isIncome, setIsIncome] = useState(false);

  const handleSwitch = () => {
    setIsIncome(!isIncome);
    onChange(!isIncome);
  };
  return (
    <div className={styles['transaction-switcher']}>
      <span className={isIncome ? styles.activeIncome : styles.labelIncome}>
        Income
      </span>

      <label
        className={`${styles.switch} ${
          isIncome ? styles.income : styles.expense
        }`}
      >
        <input type="checkbox" onChange={handleSwitch} checked={!isIncome} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <span className={!isIncome ? styles.activeExpense : styles.labelExpense}>
        Expense
      </span>
    </div>
  );
};

export default TransactionSwitcher;