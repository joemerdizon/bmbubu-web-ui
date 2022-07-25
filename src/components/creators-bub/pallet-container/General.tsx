import React from "react";

interface GeneralProps {
  onAddHeader(): void;
  onAddSection(): void;
}

export const General = ({ onAddHeader, onAddSection }: GeneralProps) => {
  const handleOnAddHeaderClick = () => onAddHeader();
  const handleOnAddSectionClick = () => onAddSection();
  return (
    <div className="card">
      <div className="card-header p-0" id="headingThree">
        <h2 className="mb-0">
          <button
            className="d-flex py-4 px-4 align-items-center justify-content-between btn btn-link collapsed"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <p className="mb-0">General</p>
            <i className="myaccordion-fa fa" aria-hidden="true"></i>
          </button>
        </h2>
      </div>
      <div
        id="collapseThree"
        className="collapse"
        aria-labelledby="headingThree"
        data-parent="#accordion"
      >
        <div className="card-body px-3">
          <div className="col-12 my-4">
            <button
              type="button"
              className="btn btn-primary btn-sm btn-block text-left"
              data-toggle="modal"
              data-target="#modal-add-header"
              onClick={handleOnAddHeaderClick}
            >
              <i className="mdi mdi-format-vertical-align-top mr-3"></i>
              Add Header
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm btn-block text-left"
              data-toggle="modal"
              data-target="#modal-add-section"
              onClick={handleOnAddSectionClick}
            >
              <i className="mdi  mdi mdi-format-indent-increase mr-3"></i>
              Add Section
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm btn-block text-left"
            >
              <i className="mdi mdi-format-vertical-align-bottom mr-3"></i>
              Add Footer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
