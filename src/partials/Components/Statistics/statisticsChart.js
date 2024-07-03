import { ArcElement, Tooltip, Legend, Chart } from 'chart.js';
import { colors } from './statiscticsColors';
import styles from '../../../sass/Module/StatisticsChart.module.scss';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

const StatisticsChart = ({ reduxData, categories }) => {
  if (!reduxData || !reduxData.categoriesSummary || reduxData.categoriesSummary.length === 0) {
    return <div>No data available</div>;
  }

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
    <div className={styles.donutContainer}>
      <div className={styles.balance}>
        RON {reduxData.periodTotal.toFixed(2)}
      </div>
      <Doughnut className={styles.doughnutSt} data={chartData} options={options} />
    </div>
  );
};

export default StatisticsChart;
