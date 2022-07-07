export type DashboardChartDto = {
  // chartId: number,
  labels : string[],
  datasets: DashboardChartDataSetDto[]
}

export type DashboardChartDataSetDto = {
  // dataSetID: number,
  data: number[],
  backgroundColor: string[],  
  borderColor: string,
  borderWidth: number
}