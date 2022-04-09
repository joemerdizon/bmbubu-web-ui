var xValues = ["Completed", "New", "Urgent", "Overdue"];
var yValues = [39.7, 24.1, 6.9, 29.3];
var barColors = ["#529f50", "#4793c8", "#fc8a34","#ba3742"];

new Chart("dashboardChart", {
  type: "pie",
//   type: "horizontalBar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: true},
    title: {
      display: false,
      text: "Tasks"
    }
  }
});