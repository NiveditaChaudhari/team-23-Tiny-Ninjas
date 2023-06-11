const maleParticipants = [50, 30, 25];
const femaleParticipants = [70, 40, 35];

const participantChart = document.getElementById('participantChart').getContext('2d');

new Chart(participantChart, {
  type: 'bar',
  data: {
    labels: ['Eye Checkup Camp', 'Training Camp', 'Social Awareness Camp'],
    datasets: [
      {
        label: 'Male Participants',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: maleParticipants,
      },
      {
        label: 'Female Participants',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: femaleParticipants,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Number of Participants',
        },
      },
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'top',
        formatter: (value) => value,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});