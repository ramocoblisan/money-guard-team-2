import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { getCurrency } from '../../redux/currency/operations';
import {
  selectorCurrency,
  selectorIsLoading,
  selectorError,
} from '../../redux/currency/selectors';
import * as styles from '../../sass/Module/Currency.module.scss';
import CurrencyDiagram from './CurrencyDiagram';
import { useDashboard } from '../../hooks/ueDashboard';

const ExchangeRates = () => {
  const dispatch = useDispatch();
  const currencyData = useSelector(selectorCurrency);
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);

  const { isBigScreen, isTabletOrMobile } = useDashboard();

  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      Notiflix.Notify.failure('Error fetching currency data!');
    }
  }, [error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const usdToRon = currencyData.rates?.RON;
  const eurToUsd = currencyData.rates?.EUR;
  const eurToRon = eurToUsd * usdToRon;

  if (!usdToRon || !eurToRon) {
    return <div>No data available</div>;
  }

  const displayedRates = {
    USD: usdToRon,
    EUR: eurToRon,
  };

  const saleRates = {
    USD: usdToRon * 0.98,
    EUR: eurToRon * 0.98,
  };

  return (
    <div>
      <table className={styles.currencyTable}>
        <thead className={styles.currencyTableWrapper}>
          <tr className={styles.currencyTableHead}>
            <th className={styles.currencyTableHeadItem}>Currency</th>
            <th className={styles.currencyTableHeadItem}>Purchase</th>
            <th className={styles.currencyTableHeadItem}>Sale</th>
          </tr>
        </thead>
        <tbody className={styles.tableBodyList}>
          {Object.keys(displayedRates).map(currency => {
            const purchaseRate = displayedRates[currency] * 0.98;
            const saleRate = displayedRates[currency] * 1.02;
            return (
              <tr className={styles.tableBody} key={currency}>
                <td className={styles.tableItem}>{currency}</td>
                <td className={styles.tableItem}>{purchaseRate.toFixed(2)}</td>
                <td className={styles.tableItem}>{saleRate.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CurrencyDiagram
        currency={saleRates}
        isBigScreen={isBigScreen}
        isTabletOrMobile={isTabletOrMobile}
      />
    </div>
  );
};

export default ExchangeRates;