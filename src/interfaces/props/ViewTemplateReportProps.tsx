export interface ViewTemplateReportProps {
  reportTemplateID: number,
  thumbnail? : string,
  documentName: string,
  description?: string,
  status: number,
  createdBy: string,
  // createdDate: Date  
  // lastUpdatedDate: Date,
  isPinned: boolean,
  onPinClicked: () => void
}