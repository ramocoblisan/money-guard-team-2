
import { ArcElement, Tooltip, Legend, Chart } from 'chart.js';
import { colors } from './statiscticsColors';
import { Balance, DonutContainer, DoughnutSt } from './statisticsChart.styled';

Chart.register(ArcElement, Tooltip, Legend);

const StatisticsChart = ({ reduxData, categories }) => {
  if (!reduxData || !reduxData.categoriesSummary || reduxData.categoriesSummary.length === 0) {
    return <div>No data available</div>;
  }

  // Extrage categoriile și totalurile din categoriesSummary
  const chartCategories = reduxData.categoriesSummary.map(category => category.name);
  const categoryExpenses = reduxData.categoriesSummary.map(category => ({
    name: category.name,
    total: category.total
  }));

  const chartData = {
    labels: chartCategories,
    datasets: [
      {
        data: categoryExpenses.map(category => category.total),
        backgroundColor: chartCategories.map(item => {
          const colorInfo = colors.find(colorItem => colorItem.name === item);
          return colorInfo ? colorInfo.color : '#ffff';
        }),
        borderWidth: 0.5,
        cutout: '60%',
      },
    ],
  };

  const options = {
    borderRadius: 2,
    hoverBorderWidth: 1,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <DonutContainer>
      <Balance
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        ₴ {reduxData.periodTotal.toFixed(2)}
      </Balance>
      <DoughnutSt data={chartData} options={options} />
    </DonutContainer>
  );
};

export default StatisticsChart;
