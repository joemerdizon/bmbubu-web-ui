import { DashboardChartDto } from "../lib/dto/dashboardChart.dto";

export const DashboardChartMockData: DashboardChartDto[] = [
  {      
    // chartId: 1,
    labels: ["Completed", "New", "Urgent", "Overdue"], 
    datasets: [
      {      
        // dataSetID: 1,  
        data: [39.7, 24.1, 6.9, 29.3],
        backgroundColor: ["#529f50", "#4793c8", "#fc8a34","#ba3742"],
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],  
  }
]