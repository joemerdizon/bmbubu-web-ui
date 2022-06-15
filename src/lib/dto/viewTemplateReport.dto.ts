import { ReportStatus } from "../../constants/enum"

export type ReportTemplateDto = {
    reportTemplateId: number,
    documentName: string,
    status: ReportStatus,
    createdBy: string,
    createdDate: Date,
    lastUpdatedDate: Date
}