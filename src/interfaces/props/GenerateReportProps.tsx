import { LightIndicatorStatus } from "../../constants/enum"

export interface GenerateReportProps {
  reportTemplateId: number,
  idNumber: number,    
  createdBy: string,
  documentName: string,
  rangeFrom: Date,
  rangeTo: Date,          
  createdDate: Date,    
  reportProgress: number,
  task: GenerateReportTaskProps[],  
}

export interface GenerateReportTaskProps {
  taskID: number,
  taskName: string,
  taskDetails: GenerateReportTasDetailskProps[],  
}

export interface GenerateReportTasDetailskProps {
  taskID: number,
  taskName: string,
  assigned: boolean,
  approverName: string,
  approverImage: string,
  dueDate: Date,
  status: LightIndicatorStatus,
  action: string
  actionItem: GenerateReportTaskActionItemProps[]
}

export interface GenerateReportTaskActionItemProps {
  actionId: number
  actionItemName: string,
  assigned: boolean,  
  dueDate: Date,
  status: LightIndicatorStatus,
  action: string
}

export interface ReportAssignmentInformationProps {
  assignmentInformationId: number;
  assignTo: string;
  assignBy: string;
  approver: string;
}

export interface ReportGeneralInformationProps {
  generalInformationID: number;
  name: string;
  description: string;
  dueDate: Date,
  headsUpDays: number;
  urgentDays: number;
}

export interface ReportRelatedObjectivesProps {
  relatedObjectivesID: number;
  name: string;
  assignTo: string;
  status: string;
  dueDate: Date;
}

export interface ReportActionItemsProps {
  actionItemID: number;
  name: string;
  description: string;
  assignTo: string;
  dueDate: Date;
  status: string;
  action: {attachment: number, comments: number}
}

export interface ReportReferenceMaterialsAttachmentsProps {
  referenceMaterialsAttachmentsID: number;
  attachments: number;
  name: string;
  action: string;
}

export interface ReportCommentsAndNotesProps {
  commentsAndNotesID: number;
  comments: string;
  notifyByEmail: boolean;  
}

export interface ReportApprovalFileUploadProps {
  approvalFileUploadID: number;
  fileName: string[];
}