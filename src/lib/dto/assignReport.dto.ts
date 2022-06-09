import { AssignReportStatus } from "../../constants/enum"

export type ReportDto = {
    reportTemplateId: number,
    documentName: string,
    status: AssignReportStatus,
    createdBy: string,
    createdDate: Date,
    lastUpdatedDate: Date,
    reportProgress: number
}