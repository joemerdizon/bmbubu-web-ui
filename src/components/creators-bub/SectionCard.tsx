import React from "react";
import CSS from "csstype";
import { ReportTemplateSectionDto } from "../../lib/dto/report.template.dto";
import { isEmpty } from "lodash";
import { SectionReferenceTree } from "./SectionReferenceTree";

interface SectionCardProps {
  data: ReportTemplateSectionDto;
  isDisabled: boolean;
}
const styles: CSS.Properties = {
  pointerEvents: "none",
};

export const SectionCard = (props: SectionCardProps) => {
  const { data, isDisabled } = props;
  const { name, description, references } = data;

  return (
    <div className="card">
      <div className="card-header p-0" id="headingOneTemplateSections">
        <h2 className="mb-0">
          <button
            className="d-flex py-4 px-4 align-items-center justify-content-between btn btn-link collapsed"
            data-toggle="collapse"
            data-target="#collapseOneTemplateSections"
            aria-expanded="false"
            aria-controls="collapseOneTemplateSections"
            disabled={isDisabled ? true : false}
          >
            <div className="text-left">
              <h4 className="text-muted font-weight-bold m-0 mb-1">{name}</h4>
              <small className="text-muted d-block">{description}</small>
            </div>
            <div className="float-right">
              <a href="#" className="mx-1 text-decoration-none text-secondary">
                <i className="fa-solid fa-pen-to-square"></i>
              </a>
              <a href="#" className="mx-1 text-decoration-none text-secondary">
                <i className="fa-solid fa-circle-minus"></i>
              </a>
              <i className="mx-1 myaccordion-fa fa" aria-hidden="true"></i>
            </div>
          </button>
        </h2>
      </div>
      {references && !isEmpty(references) ? (
        <div
          id="collapseOneTemplateSections"
          className="collapse show"
          aria-labelledby="headingOneTemplateSections"
          data-parent="#accordion-template-sections"
        >
          <div className="card-body px-3" style={styles}>
            <SectionReferenceTree data={references} isEditable={false} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
