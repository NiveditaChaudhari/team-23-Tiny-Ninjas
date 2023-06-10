/* Simulated data for the overview section*/
const overviewData = {
    totalSessions:  10,
    totalAttendees:  200,
    averageAttendance:  20,
    demographicOverview: "30% Male, 50% Female, 20% Others",
    sociographicOverview: "40% Students, 30% Professionals, 30% Others",
    impactIndicators: "Positive testimonials and feedback",
    goalsProgress: "80% achieved"
  };
  
  /*Function to update the overview section with the simulated data
  */function updateOverviewSection() {
    /* Update the total sessions count*/
    const totalSessionsElement = document.getElementById('total-sessions');
    totalSessionsElement.textContent = overviewData.totalSessions;
  
    /* Update the total attendees count*/
    const totalAttendeesElement = document.getElementById('total-attendees');
    totalAttendeesElement.textContent = overviewData.totalAttendees;
  
    /* Update the average attendance*/
    const averageAttendanceElement = document.getElementById('average-attendance');
    averageAttendanceElement.textContent = overviewData.averageAttendance;
  
    /* Update the demographic overview*/
    const demographicOverviewElement = document.getElementById('demographic-overview');
    demographicOverviewElement.textContent = overviewData.demographicOverview;
  
    /* Update the sociographic overview*/
    const sociographicOverviewElement = document.getElementById('sociographic-overview');
    sociographicOverviewElement.textContent = overviewData.sociographicOverview;
  
    /* Update the impact indicators*/
    const impactIndicatorsElement = document.getElementById('impact-indicators');
    impactIndicatorsElement.textContent = overviewData.impactIndicators;
  
    /* Update the goals progress*/
    const goalsProgressElement = document.getElementById('goals-progress');
    goalsProgressElement.textContent = overviewData.goalsProgress;
  }
  
  /* When the page finishes loading, update the overview section*/
  window.addEventListener('load', () => {
    updateOverviewSection();
  });
  
  // Simulated data for the demographics section
const demographicsData = {
  labels: ['Male', 'Female', 'Other'],
  datasets: [{
    label: 'Gender Distribution',
    data: [30, 50, 20],
    backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
    borderColor: '#fff',
    borderWidth: 2,
    height: "30em",
  }]
};

// Function to update the demographics chart
function updateDemographicsChart() {
  const demographicsChartElement = document.getElementById('demographics-chart');

  new Chart(demographicsChartElement, {
    type: 'doughnut',
    data: demographicsData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom'
        
      },
      title: {
        display: false
      }
    }
  });
}

// When the page finishes loading, update the demographics chart
window.addEventListener('load', () => {
  updateDemographicsChart();
});

// Simulated data for the sociographics chart
const sociographicsData = {
  labels: ['Students', 'Professionals', 'Others'],
  datasets: [
    {
      label: 'Sociographics',
      data: [40, 30, 30],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }
  ]
};

// Function to update the sociographics chart
function updateSociographicsChart() {
  const sociographicsChartElement = document.getElementById('sociographics-chart');

  new Chart(sociographicsChartElement, {
    type: 'pie',
    data: sociographicsData,
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

// When the page finishes loading, update the sociographics chart
window.addEventListener('load', () => {
  updateSociographicsChart();
});

// Simulated data for the attendance section
const attendanceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','july','August','September','October','November','December'],
  datasets: [
    {
      label: 'Attendance',
      data: [80, 75, 85, 90, 95, 80,60,50,40,85,83,74],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      fill: true,
    }
  ]
};

// Function to update the attendance chart
function updateAttendanceChart() {
  const attendanceChartElement = document.getElementById('attendance-chart');

  new Chart(attendanceChartElement, {
    type: 'line',
    data: attendanceData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Attendance Percentage'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Month'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// When the page finishes loading, update the attendance chart
window.addEventListener('load', () => {
  updateAttendanceChart();
});



  