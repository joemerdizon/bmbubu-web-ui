export interface GenerateReportArchiveReportProps {
  reportTemplateId: number,
  documentName: string,      
  generatedBy: string,
  belongsTo: string,
  from: Date,  
  to: Date,
  generation: string, 
  actions: string
}