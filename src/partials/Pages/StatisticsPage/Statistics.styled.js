import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const DonutContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

export const Balance = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
`;

export const StatSection = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  gap: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const RightSideStatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const DatePickerNoTransaction = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
`;
export const DataWrapper = styled.div`
  width: 100%;
  padding-bottom: 45px;
`;

export const TitleStyled = styled.h1`
  color: #fff;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  align-self: flex-start;
`;

export const NoTransactionsMessage = styled.p`
  color: #fff;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;

export const ExpenseIncomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const ExpenseIncomeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;
`;

export const ExpenseIncomeLabel = styled.span`
  font-size: 1rem;
  margin-bottom: 5px;
  color: #fff;
`;

export const ExpenseIncomeValue = styled.span`
  font-size: 1.5rem;
  color: #fff;
`;

export const CategorySumWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 40px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 320px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.05); 
  border-radius: 10px;
`;

export const CategorySumItem = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  flex: 1;
`;

export const DataTableWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const ChartTitle = styled.h2`
  color: #fff;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const PieChartContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const PieChartOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
`;

export const PlaceholderPieChart = styled.div`
  width: 100%;
  height: 300px;
  background-color: #39424e;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlaceholderText = styled.p`
  color: #ccc;
  font-size: 1.2rem;
  font-weight: bold;
`;
