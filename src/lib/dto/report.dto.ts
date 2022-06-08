import { ReportStatus } from "../../constants/enum"

export type ReportDto = {
    reportTemplateId: number,
    documentName: string,
    status: ReportStatus,
    createdBy: string,
    createdDate: Date,
    lastUpdatedDate: Date
}