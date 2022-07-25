import { isEmpty, map } from "lodash";
import React from "react";
import {
  CreateReportTemplateDto,
  ReportTemplateDto,
  ReportTemplateSectionDto,
} from "../../lib/dto/report.template.dto";
import { SectionCard } from "./SectionCard";

interface CanvassProps {
  data: CreateReportTemplateDto;
  isPreview: boolean;
}

export const Canvass = (props: CanvassProps) => {
  const { data, isPreview } = props;

  const defaultValues: CreateReportTemplateDto = {
    reportName: "",
    header: "Report Header",
    sections: [
      {
        name: "Section Header 1",
        description: "Sample Section Sub Header 1",
        order: 1,
        references: [],
      },
    ],
    footer: "Report Footer",
  };

  const loadSections = (sections: ReportTemplateSectionDto[]) => {
    return map(sections, (section, index) => {
      return <SectionCard key={index} data={section} isDisabled={isPreview} />;
    });
  };

  return (
    <div className="row">
      <div className="col-12">
        <h3 className="text-center font-weight-bold pb-4 text-muted">
          {!isPreview ? data.header : defaultValues.header}
        </h3>
        <div className="card mb-3 rounded-0">
          <div id="accordion-template-sections" className="myaccordion w-100">
            {loadSections(!isPreview ? data.sections : defaultValues.sections)}
          </div>
        </div>
        <p className="text-muted text-right pt-2">
          {!isPreview ? data.footer : defaultValues.footer}
        </p>
      </div>
    </div>
  );
};
