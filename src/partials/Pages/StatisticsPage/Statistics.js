import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getStatistics } from '../../../redux/statistics/statisticsOperations';
import { selectCategories, selectStatisticsData } from '../../../redux/statistics/statisticsSelectors';
import { DataTable } from '../../Components/Statistics/statisticsDataTable';
import DatePicker from '../../Components/Statistics/DatePicker';
import StatisticsChart from '../../Components/Statistics/statisticsChart';

import {
  StatSection,
  RightSideStatWrapper,
  DatePickerWrapper,
  DataWrapper,
  TitleStyled,
  LeftSideWrapper,
  NoTransactionsMessage,
} from './Statistics.styled';

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
    <StatSection>
      <RightSideStatWrapper>
        <LeftSideWrapper>
          <TitleStyled>Statistics</TitleStyled>
          {categories && reduxData && !loading ? (
            reduxData.categoryExpenses.length > 0 ? (
              <StatisticsChart reduxData={reduxData} categories={categories} />
            ) : (
              <NoTransactionsMessage>
                You don't have any transactions in this period.
              </NoTransactionsMessage>
            )
          ) : null}
        </LeftSideWrapper>
        <DataWrapper>
          <DatePickerWrapper>
            <DatePicker
              getYear={handleYearChange}
              getMonth={handleMonthChange}
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
            />
          </DatePickerWrapper>
          {categories && reduxData && !loading ? (
            reduxData.categoryExpenses.length > 0 ? (
              <DataTable reduxData={reduxData} />
            ) : (
              <NoTransactionsMessage>
                You don't have any transactions in this period.
              </NoTransactionsMessage>
            )
          ) : null}
        </DataWrapper>
      </RightSideStatWrapper>
    </StatSection>
  );
};

export default StatisticsPage;
