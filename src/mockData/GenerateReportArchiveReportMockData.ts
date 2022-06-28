import { ReportDto } from "../lib/dto/generateReportArchiveReport.dto";

export const GenerateReportArchiveReportMockData: ReportDto[] = [
  {      
    reportTemplateId: 1,
    documentName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',      
    generatedBy: 'John Doe',
    belongsTo: 'John Doe',
    from: new Date(),  
    to: new Date(),
    generation: "Sample", 
    actions: "Archive"
  },
  {
    reportTemplateId: 2,
    documentName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',      
    generatedBy: 'John Doe',
    belongsTo: 'John Doe',
    from: new Date(),  
    to: new Date(),
    generation: "Sample", 
    actions: "Archive"
  },
  {      
    reportTemplateId: 3,
    documentName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',      
    generatedBy: 'John Doe',
    belongsTo: 'John Doe',
    from: new Date(),  
    to: new Date(),
    generation: "Sample", 
    actions: "Archive"
  },
  {      
    reportTemplateId: 4,
    documentName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',      
    generatedBy: 'John Doe',
    belongsTo: 'John Doe',
    from: new Date(),  
    to: new Date(),
    generation: "Sample", 
    actions: "Archive"
  }
]