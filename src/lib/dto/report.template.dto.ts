import { ReportStatus } from "../../constants/enum"

export type ReportTemplateDto = {
    reportTemplateId: number,
    documentName: string,
    status: ReportStatus,
    createdBy: string,
    createdDate: Date,
    lastUpdatedDate: Date
}

export type CreateReportTemplateDto = {
    reportName: string,
    header: string,
    sections: ReportTemplateSectionDto[],
    footer?: string
}

export type ReportTemplateSectionDto = {
    name: string,
    description?: string,
    order?: number,
    references: SectionReference[]
}

export type SectionReference = {
    text: string,
    level: number,
    children?: SectionReference[]
}