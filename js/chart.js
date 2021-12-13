labelsNew = [];
dataNew = [];
for (var i = 0; i < answers.length; i++) {
  if (answers[i] == 1) {
    dataNew.push(1);
    labelsNew.push(questionTypesNice[i]);
  }
}
//types = JSON.parse(sessionStorage.getItem("types"))
const data = {
  labels: labelsNew,
  datasets: [
    {
      label: 'Dine resultater',
      data: dataNew,
      backgroundColor: [
        '#003f5c',
        '#2f4b7c',
        '#665191',
        '#a05195',
        '#d45087',
        '#f95d6a',
        '#ff7c43',
        '#ffa600',
        'rgb(255, 99, 132)',
        'rgb(255, 205, 86)',
      ],
      //backgroundColor: [
      //'rgb(255, 99, 132)',
      //'rgb(54, 162, 235)',
      //'rgb(255, 205, 86)'
      //],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: 'doughnut',
  data: data,
};

var pieChart = new Chart(document.getElementById('pieChart'), config);

const labels = ['Økonomi', 'Familie', 'Barn'];
const data1 = {
  labels: labels,
  datasets: [
    {
      label: 'Dine svar',
      data: [types['okonomi'], types['familie'], types['barn']],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      borderWidth: 1,
      borderRadius: 000,
      borderSkipped: false,
    },
  ],
};
const config1 = {
  type: 'bar',
  data: data1,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};
var barChart = new Chart(document.getElementById('barChart'), config1);
