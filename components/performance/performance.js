$(document).ready(function() {
    // Handle sidebar toggle
    $('.hamburger').on('click', function() {
      $('.sidebar').toggleClass('active');
    });
  
    // Initialize Charts
    initializeCharts();
  
    // Handle time period changes
    $('#time-period').on('change', function() {
      updateCharts($(this).val());
    });
  
    // Function to initialize all charts
    function initializeCharts() {
      initializeApplicationChart();
      initializeProfileChart();
      initializeActivityChart();
    }
  
    // Function to update all charts based on time period
    function updateCharts(period) {
      // Simulate loading
      $('.chart-card').append('<div class="chart-loading">Loading...</div>');
      
      // Simulate API call for new data
      setTimeout(function() {
        $('.chart-loading').remove();
        
        // Update charts with new random data
        updateApplicationChart(period);
        updateProfileChart(period);
        updateActivityChart(period);
      }, 800);
    }
  
    // Application Activity Chart
    let applicationChart;
    function initializeApplicationChart() {
      const ctx = document.getElementById('applicationChart').getContext('2d');
      
      applicationChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [{
            label: 'Applications Sent',
            data: [5, 7, 3, 2],
            borderColor: '#5765c3',
            backgroundColor: 'rgba(87, 101, 195, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                precision: 0
              }
            }
          }
        }
      });
    }
  
    function updateApplicationChart(period) {
      // Generate random data based on period
      let labels, data;
      
      switch(period) {
        case 'week':
          labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
          data = Array.from({length: 7}, () => Math.floor(Math.random() * 3));
          break;
        case 'month':
          labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
          data = Array.from({length: 4}, () => Math.floor(Math.random() * 7) + 1);
          break;
        case 'quarter':
          labels = ['Month 1', 'Month 2', 'Month 3'];
          data = Array.from({length: 3}, () => Math.floor(Math.random() * 15) + 5);
          break;
        case 'year':
          labels = ['Q1', 'Q2', 'Q3', 'Q4'];
          data = Array.from({length: 4}, () => Math.floor(Math.random() * 40) + 10);
          break;
      }
      
      applicationChart.data.labels = labels;
      applicationChart.data.datasets[0].data = data;
      applicationChart.update();
    }
  
    // Profile Performance Chart
    let profileChart;
    function initializeProfileChart() {
      const ctx = document.getElementById('profileChart').getContext('2d');
      
      profileChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [{
            label: 'Profile Views',
            data: [8, 12, 6, 4],
            backgroundColor: '#5765c3',
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              titleColor: '#333',
              titleFont: {
                size: 13,
                family: "'Lato', sans-serif"
              },
              bodyColor: '#666',
              bodyFont: {
                size: 12,
                family: "'Lato', sans-serif"
              },
              padding: 12,
              borderColor: '#e1e1e1',
              borderWidth: 1,
              displayColors: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.1)',
                drawBorder: false
              },
              ticks: {
                precision: 0,
                font: {
                  size: 11,
                  family: "'Lato', sans-serif"
                }
              }
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                font: {
                  size: 11,
                  family: "'Lato', sans-serif"
                }
              }
            }
          }
        }
      });
    }
  
    function updateProfileChart(period) {
      let labels, data;
      
      switch(period) {
        case 'week':
          labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
          data = [4, 6, 8, 5, 7, 3, 4];
          break;
        case 'month':
          labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
          data = [8, 12, 6, 4];
          break;
        case 'quarter':
          labels = ['Month 1', 'Month 2', 'Month 3'];
          data = [25, 32, 28];
          break;
        case 'year':
          labels = ['Q1', 'Q2', 'Q3', 'Q4'];
          data = [75, 85, 92, 88];
          break;
      }
      
      profileChart.data.labels = labels;
      profileChart.data.datasets[0].data = data;
      profileChart.update();
    }
  
    // Activity Chart
    let activityChart;
    function initializeActivityChart() {
      const ctx = document.getElementById('activityChart').getContext('2d');
      
      activityChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [{
            label: 'Jobs Viewed',
            data: [25, 32, 28, 41],
            borderColor: '#5765c3',
            tension: 0.4,
            fill: false
          }, {
            label: 'Searches',
            data: [12, 18, 15, 22],
            borderColor: '#f59e0b',
            tension: 0.4,
            fill: false
          }, {
            label: 'Bookmarks',
            data: [5, 8, 4, 9],
            borderColor: '#10b981',
            tension: 0.4,
            fill: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                precision: 0
              }
            }
          }
        }
      });
    }
  
    function updateActivityChart(period) {
      // Generate random data based on period
      let labels;
      let jobViews, searches, bookmarks;
      
      switch(period) {
        case 'week':
          labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
          jobViews = Array.from({length: 7}, () => Math.floor(Math.random() * 10) + 5);
          searches = Array.from({length: 7}, () => Math.floor(Math.random() * 7) + 2);
          bookmarks = Array.from({length: 7}, () => Math.floor(Math.random() * 3) + 1);
          break;
        case 'month':
          labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
          jobViews = Array.from({length: 4}, () => Math.floor(Math.random() * 25) + 15);
          searches = Array.from({length: 4}, () => Math.floor(Math.random() * 20) + 10);
          bookmarks = Array.from({length: 4}, () => Math.floor(Math.random() * 10) + 3);
          break;
        case 'quarter':
          labels = ['Month 1', 'Month 2', 'Month 3'];
          jobViews = Array.from({length: 3}, () => Math.floor(Math.random() * 80) + 30);
          searches = Array.from({length: 3}, () => Math.floor(Math.random() * 60) + 20);
          bookmarks = Array.from({length: 3}, () => Math.floor(Math.random() * 30) + 10);
          break;
        case 'year':
          labels = ['Q1', 'Q2', 'Q3', 'Q4'];
          jobViews = Array.from({length: 4}, () => Math.floor(Math.random() * 200) + 100);
          searches = Array.from({length: 4}, () => Math.floor(Math.random() * 150) + 50);
          bookmarks = Array.from({length: 4}, () => Math.floor(Math.random() * 80) + 20);
          break;
      }
      
      activityChart.data.labels = labels;
      activityChart.data.datasets[0].data = jobViews;
      activityChart.data.datasets[1].data = searches;
      activityChart.data.datasets[2].data = bookmarks;
      activityChart.update();
    }
  });


  // Profile Performance Chart
let profileChart;
function initializeProfileChart() {
  const ctx = document.getElementById('profileChart').getContext('2d');
  
  profileChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Profile Views',
        data: [8, 12, 6, 4],
        backgroundColor: 'rgba(87, 101, 195, 0.7)'
      }, {
        label: 'Profile Saves',
        data: [2, 4, 1, 3],
        backgroundColor: 'rgba(16, 185, 129, 0.7)'
      }, {
        label: 'Recruiter Contacts',
        data: [1, 3, 0, 2],
        backgroundColor: 'rgba(245, 158, 11, 0.7)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.raw;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0
          },
          title: {
            display: true,
            text: 'Count'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Time Period'
          }
        }
      }
    }
  });
}

function updateProfileChart(period) {
  // Generate random data based on period
  let labels;
  let views, saves, contacts;
  
  switch(period) {
    case 'week':
      labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      views = Array.from({length: 7}, () => Math.floor(Math.random() * 5) + 1);
      saves = Array.from({length: 7}, () => Math.floor(Math.random() * 3));
      contacts = Array.from({length: 7}, () => Math.floor(Math.random() * 2));
      break;
    case 'month':
      labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      views = Array.from({length: 4}, () => Math.floor(Math.random() * 12) + 3);
      saves = Array.from({length: 4}, () => Math.floor(Math.random() * 5) + 1);
      contacts = Array.from({length: 4}, () => Math.floor(Math.random() * 4));
      break;
    case 'quarter':
      labels = ['Month 1', 'Month 2', 'Month 3'];
      views = Array.from({length: 3}, () => Math.floor(Math.random() * 30) + 10);
      saves = Array.from({length: 3}, () => Math.floor(Math.random() * 15) + 5);
      contacts = Array.from({length: 3}, () => Math.floor(Math.random() * 10) + 2);
      break;
    case 'year':
      labels = ['Q1', 'Q2', 'Q3', 'Q4'];
      views = Array.from({length: 4}, () => Math.floor(Math.random() * 80) + 20);
      saves = Array.from({length: 4}, () => Math.floor(Math.random() * 40) + 10);
      contacts = Array.from({length: 4}, () => Math.floor(Math.random() * 25) + 5);
      break;
  }
  
  profileChart.data.labels = labels;
  profileChart.data.datasets[0].data = views;
  profileChart.data.datasets[1].data = saves;
  profileChart.data.datasets[2].data = contacts;
  profileChart.update();
  
  // Update profile performance summary
  updateProfileSummary(views, saves, contacts);
}

// Function to update profile performance summary statistics
function updateProfileSummary(views, saves, contacts) {
  const totalViews = views.reduce((sum, current) => sum + current, 0);
  const totalSaves = saves.reduce((sum, current) => sum + current, 0);
  const totalContacts = contacts.reduce((sum, current) => sum + current, 0);
  
  const conversionRate = ((totalSaves / totalViews) * 100).toFixed(1);
  const contactRate = ((totalContacts / totalViews) * 100).toFixed(1);
  
  $('#profile-views').text(totalViews);
  $('#profile-saves').text(totalSaves);
  $('#profile-contacts').text(totalContacts);
  $('#conversion-rate').text(conversionRate + '%');
  $('#contact-rate').text(contactRate + '%');
  
  // Set trend indicators
  setTrendIndicator('#views-trend', views);
  setTrendIndicator('#saves-trend', saves);
  setTrendIndicator('#contacts-trend', contacts);
}

// Function to set trend indicators (up/down arrows)
function setTrendIndicator(selector, data) {
  if (data.length < 2) return;
  
  const firstHalf = data.slice(0, Math.floor(data.length / 2));
  const secondHalf = data.slice(Math.floor(data.length / 2));
  
  const firstHalfAvg = firstHalf.reduce((sum, val) => sum + val, 0) / firstHalf.length;
  const secondHalfAvg = secondHalf.reduce((sum, val) => sum + val, 0) / secondHalf.length;
  
  const percentChange = ((secondHalfAvg - firstHalfAvg) / firstHalfAvg * 100).toFixed(1);
  
  if (secondHalfAvg > firstHalfAvg) {
    $(selector).html(`<i class="fas fa-arrow-up text-success"></i> ${percentChange}%`);
  } else if (secondHalfAvg < firstHalfAvg) {
    $(selector).html(`<i class="fas fa-arrow-down text-danger"></i> ${Math.abs(percentChange)}%`);
  } else {
    $(selector).html(`<i class="fas fa-minus text-secondary"></i> 0%`);
  }
}
