import { ReportDto } from "../lib/dto/report.dto";

export const ReportsMockData: ReportDto[] = [
    {      
      reportTemplateId: 1,
      documentName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      status: 1,
      createdBy: 'John Doe',
      createdDate: new Date(),  
      lastUpdatedDate: new Date(),
    },
    {   
      reportTemplateId: 2,   
      documentName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      status: 2,
      createdBy: 'John Doe',
      createdDate: new Date(),  
      lastUpdatedDate: new Date(),
    },
    {      
      reportTemplateId: 3,
      documentName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      status: 1,
      createdBy: 'John Doe',
      createdDate: new Date(),  
      lastUpdatedDate: new Date(),
    },
    {      
      reportTemplateId: 4,
      documentName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      status: 3,
      createdBy: 'John Doe',
      createdDate: new Date(),  
      lastUpdatedDate: new Date(),
    }  
]