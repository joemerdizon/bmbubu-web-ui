import { NumberLiteralType } from "typescript"
import { LightIndicatorStatus } from "../../constants/enum"

export type ReportDto = {
  reportTemplateId: number,
  idNumber: number,    
  createdBy: string,
  documentName: string,
  rangeFrom: Date,
  rangeTo: Date,          
  createdDate: Date,    
  reportProgress: number,
  task: ReportTaskDto[],  
}

type ReportTaskDto = {
  taskID: number,
  taskName: string,
  taskDetails: ReportTasDetailskDto[],  
}

type ReportTasDetailskDto = {
  taskID: number,
  taskName: string,
  assigned: boolean,
  approverName: string,
  approverImage: string,
  dueDate: Date,
  status: LightIndicatorStatus,
  action: string
  actionItem: ReportTaskActionItemDto[]
}

type ReportTaskActionItemDto = {
  actionId: number
  actionItemName: string,
  assigned: boolean,  
  dueDate: Date,
  status: LightIndicatorStatus,
  action: string
}

export type ReportAssignmentInformationDto = {
  assignmentInformationId: number;
  assignTo: string;
  assignBy: string;
  approver: string;
}

export type ReportGeneralInformationDto = {
  generalInformationID: number;
  name: string;
  description: string;
  dueDate: Date,
  headsUpDays: number;
  urgentDays: number;
}

export type ReportRelatedObjectivesDto = {
  relatedObjectivesID: number;
  name: string;
  assignTo: string;
  status: string;
  dueDate: Date;
}

export type ReportActionItemsDto = {
  actionItemID: number;
  name: string;
  description: string;
  assignTo: string;
  dueDate: Date;
  status: string;
  action: {attachment: number, comments: number}
}

export type ReportReferenceMaterialsAttachmentsDto = {
  referenceMaterialsAttachmentsID: number;
  attachments: number;
  name: string;
  action: string;
}

export type ReportCommentsAndNotesDto = {
  commentsAndNotesID: number;
  comments: string;
  notifyByEmail: boolean;  
}

export type ReportApprovalFileUploadDto = {
  approvalFileUploadID: number;
  fileName: string[];
}