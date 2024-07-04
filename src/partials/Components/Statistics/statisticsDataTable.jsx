import React from 'react';
import * as styles from '../../../sass/Module/statisticsDataTable.module.scss';
import { colors } from './statiscticsColors';

const DataTable = ({ reduxData }) => {
  const categoriesSummary = reduxData && reduxData.categoriesSummary ? reduxData.categoriesSummary : [];
  const expenseSummary = reduxData && reduxData.expenseSummary ? reduxData.expenseSummary : 0;
  const incomeSummary = reduxData && reduxData.incomeSummary ? reduxData.incomeSummary : 0;

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.headText}>
          <span>Category</span>
        </div>
        <div className={styles.headText}>
          <span>Sum</span>
        </div>
      </div>
      <div className={styles.body}>
        {categoriesSummary
          .filter(category => category.total !== 0)
          .map(category => {
            const boxColor = colors.find(color => color.name === category.name);
            return (
              <div className={styles.styledTr} key={category.name}>
                <div className={styles.styledTdCat}>
                  <div className={styles.colorBox} style={{ '--color': boxColor ? boxColor.color : '#000' }} />
                  <div className={styles.rowText}>
                    <span>{category.name}</span>
                    <div className={styles.styledTdSum}>{Math.abs(category.total).toFixed(2)}</div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className={styles.footer}>
        <div className={styles.expenses}>
          <span>Expenses:</span>
          <div className={`${styles.styledTdTotal} ${styles.expenses}`}>
            {Math.abs(expenseSummary).toFixed(2)}
          </div>
        </div>
        <div className={styles.income}>
          <span>Income:</span>
          <div className={`${styles.styledTdTotal} ${styles.income}`}>
            {incomeSummary.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;