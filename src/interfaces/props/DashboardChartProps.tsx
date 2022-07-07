export interface DashboardChartProps {
  // chartId: number,
  labels : string[],
  datasets: DashboardChartDataSetProps[] 
}

export interface DashboardChartDataSetProps {
  // dataSetID: number,
  data: number[],
  backgroundColor: string[],  
  borderColor: string,
  borderWidth: number
}