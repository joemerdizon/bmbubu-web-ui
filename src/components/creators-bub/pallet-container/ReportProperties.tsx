import React, { ChangeEvent, useState } from "react";

interface ReportPropertiesProps {
  /*fields: {
    reportName: string;
    status?: string;
    tags?: string[];
    allowAssingment?: boolean;
  };*/
  onChangeField(field: string, value: string | number): void;
}

export const ReportProperties = ({ onChangeField }: ReportPropertiesProps) => {
  const initialValues = {
    reportName: "",
  };

  const [reportProperties, setReportProperties] = useState(initialValues);

  const handlePropertyChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setReportProperties({
      ...reportProperties,
      [event.target.id]: event.target.value,
    });
    onChangeField(event.target.id, event.target.value);
  };

  return (
    <div className="card">
      <div className="card-header p-0" id="headingOne">
        <h2 className="mb-0">
          <button
            className="d-flex py-4 px-4 align-items-center justify-content-between btn btn-link collapsed"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <p className="mb-0">Report Properties</p>
            <i className="myaccordion-fa fa" aria-hidden="true"></i>
          </button>
        </h2>
      </div>
      <div
        id="collapseOne"
        className="collapse show border-bottom"
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div className="card-body px-0">
          <div className="col-12 my-4">
            <form>
              <div className="form-group mb-2 row">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="reportName"
                    placeholder="Name of Report"
                    value={reportProperties.reportName}
                    onChange={(e) => handlePropertyChanged(e)}
                  />
                </div>
              </div>
              <div className="form-group mb-2 row">
                <div className="col-sm-12">
                  <select id="status" className="form-control" required>
                    <option disabled selected>
                      Select Status
                    </option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="form-group mb-2 row">
                <div className="col-sm-12">
                  <input
                    type="text"
                    data-role="tagsinput"
                    id="tags"
                    className="form-control"
                    placeholder="Tags"
                  />
                  <small className="form-text text-muted">
                    Use comma "," to separate tags from each other.
                  </small>
                </div>
              </div>
              <div className="form-group mb-0 row">
                <label
                  htmlFor="tags"
                  className="col-sm-6 col-form-label text-right"
                >
                  Allow Assignment
                </label>
                <div className="col-sm-6 pt-2">
                  <div className="custom-toggle">
                    <label className="switch switch-left-right">
                      <input className="switch-input" type="checkbox" />
                      <span
                        className="switch-label"
                        data-on="Yes"
                        data-off="No"
                      ></span>
                      <span className="switch-handle"></span>
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
