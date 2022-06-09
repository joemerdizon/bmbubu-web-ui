import { ReportDto } from "../lib/dto/assignReport.dto";

export const AssignReportMockData: ReportDto[] = [
    {      
      reportTemplateId: 1,
      documentName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      status: 1,
      createdBy: 'John Doe',
      createdDate: new Date(),  
      lastUpdatedDate: new Date(),
      reportProgress: 25
    },
    {   
      reportTemplateId: 2,   
      documentName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      status: 2,
      createdBy: 'John Doe',
      createdDate: new Date(),  
      lastUpdatedDate: new Date(),
      reportProgress: 100
    },
    {      
      reportTemplateId: 3,
      documentName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      status: 3,
      createdBy: 'John Doe',
      createdDate: new Date(),  
      lastUpdatedDate: new Date(),
      reportProgress: 50
    },
    {      
      reportTemplateId: 4,
      documentName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      status: 4,
      createdBy: 'John Doe',
      createdDate: new Date(),  
      lastUpdatedDate: new Date(),
      reportProgress: 75
    }  
]