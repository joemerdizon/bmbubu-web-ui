import React from "react";
import { SectionReference } from "../../../lib/dto/report.template.dto";
import { ReferenceLegends } from "./ReferenceLegends";
import { ReferenceTree } from "./ReferenceTree";

interface TemplateTaskProps {
  onReferenceChecked(reference: SectionReference): void;
}

export const TemplateTask = ({ onReferenceChecked }: TemplateTaskProps) => {
  const handleReferenceChecked = (reference: SectionReference) => {
    onReferenceChecked(reference);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="row mb-4">
          <div className="col-md-12 col-12">
            <p className="card-title">
              <i className="fa-solid fa-list-check"></i>
              Template Tasks
            </p>
            <div className="my-3">
              <hr />
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for..."
                aria-label="Search for..."
              />
              <div className="input-group-append">
                <button className="btn btn-sm btn-primary" type="button">
                  <i className="icon-search"></i>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-12 mb-3">
            <div
              id="accordion-reference-legends"
              className="myaccordion w-100 rounded"
            >
              <div className="card">
                <ReferenceLegends />
              </div>
            </div>
          </div>

          <div className="col-md-12 col-12">
            <div className="my-3">
              <hr />
            </div>
            <p className="font-weight-bold">Reference</p>
            <div className="col-12 p-0">
              <ReferenceTree onReferenceChecked={handleReferenceChecked} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
