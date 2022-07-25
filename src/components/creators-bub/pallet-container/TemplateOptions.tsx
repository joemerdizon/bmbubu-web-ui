import React from "react";
interface TemplateOptionsProps {
  onSaveClick(): void;
}

export const TemplateOptions = (props: TemplateOptionsProps) => {
  const { onSaveClick } = props;

  const handleOnSaveClick = () => onSaveClick();

  return (
    <div className="card">
      <div className="card-header p-0" id="headingTwo">
        <h2 className="mb-0">
          <button
            className="d-flex py-4 px-4 align-items-center justify-content-between btn btn-link collapsed"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <p className="mb-0">Template Options </p>
            <i className="myaccordion-fa fa" aria-hidden="true"></i>
          </button>
        </h2>
      </div>
      <div
        id="collapseTwo"
        className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordion"
      >
        <div className="card-body px-3">
          <div className="col-12 my-4">
            <button
              type="button"
              className="btn btn-primary btn-sm btn-block text-left"
            >
              <i className="fa fa-upload mr-3"></i> Publish
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm btn-block text-left"
            >
              <i className="fa fa-vial mr-3"></i> Simulate Again
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm btn-block text-left"
            >
              <i className="fa fa-paper-plane mr-3"></i> Send for Approval
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm btn-block text-left"
            >
              <i className="fa fa-window-close mr-3"></i> Cancel
            </button>
            <button
              type="button"
              className="btn btn-success btn-sm btn-block text-left"
              onClick={() => handleOnSaveClick()}
            >
              <i className="fa fa-save mr-3"></i> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
