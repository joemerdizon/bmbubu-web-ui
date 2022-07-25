import React from "react";

export const Organization = () => {
  return (
    <div className="card">
      <div className="card-header p-0" id="headingFour">
        <h2 className="mb-0">
          <button
            className="d-flex py-4 px-4 align-items-center justify-content-between btn btn-link collapsed"
            data-toggle="collapse"
            data-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            <p className="mb-0">Organization</p>
            <i className="myaccordion-fa fa" aria-hidden="true"></i>
          </button>
        </h2>
      </div>
      <div
        id="collapseFour"
        className="collapse"
        aria-labelledby="headingFour"
        data-parent="#accordion"
      >
        <div className="card-body px-3">
          <div className="col-12 mt-4">
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" />
                Promotion
                <i className="input-helper"></i>
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" />
                Demotion
                <i className="input-helper"></i>
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" />
                Maintained
                <i className="input-helper"></i>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
