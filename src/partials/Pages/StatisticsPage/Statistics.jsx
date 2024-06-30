import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getStatistics } from '../../../redux/statistics/statisticsOperations';
import { selectCategories, selectStatisticsData } from '../../../redux/statistics/statisticsSelectors';
import DataTable from '../../Components/Statistics/statisticsDataTable';
import DatePicker from '../../Components/Statistics/datePicker';
import StatisticsChart from '../../Components/Statistics/statisticsChart';
import { PieChart } from 'react-minimal-pie-chart';
import { css } from '@emotion/react';
import {
  PageContainer,
  StatSection,
  LeftSideWrapper,
  RightSideStatWrapper,
  DatePickerWrapper,
  TitleStyled,
  NoTransactionsMessage,
  ExpenseIncomeWrapper,
  ExpenseIncomeItem,
  ExpenseIncomeLabel,
  ExpenseIncomeValue,
  CategorySumWrapper,
  CategorySumItem,
  DataTableWrapper,
  ChartWrapper,
  ChartTitle,
  PieChartContainer,
} from './Statistics.styled';

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
    <PageContainer>
      <StatSection>
        <LeftSideWrapper>
          <TitleStyled>Statistics</TitleStyled>
          <DatePickerWrapper>
            <DatePicker
              getYear={handleYearChange}
              getMonth={handleMonthChange}
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
            />
          </DatePickerWrapper>
          <CategorySumWrapper>
            <CategorySumItem>Category</CategorySumItem>
            <CategorySumItem>Sum</CategorySumItem>
          </CategorySumWrapper>
          <ExpenseIncomeWrapper>
            <ExpenseIncomeItem>
              <ExpenseIncomeLabel>Expenses:</ExpenseIncomeLabel>
              <ExpenseIncomeValue>Ron {reduxData ? reduxData.totalExpenses.toFixed(2) : '0.00'}</ExpenseIncomeValue>
            </ExpenseIncomeItem>
            <ExpenseIncomeItem>
              <ExpenseIncomeLabel>Income:</ExpenseIncomeLabel>
              <ExpenseIncomeValue>Ron {reduxData ? reduxData.totalIncome.toFixed(2) : '0.00'}</ExpenseIncomeValue>
            </ExpenseIncomeItem>
          </ExpenseIncomeWrapper>
        </LeftSideWrapper>
        <RightSideStatWrapper>
          {categories && reduxData ? (
            reduxData.categoryExpenses.length > 0 ? (
              <>
                <ChartWrapper>
                  <ChartTitle>Statistics Chart</ChartTitle>
                  <StatisticsChart reduxData={reduxData} categories={categories} />
                </ChartWrapper>
                <DataTableWrapper>
                  <ChartTitle>Statistics Table</ChartTitle>
                  <DataTable reduxData={reduxData} />
                </DataTableWrapper>
              </>
            ) : (
              <NoTransactionsMessage>
                You don't have any transactions in this period.
              </NoTransactionsMessage>
            )
          ) : null}
          
          <ChartWrapper>
            <PieChartContainer>
              <PieChart
                data={[
                  { title: 'Ron', value: 1, color: 'rgba(128, 128, 128, 0.3)' },
                ]}
                lineWidth={15}
                animate
                animationDuration={900}
                animationEasing="ease-out"
                label={({ dataEntry }) => dataEntry.title}
                labelStyle={{
                  fontSize: '25px',
                  fontFamily: 'sans-serif',
                  fill: '#ffffff', 
                }}
                labelPosition={0}
              />
            </PieChartContainer>
          </ChartWrapper>
        </RightSideStatWrapper>
      </StatSection>
    </PageContainer>
  );
};

export default StatisticsPage;
