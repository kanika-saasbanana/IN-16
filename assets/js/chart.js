document.addEventListener("DOMContentLoaded", function () {

const ctx = document.getElementById('linechart');
if(ctx){
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'views',
      data: [3, 8, 5, 10, 7, 12],
      borderWidth: 2,// width of lines
      pointHoverRadius: 5, //interactive hover property
      pointRadius:4, //radius of nodes in line chart
      pointBorderColor: '#fff',
      pointBackgroundColor: '#ff69b4',// color for point nodes
      borderColor: 'blue', //color of lines in line chart
      backgroundColor: 'rgba(0, 0, 255, 0.2)', // Fill under the line (optional)

    }]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    //to remove the grid from background(x-axis & y-axis lines)
    scales: {
      //y: { beginAtZero: true}
      x: {
        display: false // Hide X-axis labels & grid
      },
      y: {
        display: false // Hide Y-axis labels & grid
      }   
    }
  }
});}
else{
  console.error('canvas elemet with ID "linechart" not found');
}});
 
//bar
document.addEventListener("DOMContentLoaded", function () {

  const ctx = document.getElementById('barchart');
  if(ctx){
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'clicks',
        data: [1, 2, 3, 4, 6, 8, 10, 11, ],
        borderWidth: 0,// width of lines
        pointHoverRadius: 5, //interactive hover property
        pointRadius:4, //radius of nodes in line chart
        pointBorderColor: '#fff',
        pointBackgroundColor: '#ff69b4',// color for point nodes
        borderColor: 'blue', //color of lines in line chart
        backgroundColor: 'rgb(218, 62, 117)', // Fill under the line (optional)
        borderRadius: 10, // Round top corners of bars
  
      }]
    },
    options: {
      responsive:true,
      maintainAspectRatio: false,
      //to remove the grid from background(x-axis & y-axis lines)
      scales: {
        //y: { beginAtZero: true}
        x: {
          display: false // Hide X-axis labels & grid
        },
        y: {
          display: false // Hide Y-axis labels & grid
        }   
      }
    }
  });}
  else{
    console.error('canvas elemet with ID "barchart" not found');
  }});

  //doughnut chart
document.addEventListener("DOMContentLoaded", function () {

  const ctx = document.getElementById('doughnut');
  if(ctx){
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      //labels: ['dekstop', 'tablet', 'mobile', ],
      datasets: [{
        //label: 'views',
        data: [35, 48, 27, ],
        borderWidth: 0,// width of lines
        pointHoverRadius: 5, //interactive hover property
        pointBorderColor: '#fff',
        pointBackgroundColor: '#ff69b4',// color for point nodes
        borderColor: 'blue', //color of lines in line chart
        backgroundColor: ['#FF6347', '#32CD32', '#1E90FF'] // Fill under the line (optional)
        //borderRadius: 10, // Round top corners of bars
  
      }]
    },
    options: {
      responsive:true,
      maintainAspectRatio: false,
      cutout: '85%', // Controls the inner radius of the doughnut
      //to remove the grid from background(x-axis & y-axis lines)
      scales: {
        //y: { beginAtZero: true}
        x: {
          display: false // Hide X-axis labels & grid
        },
        y: {
          display: false // Hide Y-axis labels & grid
        }   
      },
      //
      
      //
    }
  });}
  else{
    console.error('canvas elemet with ID "barchart" not found');
  }});

  //barchart1
document.addEventListener("DOMContentLoaded", function () {

  const ctx = document.getElementById('barchart1');
  if(ctx){
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'jul', 'Aug', 'Sep'],
      datasets: [{
        label: 'Total clicks',
        data: [10, 40, 32, 51, 21, 16, 19, 31, 10 ],
        borderWidth: 0,// width of lines
        pointHoverRadius: 5, //interactive hover property
        pointRadius:4, //radius of nodes in line chart
        pointBorderColor: '#fff',
        pointBackgroundColor: '#ff69b4',// color for point nodes
        borderColor: 'blue', //color of lines in line chart
        backgroundColor: 'rgb(103, 203, 180)', // Fill under the line (optional)
        borderRadius: 2, // Round top corners of bars
  
      }]
    },
    options: {
      responsive:true,
      maintainAspectRatio: false,
      //to remove the grid from background(x-axis & y-axis lines)
      scales: {
        //y: { beginAtZero: true}
        x: {
          display:true,//show x-axis label
          grid:{
            display:false// hide grid line

          }
        },
        y: {
          display:true,//show y axis labels
          grid:{
            display:false//hide grid lines

          }
        }   
      }
    }
  });}
  else{
    console.error('canvas elemet with ID "barchart1" not found');
  }});

  //
  //doughnut chart
document.addEventListener("DOMContentLoaded", function () {

  const ctx = document.getElementById('doughnut1');
  if(ctx){
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      //labels: ['dekstop',, ],
      datasets: [{
        label: 'Total views',
        data: [22,78 ],
        borderWidth: 0,// width of lines
        pointHoverRadius: 5, //interactive hover property
        pointBorderColor: '#fff',
        pointBackgroundColor: '#ff69b4',// color for point nodes
        borderColor: 'blue', //color of lines in line chart
        backgroundColor: ['#FFD700', '#C71585'], // Fill under the line (optional)
        borderRadius: 9, // Round top corners of bars
  
      }]
    },
    options: {
      responsive:true,
      maintainAspectRatio: false,
      cutout: '80%', // Controls the inner radius of the doughnut
      //to remove the grid from background(x-axis & y-axis lines)
      scales: {
        //y: { beginAtZero: true}
        x: {
          display: false // Hide X-axis labels & grid
        },
        y: {
          display: false // Hide Y-axis labels & grid
        }   
      },
      //
      
      //
    }
  });}
  else{
    console.error('canvas elemet with ID "barchart" not found');
  }});

  //areagraph
  document.addEventListener("DOMContentLoaded", function () {

    const ctx = document.getElementById('areachart');
    if(ctx){
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Total view',
          data: [3, 8, 5, 10, 7, 12],
          //borderWidth: 2,// width of lines
          //pointHoverRadius: 5, //interactive hover property
          pointRadius:1, //radius of nodes in line chart
          //pointBorderColor: '#fff',
          //BackgroundColor: '#ff69b4',// color for point nodes
          fill:true,// this makes line chart into area chart
          borderColor: 'green', //color of lines in line chart
          backgroundColor: 'rgba(117, 237, 171, 0.53)', // Fill under the line (optional)
          tension: 0.4//makes the line smooth
    
        }]
      },
      options: {
        responsive:true,
        maintainAspectRatio: false,
        //to remove the grid from background(x-axis & y-axis lines)
        scales: {
          //y: { beginAtZero: true}
          x: {
            display: false // Hide X-axis labels & grid
          },
          y: {
            display: false // Hide Y-axis labels & grid
          }   
        }
      }
    });}
    else{
      console.error('canvas elemet with ID "linechart" not found');
    }});