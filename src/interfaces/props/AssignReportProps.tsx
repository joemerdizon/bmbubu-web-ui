export interface AssignReportProps {
  reportTemplateId: number,
  thumbnail? : string,
  documentName: string,
  description?: string,
  status: number,
  createdBy: string,
  createdDate: Date  
  lastUpdatedDate: Date,
  isPinned: boolean,
  reportProgress: number,
  onPinClick?: () => void
}