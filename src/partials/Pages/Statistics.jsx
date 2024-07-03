import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getStatistics } from '../../redux/statistics/statisticsOperations';
import { selectCategories, selectStatisticsData } from '../../redux/statistics/statisticsSelectors';
import DataTable from '../Components/Statistics/statisticsDataTable';
import DatePicker from '../Components/Statistics/datePicker';
import StatisticsChart from '../Components/Statistics/statisticsChart';
import { css } from '@emotion/react';
import styles from '../../sass/Module/Statistics.module.scss';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const StatisticsPage = () => {
  const dispatch = useDispatch();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [query, setQuery] = useState('');

  const reduxData = useSelector(selectStatisticsData);
  const categories = useSelector(selectCategories);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    setQuery(generateParams(selectedYear, selectedMonth));
  }, [selectedYear, selectedMonth]);

  useEffect(() => {
    if (query) {
      setLoading(true);
      dispatch(getStatistics(query))
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    }
  }, [query, dispatch]);

  const handleYearChange = (event) => {
    setSelectedYear(event.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.value);
  };

  function generateParams(year, month) {
    const params = new URLSearchParams();
    params.append('year', year);
    params.append('month', month);
    return params.toString();
  }

  useEffect(() => {
    document.title = 'Statistics';
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.statSection}>
        <div className={styles.leftSideWrapper}>
          <h1 className={styles.titleStyled}>Statistics</h1>
          <div className={styles.chartWrapper}>
            <StatisticsChart reduxData={reduxData} categories={categories} />
          </div>
        </div>
        <div className={styles.rightSideStatWrapper}>
          {categories && reduxData ? (
            reduxData.categoriesSummary.length > 0 ? (
              <>
                <div className={styles.datePickerWrapper}>
                  <DatePicker
                    getYear={handleYearChange}
                    getMonth={handleMonthChange}
                    selectedMonth={selectedMonth}
                    selectedYear={selectedYear}
                  />
                </div>
                <div className={styles.dataTableWrapper}>
                  <DataTable reduxData={reduxData} />
                </div>
              </>
            ) : (
              <>
                <div className={styles.datePickerNoTransaction}>
                  <DatePicker
                    getYear={handleYearChange}
                    getMonth={handleMonthChange}
                    selectedMonth={selectedMonth}
                    selectedYear={selectedYear}
                  />
                </div>
                <p className={styles.noTransactionsMessage}>
                  You don't have any transactions in this period.
                </p>
              </>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
