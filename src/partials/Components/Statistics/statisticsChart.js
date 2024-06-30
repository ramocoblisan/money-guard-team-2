// import React from 'react';
// import { ArcElement, Tooltip, Legend, Chart } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
// import { colors } from './statiscticsColors';
// import { Balance, DonutContainer, DoughnutSt } from './statisticsChart.styled';

// Chart.register(ArcElement, Tooltip, Legend);

// const StatiscticsChart = ({ reduxData, categories }) => {
//   if (!reduxData || !reduxData.categoryExpenses) {
//     return <div>No data available</div>;
//   }

//   const chartData = {
//     labels: reduxData.categoryExpenses.map(category => category.name),
//     datasets: [
//       {
//         data: reduxData.categoryExpenses.map(category => Math.abs(category.total)),
//         backgroundColor: reduxData.categoryExpenses.map(category => {
//           const colorInfo = colors.find(colorItem => colorItem.name === category.name);
//           return colorInfo ? colorInfo.color : '#ffff';
//         }),
//         borderWidth: 0.5,
//         cutout: '60%',
//       },
//     ],
//   };

//   const options = {
//     borderRadius: 2,
//     hoverBorderWidth: 1,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         enabled: true,
//       },
//     },
//   };

//   return (
//     <DonutContainer>
//       <Balance
//         style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//         }}
//       >
//         ₴ {Math.abs(reduxData.expenseSummary).toFixed(2)}
//       </Balance>
//       <Doughnut data={chartData} options={options} />
//     </DonutContainer>
//   );
// };

// export default StatiscticsChart;

import { ArcElement, Tooltip, Legend, Chart } from 'chart.js';
import { colors } from './statiscticsColors';
import { Balance, DonutContainer, DoughnutSt } from './statisticsChart.styled';

Chart.register(ArcElement, Tooltip, Legend);

const StatisticsChart = ({ reduxData, categories }) => {
  if (!reduxData || !categories || !reduxData.categoryExpenses || reduxData.categoryExpenses.length === 0) {
    return <div>No data available</div>;
  }

  const chartData = {
    labels: categories,
    datasets: [
      {
        data: reduxData.categoryExpenses.map(category => category.total),
        backgroundColor: categories.map(item => {
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
        ₴ {reduxData.totalExpenses.toFixed(2)}
      </Balance>
      <DoughnutSt data={chartData} options={options} />
    </DonutContainer>
  );
};

export default StatisticsChart;


