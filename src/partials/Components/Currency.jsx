import React from 'react';
import styles from '../../sass/Module/Currency.module.css';

const Currency = () => {
  return (
    <div className={styles.currencyContainer}>
      <table>
        <tr className={styles.currencyTableHead}>
          <th>Currency</th>
          <th>Purchase</th>
          <th>Sale</th>
        </tr>
        <tr className={styles.currencyTableBody}>
          <td>USD</td>
          <td>40.35</td>
          <td>40.80</td>
        </tr>
        <tr className={styles.currencyTableBody}>
          <td>EUR</td>
          <td>43.20</td>
          <td>43.80</td>
        </tr>
      </table>
    </div>
  );
};

export default Currency;
