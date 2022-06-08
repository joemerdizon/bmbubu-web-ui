export interface ViewTemplateReportProps {
  reportTemplateId: number,
  thumbnail? : string,
  documentName: string,
  description?: string,
  status: number,
  createdBy: string,
  createdDate: Date  
  lastUpdatedDate: Date,
  isPinned: boolean,
  onPinClick?: () => void
}