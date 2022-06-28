import { Anchor } from "../components/custom-web-controls/Anchor";
import { 
          ReportDto, 
          ReportAssignmentInformationDto, 
          ReportGeneralInformationDto, 
          ReportRelatedObjectivesDto,                   
          ReportActionItemsDto, 
          ReportReferenceMaterialsAttachmentsDto, 
          ReportCommentsAndNotesDto, 
          ReportApprovalFileUploadDto
        } from "../lib/dto/generateReport.dto";

export const GenerateReportMockData: ReportDto[] = [
    {      
      reportTemplateId: 1,
      idNumber: 1001,    
      createdBy: "Jay Strouse",
      documentName: "Test template report",
      rangeFrom: new Date(),  
      rangeTo: new Date(),           
      createdDate: new Date(),  
      reportProgress: 50,
      task: [
        {
          taskID: 1,
          taskName: "Task 1",
          taskDetails: [
            {
              taskID: 1,
              taskName: "Test template task 1",
              assigned: true,
              approverName: "Jay Strouse",
              approverImage: "face1.jpg",
              dueDate: new Date(),
              status: 1,
              action: "#modal-fullscreen-xl-generate-report-action",
              actionItem: [
                {
                  actionId: 1,
                  actionItemName: "Test action item 1",
                  assigned: true,  
                  dueDate: new Date(),
                  status: 1,
                  action: "#modal-fullscreen-xl-generate-report-action"
                }
              ]
            },
            {
              taskID: 2,
              taskName: "Test template task 2",
              assigned: true,
              approverName: "Jay Strouse",
              approverImage: "face1.jpg",
              dueDate: new Date(),
              status: 2,
              action: "",
              actionItem: [
                {
                  actionId: 2,
                  actionItemName: "Test action item 2",
                  assigned: true,  
                  dueDate: new Date(),
                  status: 2,
                  action: ""
                }
              ]
            },
            {
              taskID: 3,
              taskName: "Test template task 3",
              assigned: true,
              approverName: "Jay Strouse",
              approverImage: "face1.jpg",
              dueDate: new Date(),
              status: 3,
              action: "",
              actionItem: [
                {
                  actionId: 3,
                  actionItemName: "Test action item 3",
                  assigned: true,  
                  dueDate: new Date(),
                  status: 3,
                  action: ""
                }
              ]
            },
          ]
        },
        {
          taskID: 2,
          taskName: "Task 2",
          taskDetails: [
            {
              taskID: 1,
              taskName: "Test template task 2",
              assigned: true,
              approverName: "Jay Strouse",
              approverImage: "face1.jpg",
              dueDate: new Date(),
              status: 1,
              action: "#modal-fullscreen-xl-generate-report-action",
              actionItem: [
                {
                  actionId: 1,
                  actionItemName: "Test action item 1",
                  assigned: true,  
                  dueDate: new Date(),
                  status: 1,
                  action: "#modal-fullscreen-xl-generate-report-action"
                },
                {
                  actionId: 2,
                  actionItemName: "Test action item 2",
                  assigned: true,  
                  dueDate: new Date(),
                  status: 1,
                  action: "#modal-fullscreen-xl-generate-report-action"
                }
              ]
            },
            {
              taskID: 2,
              taskName: "Test template task 2",
              assigned: true,
              approverName: "Jay Strouse",
              approverImage: "face1.jpg",
              dueDate: new Date(),
              status: 2,
              action: "",
              actionItem: [
                {
                  actionId: 1,
                  actionItemName: "Test action item 1",
                  assigned: true,  
                  dueDate: new Date(),
                  status: 2,
                  action: ""
                },
                {
                  actionId: 2,
                  actionItemName: "Test action item 2",
                  assigned: true,  
                  dueDate: new Date(),
                  status: 2,
                  action: ""
                }
              ]
            },
            {
              taskID: 3,
              taskName: "Test template task 3",
              assigned: true,
              approverName: "Jay Strouse",
              approverImage: "face1.jpg",
              dueDate: new Date(),
              status: 3,
              action: "",
              actionItem: [
                {
                  actionId: 1,
                  actionItemName: "Test action item 1",
                  assigned: true,  
                  dueDate: new Date(),
                  status: 3,
                  action: ""
                }
              ]
            },
          ]
        }
      ]
      
    }    
]

export const GenerateReportAssignmentInformationMockData: ReportAssignmentInformationDto[] = [
  {      
    assignmentInformationId: 1,
    assignTo: "Nurse A Test",
    assignBy: "Brooke Lemmo ",
    approver: "Brooke Lemmo "    
  }    
]

export const GenerateReportGeneralInformationMockData: ReportGeneralInformationDto[] = [
  {      
    generalInformationID: 1,
    name: "Job Description and/or other Document(s)",
    description: "----",
    dueDate: new Date(),
    headsUpDays: 2,
    urgentDays: 1
  }    
]

export const GenerateReportRelatedObjectivesMockData: ReportRelatedObjectivesDto[] = [
  {      
    relatedObjectivesID: 1,
    name: "Job Description and/or other Document(s)",
    assignTo: "Nurse B Test",
    status: "Pending",
    dueDate: new Date(),
  }  
]

export const GenerateReportActionItemsMockData: ReportActionItemsDto[] = [
  {      
    actionItemID: 1,
    name: "The minimum education, training experience, health clearances and, where applicable, licensure",
    description: "CIHQ Standards and Requirements",
    assignTo: "Nurse A Test",
    dueDate: new Date(),
    status: "Completed",
    action: {attachment: 2, comments: 0}
  },
  {      
    actionItemID: 2,
    name: "The principal duties and responsibilities of the job position",
    description: "CIHQ Standards and Requirements",
    assignTo: "Nurse A Test",
    dueDate: new Date(),
    status: "Completed",
    action: {attachment: 2, comments: 0}
  }
]

export const GenerateReportReferenceMaterialsAttachmentsMockData: ReportReferenceMaterialsAttachmentsDto[] = [
  {      
    referenceMaterialsAttachmentsID: 1,
    attachments: 0,
    name: "Brooke Lemmo",
    action: "Test"
  }    
]

export const GenerateReportCommentsAndNotesMockData: ReportCommentsAndNotesDto[] = [
  {      
    commentsAndNotesID: 1,
    comments: "The quick brown fox jumps over the lazy dog.",
    notifyByEmail: true,  
  }    
]

export const GenerateReportApprovalFileUploadMockData: ReportApprovalFileUploadDto[] = [
  {      
    approvalFileUploadID: 1,
    fileName: ["NCLEX_Certificate.pdf", "Sample_Document.docx"]
  }  
]