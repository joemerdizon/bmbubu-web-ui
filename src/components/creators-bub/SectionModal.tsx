import React, { ChangeEvent, useEffect, useState } from "react";
import CSS from "csstype";
import {
  ReportTemplateSectionDto,
  SectionReference,
} from "../../lib/dto/report.template.dto";
import { TemplateTask } from "./pallet-container/TemplateTask";
import { SectionReferenceTree } from "./SectionReferenceTree";

interface SectionModalProps {
  isEdit: false;
  onHide(): void;
  onSave(sectionDto: ReportTemplateSectionDto): void;
}

export const SectionModal = (props: SectionModalProps) => {
  // global variables
  const { isEdit, onHide, onSave } = props;

  const styles: CSS.Properties = {
    height: "500px",
    scrollbarWidth: "thin",
    background: "#f5f7ff",
  };

  const previewValue: ReportTemplateSectionDto = {
    name: "",
    description: "",
    references: [],
  };

  // states
  const [section, setSection] =
    useState<ReportTemplateSectionDto>(previewValue);

  // functions
  const handleOnClose = () => onHide();

  const handleOnSaveClick = () => {
    onSave(section);
  };

  const handleAddReference = (reference: SectionReference) => {
    const newReferences: SectionReference[] = [
      ...section.references,
      reference,
    ];

    setSection({ ...section, references: newReferences });
  };

  const handleOnInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSection({ ...section, [event.target.id]: event.target.value });

  useEffect(() => {}, [section]);

  return (
    <div
      className="modal fade"
      id="modal-add-section"
      data-backdrop="static"
      data-keyboard="false"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header p-3 pr-4">
            <h5 className="modal-title">
              <i className="mdi  mdi mdi-format-indent-increase"></i>
              {` ${isEdit ? "Edit" : "Add"} Section`}
            </h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              data-dismiss="modal"
              onClick={handleOnClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body p-4 overflow-auto" style={styles}>
            <div className="row h-100">
              <div className="col-8">
                <div className="card h-100 mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="card mb-3">
                          <div className="card-header bg-light shadow-sm rounded-top">
                            <div className="position-relative">
                              <input
                                type="text"
                                className="creators-hub-input-text bg-light h4 font-weight-bold"
                                id="name"
                                placeholder="&#xf304; Section Header"
                                value={section.name}
                                onChange={(e) => handleOnInputChange(e)}
                              />
                              <span className="creators-hub-input-text-border"></span>
                            </div>
                            <div className="position-relative">
                              <input
                                type="text"
                                className="creators-hub-input-text bg-light text-muted"
                                id="description"
                                placeholder="&#xf304; Section Header Description"
                                value={section.description}
                                onChange={(e) => handleOnInputChange(e)}
                              />
                              <span className="creators-hub-input-text-border"></span>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="card-body px-3">
                              <SectionReferenceTree
                                data={section.references}
                                isEditable={true}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <TemplateTask onReferenceChecked={handleAddReference} />
              </div>
            </div>
          </div>
          <div className="modal-footer py-2">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              data-dismiss="modal"
              onClick={handleOnSaveClick}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              data-dismiss="modal"
              onClick={handleOnClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
