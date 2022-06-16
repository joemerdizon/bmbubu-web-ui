import { FC } from "react";
import { Anchor } from "../custom-web-controls/Anchor";
import { Button } from "../custom-web-controls/Button";
import { StatusLightIndicator } from "../custom-web-controls/StatusLightIndicator";
import { convertToDateString } from "../../lib/common/helpers";

export const GenerateReportDetails = () => {    
  function launchReportActionModal() {
    // $('#modal-fullscreen-xl-generate-report-action').modal('show');
    console.log('Alamu para eyamu mag error, hahaha');
  }
  
  return (
    <>
      <div className="col-md-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <Button class_name={"btn btn-primary btn-sm btn-icon-text float-right"} icon={"fa-solid fa-circle-plus mr-1"} value={"Generate Report"} modal={{toggle: "modal", target: "#modal-fullscreen-xl-generate-report"}} />          
            {/* <Anchor href={"javascript:void(0);"} icon={"fa-solid fa-arrow-up-right-from-square"} tooltip={{toggle: "tooltip", placement: "bottom", title: "Open Description and/or Other Documents"}} modal={{toggle: "modal", target: "#modal-fullscreen-xl-generate-report-action"}} /> */}
            <p className="card-title">
              <i className="fa fa-desktop mr-2" />
              Generate Reports
            </p>
            <div className="my-3">
              <hr />
            </div>
            <form>
              <div className="form-group mb-0 row">
                <label htmlFor="name_of_report" className="col-sm-3 col-form-label text-right required">
                  Name of Report
                </label>
                <div className="col-sm-6">
                  <select id="name_of_report" className="form-control" required>
                    <option disabled selected />
                    <option value="Sample Report Name 1">Sample Report Name 1</option>
                    <option value="Sample Report Name 2">Sample Report Name 2</option>
                    <option value="Sample Report Name 3">Sample Report Name 3</option>
                    <option value="Sample Report Name 4">Sample Report Name 4</option>
                  </select>
                </div>
              </div>
              <div className="form-group mb-0 row">
                <label htmlFor="status" className="col-sm-3 col-form-label text-right required">
                  Status
                </label>
                <div className="col-sm-6">
                  <select id="status" className="form-control" required>
                    <option disabled selected />
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="form-group mb-4 row">
                <label htmlFor="date-range" className="col-sm-3 col-form-label text-right required">
                  Date Range
                </label>
                <div className="col-sm-3">
                  <input type="date" className="form-control" id="date-from" />
                  <small id="passwordHelpBlock" className="form-text text-muted">
                    Date from
                  </small>
                </div>
                <div className="col-sm-3">
                  <input type="date" className="form-control" id="date-to" />
                  <small id="passwordHelpBlock" className="form-text text-muted">
                    Date to
                  </small>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal Fullscreen xl */}
      <div className="modal fade modal-fullscreen" id="modal-fullscreen-xl-generate-report" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-11">
                  <div className="card bg-light border mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 col-sm-2">
                          <p className="m-0">
                            <b className="text-primary mr-2">ID No:</b>
                            1001
                          </p>
                        </div>
                        <div className="col-12 col-sm-2">
                          <p className="m-0">
                            <b className="text-primary mr-2">Name:</b>
                            Jay Strouse
                          </p>
                        </div>
                        <div className="col-12 col-sm-3">
                          <p className="m-0">
                            <b className="text-primary mr-2">Report:</b>
                            Test template report
                          </p>
                        </div>
                        <div className="col-12 col-sm-3">
                          <p className="m-0">
                            <b className="text-primary mr-2">Range:</b>
                            Feb 01, 2022 - Feb 28, 2022
                          </p>
                        </div>
                        <div className="col-12 col-sm-2">
                          <p className="m-0">
                            <b className="text-primary mr-2">Date:</b>
                            Mar 04, 2022
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1 text-right">
                  <span className="fa-stack fa-2x">
                    <i className="fa fa-circle fa-stack-2x text-primary" />
                    <i className="fa-solid fa-chart-bar fa-stack-1x text-white" />
                  </span>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12">
                  <small>Report Progress:</small>
                  <div className="progress" style={{ height: "20px" }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                      50%
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="table-responsive">
                    <span className="badge badge-primary">
                      <i className="fa-solid fa-list-check mr-2" /> Task 1
                    </span>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Task Name</th>
                          <th>Assigned</th>
                          <th>Approver</th>
                          <th>Due Date</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="font-weight-bold">
                          <td>Test template task 1</td>
                          <td>Yes</td>
                          <td>
                            <img src="images/faces/face1.jpg" alt="image" className="mr-3" />
                            Jay Strouse
                          </td>
                          <td>February 10, 2022</td>
                          <td className="my-auto">
                            <StatusLightIndicator status={1} />                            
                          </td>
                          <td>                            
                            <Anchor href={"javascript:void(0);"} icon={"fa-solid fa-arrow-up-right-from-square"} tooltip={{toggle: "tooltip", placement: "bottom", title: "Open Description and/or Other Documents"}} modal={{toggle: "modal", target: "#modal-fullscreen-xl-generate-report-action"}} />                            
                          </td>
                        </tr>
                        <tr>
                          <td className="pl-5">Test action item 1</td>
                          <td>Yes</td>
                          <td>&nbsp;</td>
                          <td>February 10, 2022</td>
                          <td className="my-auto">
                            <svg height={13} width={10} className="mr-1">
                              <circle cx={5} cy={5} r={5} fill="#ba3742" />
                            </svg>
                            Pending
                          </td>
                          <td>
                            <Anchor href={"javascript:void(0);"} icon={"fa-solid fa-arrow-up-right-from-square"} tooltip={{toggle: "tooltip", placement: "bottom", title: "Open Description and/or Other Documents"}} modal={{toggle: "modal", target: "#modal-fullscreen-xl-generate-report-action"}} />                            
                          </td>
                        </tr>
                        <tr className="font-weight-bold">
                          <td>Test template task 1</td>
                          <td>Yes</td>
                          <td>
                            <img src="images/faces/face1.jpg" alt="image" className="mr-3" />
                            Jay Strouse
                          </td>
                          <td>February 15, 2022</td>
                          <td>
                            <svg height={13} width={10} className="mr-1">
                              <circle cx={5} cy={5} r={5} fill="#fc8a34" />
                            </svg>
                            Active
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="pl-5">Test action item 1</td>
                          <td>Yes</td>
                          <td>&nbsp;</td>
                          <td>February 15, 2022</td>
                          <td>
                            <svg height={13} width={10} className="mr-1">
                              <circle cx={5} cy={5} r={5} fill="#fc8a34" />
                            </svg>
                            Active
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr className="font-weight-bold">
                          <td>Test template task 1</td>
                          <td>Yes</td>
                          <td>
                            <img src="images/faces/face1.jpg" alt="image" className="mr-3" />
                            Jay Strouse
                          </td>
                          <td>February 20, 2022</td>
                          <td>
                            <svg height={13} width={10} className="mr-1">
                              <circle cx={5} cy={5} r={5} fill="#529f50" />
                            </svg>
                            Completed
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="pl-5">Test action item 1</td>
                          <td>Yes</td>
                          <td>&nbsp;</td>
                          <td>February 20, 2022</td>
                          <td>
                            <svg height={13} width={10} className="mr-1">
                              <circle cx={5} cy={5} r={5} fill="#529f50" />
                            </svg>
                            Completed
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-12">
                  <div className="table-responsive">
                    <span className="badge badge-primary">
                      <i className="fa-solid fa-list-check mr-2" /> Task 2
                    </span>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Task Name</th>
                          <th>Assigned</th>
                          <th>Approver</th>
                          <th>Due Date</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="font-weight-bold">
                          <td>Test template task 2</td>
                          <td>Yes</td>
                          <td>
                            <img src="images/faces/face1.jpg" alt="image" className="mr-3" />
                            Jay Strouse
                          </td>
                          <td>February 10, 2022</td>
                          <td className="my-auto">
                            <svg height={13} width={10} className="mr-1">
                              <circle cx={5} cy={5} r={5} fill="#ba3742" />
                            </svg>
                            Pending
                          </td>
                          <td>
                            <Anchor href={"javascript:void(0);"} icon={"fa-solid fa-arrow-up-right-from-square"} tooltip={{toggle: "tooltip", placement: "bottom", title: "Open Description and/or Other Documents"}} modal={{toggle: "modal", target: "#modal-fullscreen-xl-generate-report-action"}} />                            
                          </td>
                        </tr>
                        <tr>
                          <td className="pl-5">Test action item 2</td>
                          <td>Yes</td>
                          <td>&nbsp;</td>
                          <td>February 10, 2022</td>
                          <td className="my-auto">
                            <svg height={13} width={10} className="mr-1">
                              <circle cx={5} cy={5} r={5} fill="#ba3742" />
                            </svg>
                            Pending
                          </td>
                          <td>
                            <Anchor href={"javascript:void(0);"} icon={"fa-solid fa-arrow-up-right-from-square"} tooltip={{toggle: "tooltip", placement: "bottom", title: "Open Description and/or Other Documents"}} modal={{toggle: "modal", target: "#modal-fullscreen-xl-generate-report-action"}} />                            
                          </td>
                        </tr>
                        <tr>
                          <td className="pl-5">Test action item 3</td>
                          <td>Yes</td>
                          <td>&nbsp;</td>
                          <td>February 10, 2022</td>
                          <td className="my-auto">
                            <svg height={13} width={10} className="mr-1">
                              <circle cx={5} cy={5} r={5} fill="#ba3742" />
                            </svg>
                            Pending
                          </td>
                          <td>
                            <Anchor href={"javascript:void(0);"} icon={"fa-solid fa-arrow-up-right-from-square"} tooltip={{toggle: "tooltip", placement: "bottom", title: "Open Description and/or Other Documents"}} modal={{toggle: "modal", target: "#modal-fullscreen-xl-generate-report-action"}} />                            
                          </td>
                        </tr>
                        <tr className="font-weight-bold">
                          <td>Test template task 2</td>
                          <td>Yes</td>
                          <td>
                            <img src="images/faces/face1.jpg" alt="image" className="mr-3" />
                            Jay Strouse
                          </td>
                          <td>February 15, 2022</td>
                          <td>
                            <svg height={13} width={10} className="mr-1">
                              <circle cx={5} cy={5} r={5} fill="#fc8a34" />
                            </svg>
                            Active
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="pl-5">Test action item 2</td>
                          <td>Yes</td>
                          <td>&nbsp;</td>
                          <td>February 15, 2022</td>
                          <td>
                            <svg height={13} width={10} className="mr-1">
                              <circle cx={5} cy={5} r={5} fill="#fc8a34" />
                            </svg>
                            Active
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="pl-5">Test action item 3</td>
                          <td>Yes</td>
                          <td>&nbsp;</td>
                          <td>February 15, 2022</td>
                          <td>
                            <svg height={13} width={10} className="mr-1">
                              <circle cx={5} cy={5} r={5} fill="#fc8a34" />
                            </svg>
                            Active
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr className="font-weight-bold">
                          <td>Test template task 2</td>
                          <td>Yes</td>
                          <td>
                            <img src="images/faces/face1.jpg" alt="image" className="mr-3" />
                            Jay Strouse
                          </td>
                          <td>February 20, 2022</td>
                          <td>
                            <svg height={13} width={10} className="mr-1">
                              <circle cx={5} cy={5} r={5} fill="#529f50" />
                            </svg>
                            Completed
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="pl-5">Test action item 2</td>
                          <td>Yes</td>
                          <td>&nbsp;</td>
                          <td>February 20, 2022</td>
                          <td>
                            <svg height={13} width={10} className="mr-1">
                              <circle cx={5} cy={5} r={5} fill="#529f50" />
                            </svg>
                            Completed
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td className="pl-5">Test action item 3</td>
                          <td>Yes</td>
                          <td>&nbsp;</td>
                          <td>February 20, 2022</td>
                          <td>
                            <svg height={13} width={10} className="mr-1">
                              <circle cx={5} cy={5} r={5} fill="#529f50" />
                            </svg>
                            Completed
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer py-2">
              <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">
                Close
              </button>
              <Button class_name="btn btn-primary btn-sm" icon="fa-solid fa-download" value="Save and Download" />
              <Button class_name="btn btn-primary btn-sm" icon="fa-solid fa-floppy-disk" value="Save" />              
            </div>
          </div>
        </div>
      </div>
      {/* Modal Fullscreen xl (Layer 2) */}
      <div className="modal fade modal-fullscreen" id="modal-fullscreen-xl-generate-report-action" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="m-0">Job Description and/or other Document(s)</h3>
              <button type="button" className="close mr-1" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body" style={{ background: "#f5f7ff" }}>
              <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title m-0 mb-2">Assignment Information</p>
                      <div className="card bg-light border mb-5">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-12 col-sm-4">
                              <p className="m-0">
                                <b className="text-primary mr-2">Assign to:</b>
                                Nurse A Test
                              </p>
                            </div>
                            <div className="col-12 col-sm-4">
                              <p className="m-0">
                                <b className="text-primary mr-2">Assigned by:</b>
                                Brooke Lemmo
                              </p>
                            </div>
                            {/* <div class="col-12 col-sm-2">
                            <p class="m-0">
                              <b class="text-primary mr-2">Viewers:</b>
                              Brooke Lemmo
                            </p>                          
                          </div> */}
                            {/* <div class="col-12 col-sm-3">
                            <p class="m-0">
                              <b class="text-primary mr-2">Backup Owners:</b>
                              Brooke Lemmo
                            </p>
                          </div> */}
                            <div className="col-12 col-sm-4">
                              <p className="m-0">
                                <b className="text-primary mr-2">Approver:</b>
                                Brooke Lemmo
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="card-title m-0 mb-2">General Information</p>
                      <div className="card bg-light border">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-12 col-sm-4">
                              <p className="m-0">
                                <b className="text-primary mr-2">Name:</b>
                                Job Description and/or other Document(s)
                              </p>
                            </div>
                            <div className="col-12 col-sm-8">
                              <p className="m-0">
                                <b className="text-primary mr-2">Description:</b>
                                ----
                              </p>
                            </div>
                            {/* <div class="col-12 col-sm-4">
                            <p class="m-0">
                              <b class="text-primary mr-2">Category:</b>
                              CIHQ Standards and Requirements
                            </p>                          
                          </div>
                          <div class="col-12 col-sm-2">
                            <p class="m-0">
                              <b class="text-primary mr-4">Sub Category:</b>
                              Competency of Staff
                            </p>
                          </div> */}
                            <div className="col-12 col-sm-4">
                              <p className="m-0">
                                <b className="text-primary mr-2">Due Date:</b>
                                April 30, 2022
                              </p>
                            </div>
                            <div className="col-12 col-sm-4">
                              <p className="m-0">
                                <b className="text-primary mr-2">Head's Up Days:</b>2 Days
                              </p>
                            </div>
                            <div className="col-12 col-sm-4">
                              <p className="m-0">
                                <b className="text-primary mr-2">Urgent Days:</b>1 Day
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pb-5 mb-5 border-bottom" />
                      <p className="card-title m-0 mb-2">Related Objectives</p>
                      <table id="data-table-generate-report-action-related-objectives" className="table table-striped table-bordered" style={{ width: "100%" }}>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Assign To</th>
                            <th>Status</th>
                            <th>Due Date</th>
                            {/* <th>Category</th>
                            <th>Sub Category</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Job Description and/or other Document(s)</td>
                            <td>Nurse B Test</td>
                            <td>Pending</td>
                            <td>April 30, 2022</td>
                            {/* <td>CIHQ Standards and Requirements</td>
                            <td>Competency of Staff</td> */}
                          </tr>
                        </tbody>
                      </table>
                      <div className="pb-5 mb-5 border-bottom" />
                      <p className="card-title m-0 mb-2">Action Items</p>
                      <div className="mb-4">
                        <small>Progress:</small>
                        <div className="progress" style={{ height: "20px" }}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                            50%
                          </div>
                        </div>
                      </div>
                      <table id="data-table-generate-report-action-items" className="table table-striped table-bordered mb-5" style={{ width: "100%" }}>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Assign To</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="text-wrap">The minimum education, training experience, health clearances and, where applicable, licensure</div>
                            </td>
                            <td>CIHQ Standards and Requirements</td>
                            <td>Nurse A Test</td>
                            <td>April 30, 2022</td>
                            <td>Completed</td>
                            <td className="text-center">
                              <a href="javascript:void(0);" className="text-decoration-none mx-1">
                                <div className="badge badge-pill badge-danger">
                                  <i className="fa-solid fa-paperclip" /> 2
                                </div>
                              </a>
                              <a href="javascript:void(0);" className="text-decoration-none mx-1">
                                <div className="badge badge-pill badge-warning">
                                  <i className="fa-solid fa-comments" /> 0
                                </div>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="text-wrap">The principal duties and responsibilities of the job position</div>
                            </td>
                            <td>CIHQ Standards and Requirements</td>
                            <td>Nurse A Test</td>
                            <td>April 30, 2022</td>
                            <td>Completed</td>
                            <td className="text-center">
                              <a href="javascript:void(0);" className="text-decoration-none mx-1">
                                <div className="badge badge-pill badge-danger">
                                  <i className="fa-solid fa-paperclip" /> 2
                                </div>
                              </a>
                              <a href="javascript:void(0);" className="text-decoration-none mx-1">
                                <div className="badge badge-pill badge-warning">
                                  <i className="fa-solid fa-comments" /> 0
                                </div>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="pb-5 mb-5 border-bottom" />
                      <p className="card-title m-0 mb-2">Refference Materials</p>
                      <ul className="nav nav-tabs" id="setting-panel" role="tablist">
                        {/* <li class="nav-item">
                        <a class="nav-link" id="refference-materials-tab" data-toggle="tab" href="#refference-materials-section" role="tab" aria-controls="refference-materials-section" aria-expanded="true">
                          Refference Materials <span class="badge badge-light ml-3">0</span>
                        </a>
                      </li> */}
                        <li className="nav-item">
                          <a className="nav-link active" id="attachments-tab" data-toggle="tab" href="#attachments-section" role="tab" aria-controls="attachments-section">
                            Attachments <span className="badge badge-light ml-3">0</span>
                          </a>
                        </li>
                        {/* <li class="nav-item">
                        <a class="nav-link" id="playbook-files-tab" data-toggle="tab" href="#playbook-files-section" role="tab" aria-controls="playbook-files-section">
                          Playbook Files <span class="badge badge-light ml-3">0</span>
                        </a>
                      </li> */}
                      </ul>
                      <div className="tab-content" id="setting-content">
                        {/* <div class="tab-pane fade show active scroll-wrapper" id="refference-materials-section" role="tabpanel" aria-labelledby="refference-materials-section">
                        <div class="wrapper wrapper-content animated fadeInRight">            
                          <div class="card bg-light border mb-5">                    
                            <div class="card-body">
                              <div class="row">
                                <div class="col-12 col-sm-6">
                                  <p class="m-0">
                                    <b class="text-primary mr-2">Name:</b>
                                    ----
                                  </p>
                                </div>                        
                                <div class="col-12 col-sm-6">
                                  <p class="m-0">
                                    <b class="text-primary mr-2">Action:</b>
                                    ----
                                  </p>
                                </div>                  
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>                     */}
                        <div className="tab-pane fade" id="attachments-section" role="tabpanel" aria-labelledby="attachments-section">
                          <div className="wrapper wrapper-content animated fadeInRight">
                            <div className="card bg-light border mb-5">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-12 col-sm-6">
                                    <p className="m-0">
                                      <b className="text-primary mr-2">Name:</b>
                                      ----
                                    </p>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <p className="m-0">
                                      <b className="text-primary mr-2">Action:</b>
                                      ----
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div class="tab-pane fade" id="playbook-files-section" role="tabpanel" aria-labelledby="playbook-files-section">
                        <div class="wrapper wrapper-content animated fadeInRight">            
                          <div class="card bg-light border mb-5">                    
                            <div class="card-body">
                              <div class="row">
                                <div class="col-12 col-sm-6">
                                  <p class="m-0">
                                    <b class="text-primary mr-2">Name:</b>
                                    ----
                                  </p>
                                </div>                        
                                <div class="col-12 col-sm-6">
                                  <p class="m-0">
                                    <b class="text-primary mr-2">Action:</b>
                                    ----
                                  </p>
                                </div>                  
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      </div>
                      <div className="mb-5 border-bottom" />
                      <p className="card-title m-0 mb-2">Comments and Notes</p>
                      <div className="accordion collapase-card" id="commentsAndNotesAccordion">
                        <div className="card bg-light border">
                          <div className="card-header" id="commentsAndNotes">
                            <a
                              href="#"
                              className="btn btn-header-link text-dark"
                              data-toggle="collapse"
                              data-target="#commentsAndNotesSection"
                              aria-expanded="true"
                              aria-controls="commentsAndNotesSection"
                            >
                              User Comments
                            </a>
                          </div>
                          <div id="commentsAndNotesSection" className="collapse" aria-labelledby="commentsAndNotes" data-parent="#commentsAndNotesAccordion">
                            <div className="card-body pt-4">
                              <textarea name="user-comments" className="form-control" rows={4} defaultValue={""} />
                              <div className="w-100 mt-3">
                                <span className="font-weight-bold mr-5">Notify by email: </span>
                                <span className="mr-5">
                                  <input type="checkbox" id="owner" className="form-check-input" />
                                  <label htmlFor="owner">Owner</label>
                                </span>
                                {/* <span class="mr-5">
                                <input type="checkbox" id="viewer" class="form-check-input">
                                <label for="viewer">Viewer</label>
                              </span> */}
                                {/* <span class="mr-5">
                                <input type="checkbox" id="backup-owners" class="form-check-input">
                                <label for="backup-owners">Backup Owners</label>
                              </span> */}
                                {/* <span class="mr-5">
                                <input type="checkbox" id="approver" class="form-check-input">
                                <label for="approver">Approver</label>
                              </span> */}
                                <button type="button" className="btn btn-primary btn-icon-text btn-sm float-right">
                                  <i className="fa-solid fa-comment-medical" /> Add Comment
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="card-title m-0 mb-2">Approval File Upload</p>
                      <div className="accordion collapase-card" id="approvalFileUploadAccordion">
                        <div className="card bg-light border">
                          <div className="card-header" id="approvalFileUpload">
                            <a
                              href="#"
                              className="btn btn-header-link text-dark"
                              data-toggle="collapse"
                              data-target="#approvalFileUploadSection"
                              aria-expanded="true"
                              aria-controls="approvalFileUploadSection"
                            >
                              Document Name
                            </a>
                          </div>
                          <div id="approvalFileUploadSection" className="collapse" aria-labelledby="approvalFileUpload" data-parent="#approvalFileUploadAccordion">
                            <div className="card-body pt-4">
                              <span>
                                <i className="fa-solid fa-file-pdf mr-2" /> NCLEX_Certificate.pdf
                              </span>
                              <button type="button" className="btn btn-primary btn-icon-text btn-sm float-right">
                                <i className="fa-solid fa-file-export" /> Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pb-4 mb-4 border-bottom" />
                      {/* <div class="pl-4">
                      <span class="mr-5">
                        <input type="checkbox" id="chart" class="form-check-input">
                        <label for="chart">Add to Transparency Chart</label>
                      </span>
                      <span class="mr-5">
                        <input type="checkbox" id="calendar" class="form-check-input">
                        <label for="calendar">Add to Calendar</label>
                      </span>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer py-2">
              <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}