import React from "react"

export const CreatorsHub = () => {
  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title">
                <i className="fa fa-desktop mr-1" />
                Workspace
                <small className="ml-1">(Create Report)</small>
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
                    <input type="text" className="form-control" id="name_of_report" />
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
                <div className="form-group mb-0 row">
                  <label htmlFor="tags" className="col-sm-3 col-form-label text-right required">
                    Tags
                  </label>
                  <div className="col-sm-6">
                    <input type="text" data-role="tagsinput" id="tags" className="form-control" />
                    <small className="form-text text-muted">Use comma "," to separate tags from each other.</small>
                  </div>
                </div>
                <div className="form-group mb-0 row">
                  <label htmlFor="tags" className="col-sm-3 col-form-label text-right">
                    Allow Assignment
                  </label>
                  <div className="col-sm-6 pt-2">
                    <div className="custom-toggle">
                      <label className="switch switch-left-right">
                        <input className="switch-input" type="checkbox" />
                        <span className="switch-label" data-on="Yes" data-off="No" />
                        <span className="switch-handle" />
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row mb-5">
                <div className="col-md-12 col-12">
                  <p className="card-title">
                    <i className="fa-solid fa-list-check mr-1" />
                    Template Tasks
                  </p>
                  <div className="my-3">
                    <hr />
                  </div>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." aria-label="Search for..." />
                    <div className="input-group-append">
                      <button className="btn btn-sm btn-primary" type="button">
                        <i className="icon-search" />
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-12">
                  <p className="font-weight-bold">Reference</p>
                  <div className="border-bottom my-4 pb-4">
                    <span className="d-block">
                      <i className="fa-fw fa-solid fa-folder-plus mr-2 text-primary" />
                      Category
                    </span>
                    <span className="d-block text">
                      <i className="fa-fw fa-solid fa-folder-tree mr-2 text-dark" />
                      Sub Category
                    </span>
                    <span className="d-block text">
                      <i className="fa-fw fa-solid fa-person-running mr-2 text-warning" />
                      Action Item
                    </span>
                    <span className="d-block text">
                      <i className="fa-fw fa-solid fa-file-circle-check mr-2 text-success" />
                      Approved Task Template
                    </span>
                    <span className="d-block text">
                      <i className="fa-fw fa-solid fa-file-circle-xmark mr-2 text-danger" />
                      Not Approved Task Template
                    </span>
                  </div>
                  <ul id="tree1">
                    <li>
                      <input type="checkbox" className="item1" id="item1" data-content /> <i className="fa-solid fa-folder-plus mx-1 text-primary" />
                      <a href="#"> </a>
                      <ul>
                        <li>
                          <input type="checkbox" className="item1" id="item1sub1" data-content="Sub Item 1" /> <i className="fa-solid fa-folder-tree mx-1 text-dark" />
                          Sub Item 1
                        </li>
                        <li>
                          <input type="checkbox" className="item1" id="item1sub2" data-content="Sub Item 2" /> <i className="fa-solid fa-folder-tree mx-1 text-dark" />
                          Sub Item 2
                          <ul>
                            <li>
                              <input type="checkbox" className="item1" id="item1subsub1" data-content="Sub Sub Item 1" /> <i className="fa-solid fa-person-running  mx-1 text-warning" />
                              Sub Sub Item 1
                              <ul>
                                <li>
                                  <input type="checkbox" className="item1" id="item1subsubsub1" data-content="Sub Sub Sub 1" /> <i className="fa-solid fa-file-circle-check mx-1 text-success" />
                                  Sub Sub Sub 1
                                </li>
                                <li>
                                  <input type="checkbox" className="item1" id="item1subsubsub2" data-content="Sub Sub Sub 2" /> <i className="fa-solid fa-file-circle-check mx-1 text-success" />
                                  Sub Sub Sub 2
                                </li>
                                <li>
                                  <input type="checkbox" className="item1" id="item1subsubsub3" data-content="Sub Sub Sub 3" /> <i className="fa-solid fa-file-circle-xmark mx-1 text-danger" />
                                  Sub Sub Sub 3
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <input type="checkbox" className="item1" id="item1sub3" data-content="Sub Item 3" /> <i className="fa-solid fa-folder-tree mx-1 text-dark" />
                          Sub Item 3
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="item2"
                        id="item2"
                        data-content="<h5 class='m-0 py-2 border-bottom'><b>Business Practice Management</b></h5> <span class='panel_toolbox-v2' style='right: 3px;'><a href='#' class='mx-1'><i class='fa fa-edit'></i></a><a href='#' class='mx-1'><i class='fa fa-close'></i></a></span>"
                      />{" "}
                      <i className="fa-solid fa-folder-plus mx-1 text-primary" />
                      <a href="#">Business Practice Management</a>
                      <ul>
                        <li>
                          <input
                            type="checkbox"
                            className="item2"
                            id="item2sub1"
                            data-content="<p class='m-0 py-2 border-bottom'><b>Warranties</b> <span class='float-right'><a href='#' class='mx-1'><i class='fa fa-eye'></i></a><a href='#' class='mx-1'><i class='fa fa-edit'></i></a><a href='#' class='mx-1'><i class='fa fa-close'></i></a></span></p>"
                          />{" "}
                          <i className="fa-solid fa-folder-tree mx-1 text-dark" />
                          Warranties
                          <ul>
                            <li>
                              <input
                                type="checkbox"
                                className="item2"
                                id="item2subsub1"
                                data-content="<p class='m-0 pl-4 py-2 border-bottom'>Warranty Checklist <span class='float-right'><a href='#' class='mx-1'><i class='fa fa-edit'></i></a><a href='#' class='mx-1'><i class='fa fa-close'></i></a></span></p>"
                              />{" "}
                              <i className="fa-solid fa-person-running  mx-1 text-warning" />
                              Warranty Checklist
                              <ul>
                                <li>
                                  <input
                                    type="checkbox"
                                    className="item2"
                                    id="item2subsubsub1"
                                    data-content="<p class='m-0 pl-5 py-2 border-bottom'>Clinic 1 <span class='float-right'><a href='#' class='mx-1'><i class='fa fa-edit'></i></a><a href='#' class='mx-1'><i class='fa fa-close'></i></a></span></p>"
                                  />{" "}
                                  <i className="fa-solid fa-file-circle-check mx-1 text-success" />
                                  Clinic 1
                                </li>
                                <li>
                                  <input
                                    type="checkbox"
                                    className="item2"
                                    id="item2subsubsub2"
                                    data-content="<p class='m-0 pl-5 py-2 border-bottom'>Clinic 2 <span class='float-right'><a href='#' class='mx-1'><i class='fa fa-edit'></i></a><a href='#' class='mx-1'><i class='fa fa-close'></i></a></span></p>"
                                  />{" "}
                                  <i className="fa-solid fa-file-circle-xmark mx-1 text-danger" />
                                  Clinic 2
                                </li>
                                <li>
                                  <input
                                    type="checkbox"
                                    className="item2"
                                    id="item2subsubsub3"
                                    data-content="<p class='m-0 pl-5 py-2 border-bottom'>Workstation 1 <span class='float-right'><a href='#' class='mx-1'><i class='fa fa-edit'></i></a><a href='#' class='mx-1'><i class='fa fa-close'></i></a></span></p>"
                                  />{" "}
                                  <i className="fa-solid fa-file-circle-check mx-1 text-success" />
                                  Workstation 1
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="item3"
                        id="item3"
                        data-content="<h5 class='m-0 py-2 border-bottom'><b>Change Management</b></h5> <span class='panel_toolbox-v2' style='right: 3px;'><a href='#' class='mx-1'><i class='fa fa-edit'></i></a><a href='#' class='mx-1'><i class='fa fa-close'></i></a></span>"
                      />{" "}
                      <i className="fa-solid fa-folder-plus mx-1 text-primary" />
                      <a href="#">Change Management</a>
                      <ul>
                        <li>
                          <input
                            type="checkbox"
                            className="item3"
                            id="item3sub1"
                            data-content="<p class='m-0 py-2 border-bottom'><b>New System Implementation</b> <span class='float-right'><a href='#' class='mx-1'><i class='fa fa-eye'></i></a><a href='#' class='mx-1'><i class='fa fa-edit'></i></a><a href='#' class='mx-1'><i class='fa fa-close'></i></a></span></p>"
                          />{" "}
                          <i className="fa-solid fa-folder-tree mx-1 text-dark" />
                          New System Implementation
                          <ul>
                            <li>
                              <input
                                type="checkbox"
                                className="item3"
                                id="item3subsub1"
                                data-content="<p class='m-0 pl-4 py-2 border-bottom'>CyberKnife Implementation Checklist<span class='float-right'><a href='#' class='mx-1'><i class='fa fa-edit'></i></a><a href='#' class='mx-1'><i class='fa fa-close'></i></a></span></p>"
                              />{" "}
                              <i className="fa-solid fa-person-running  mx-1 text-warning" />
                              CyberKnife Implementation Checklist
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="item4"
                        id="item4"
                        data-content="<h5 class='m-0 py-2 border-bottom'><b>Competency</b></h5> <span class='panel_toolbox-v2' style='right: 3px;'><a href='#' class='mx-1'><i class='fa fa-edit'></i></a><a href='#' class='mx-1'><i class='fa fa-close'></i></a></span>"
                      />{" "}
                      <i className="fa-solid fa-folder-plus mx-1 text-primary" />
                      <a href="#">Competency</a>
                      <ul>
                        <li>
                          <input
                            type="checkbox"
                            className="item4"
                            id="item4sub1"
                            data-content="<p class='m-0 py-2 border-bottom'><b>Doctors Workstation Acquisition</b> <span class='float-right'><a href='#' class='mx-1'><i class='fa fa-eye'></i></a><a href='#' class='mx-1'><i class='fa fa-edit'></i></a><a href='#' class='mx-1'><i class='fa fa-close'></i></a></span></p>"
                          />{" "}
                          <i className="fa-solid fa-folder-tree mx-1 text-dark" />
                          Doctor's Workstation Acquisition
                          <ul>
                            <li>
                              <input
                                type="checkbox"
                                className="item4"
                                id="item4subsub1"
                                data-content="<p class='m-0 pl-4 py-2 border-bottom'>Knows to check daily QC on Radiologist Workstation<span class='float-right'><a href='#' class='mx-1'><i class='fa fa-edit'></i></a><a href='#' class='mx-1'><i class='fa fa-close'></i></a></span></p>"
                              />{" "}
                              <i className="fa-solid fa-file-circle-check mx-1 text-success" />
                              Knows to check daily QC on Radiologist Workstation
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                className="item4"
                                id="item4subsub2"
                                data-content="<p class='m-0 pl-4 py-2 border-bottom'>Can bring patient up on Monitor<span class='float-right'><a href='#' class='mx-1'><i class='fa fa-edit'></i></a><a href='#' class='mx-1'><i class='fa fa-close'></i></a></span></p>"
                              />{" "}
                              <i className="fa-solid fa-file-circle-check mx-1 text-success" />
                              Can bring patient up on Monitor
                            </li>
                          </ul>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            className="item4"
                            id="item4sub2"
                            data-content="<p class='m-0 py-2 border-bottom'><b>Operation of GE Workstation</b> <span class='float-right'><a href='#' class='mx-1'><i class='fa fa-eye'></i></a><a href='#' class='mx-1'><i class='fa fa-edit'></i></a><a href='#' class='mx-1'><i class='fa fa-close'></i></a></span></p>"
                          />{" "}
                          <i className="fa-solid fa-file-circle-check mx-1 text-success" />
                          Operation of GE Workstation
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            className="item4"
                            id="item4sub3"
                            data-content="<p class='m-0 py-2 border-bottom'><b>Receptionist Workflows and Procedures</b> <span class='float-right'><a href='#' class='mx-1'><i class='fa fa-eye'></i></a><a href='#' class='mx-1'><i class='fa fa-edit'></i></a><a href='#' class='mx-1'><i class='fa fa-close'></i></a></span></p>"
                          />{" "}
                          <i className="fa-solid fa-file-circle-check mx-1 text-success" />
                          Receptionist Workflows and Procedures
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            className="item4"
                            id="item4sub4"
                            data-content="<p class='m-0 py-2 border-bottom'><b>Technologist Workflows and Procedures</b> <span class='float-right'><a href='#' class='mx-1'><i class='fa fa-eye'></i></a><a href='#' class='mx-1'><i class='fa fa-edit'></i></a><a href='#' class='mx-1'><i class='fa fa-close'></i></a></span></p>"
                          />{" "}
                          <i className="fa-solid fa-file-circle-check mx-1 text-success" />
                          Technologist Workflows and Procedures
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="checkbox" className="item5" id="item5" /> <i className="fa-solid fa-folder-plus mx-1 text-primary" />
                      <a href="#">Credentialing</a>
                      <ul>
                        <li>
                          <input type="checkbox" className="item5" id="item5sub1" />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="checkbox" className="item6" id="item6" /> <i className="fa-solid fa-folder-plus mx-1 text-primary" />
                      <a href="#">Credentialing Management</a>
                      <ul>
                        <li>
                          <input type="checkbox" className="item6" id="item6sub1" />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="checkbox" className="item7" id="item7" /> <i className="fa-solid fa-folder-plus mx-1 text-primary" />
                      <a href="#">Cultural Contribution</a>
                      <ul>
                        <li>
                          <input type="checkbox" className="item7" id="item7sub1" />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="checkbox" className="item8" id="item8" /> <i className="fa-solid fa-folder-plus mx-1 text-primary" />
                      <a href="#">Knowledge Management</a>
                      <ul>
                        <li>
                          <input type="checkbox" className="item8" id="item8sub1" />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="checkbox" className="item9" id="item9" /> <i className="fa-solid fa-folder-plus mx-1 text-primary" />
                      <a href="#">Operations Management</a>
                      <ul>
                        <li>
                          <input type="checkbox" className="item9" id="item9sub1" />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="checkbox" className="item10" id="item10" /> <i className="fa-solid fa-folder-plus mx-1 text-primary" />
                      <a href="#">Personnel Management</a>
                      <ul>
                        <li>
                          <input type="checkbox" className="item10" id="item10sub1" />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="checkbox" className="item11" id="item11" /> <i className="fa-solid fa-folder-plus mx-1 text-primary" />
                      <a href="#">Practice Management</a>
                      <ul>
                        <li>
                          <input type="checkbox" className="item11" id="item11sub1" />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="checkbox" className="item12" id="item12" /> <i className="fa-solid fa-folder-plus mx-1 text-primary" />
                      <a href="#">Process Management</a>
                      <ul>
                        <li>
                          <input type="checkbox" className="item12" id="item12sub1" />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-12 align-items-stretch">
          <div className="row">
            <div className="col-md-12 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-12">
                      <p className="card-title">
                        <i className="fa-solid fa-clipboard-list mr-1" />
                        Template Options
                      </p>
                      <div className="my-3">
                        <hr />
                      </div>
                    </div>
                    <div className="col-12" style={{ display: "inline-block" }}>
                      <button type="button" className="btn btn-outline-light btn-icon-text btn-sm mr-1">
                        <i className="fa fa-upload" /> Publish
                      </button>
                      <button type="button" className="btn btn-outline-light btn-icon-text btn-sm mr-1">
                        <i className="fa fa-vial" /> Simulate Again
                      </button>
                      <button type="button" className="btn btn-outline-light btn-icon-text btn-sm mr-1">
                        <i className="fa fa-paper-plane" /> Send for Approval
                      </button>
                      <div className="float-right">
                        <button type="button" className="btn btn-outline-danger btn-icon-text btn-sm mr-1">
                          <i className="fa fa-window-close" /> Cancel
                        </button>
                        <button type="button" className="btn btn-outline-success btn-icon-text btn-sm">
                          <i className="fa fa-save" /> Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <h3 className="text-center font-weight-bold pb-4">Sample Header</h3>
                      <div className="card mb-3 rounded-0">
                        <div className="card-header bg-transparent">
                          <h4 className="font-weight-bold m-0">Section 1</h4>
                          <small className="text-muted">Sample Section 1</small>
                          <div className="float-right">
                            <a href="#" className="mx-1 text-decoration-none">
                              <i className="fa-solid fa-pen-to-square" />
                            </a>
                            <a href="#" className="mx-1 text-decoration-none">
                              <i className="fa-solid fa-circle-minus" />
                            </a>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="col-12 border-bottom py-2 px-0">
                            <div className="float-right">
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-pen-to-square" />
                              </a>
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-circle-minus" />
                              </a>
                            </div>
                            <h5 className="font-weight-bold m-0">Business Practice Management</h5>
                          </div>
                          <div className="col-12 border-bottom py-2 px-0">
                            <div className="float-right">
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-eye" />
                              </a>
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-pen-to-square" />
                              </a>
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-circle-minus" />
                              </a>
                            </div>
                            <p className="font-weight-bold m-0">Warranties</p>
                          </div>
                          <div className="col-12 border-bottom py-2 px-0">
                            <div className="float-right">
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-pen-to-square" />
                              </a>
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-circle-minus" />
                              </a>
                            </div>
                            <p className="m-0 pl-4">Warranty Checklist </p>
                          </div>
                          <div className="col-12 border-bottom py-2 px-0">
                            <div className="float-right">
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-pen-to-square" />
                              </a>
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-circle-minus" />
                              </a>
                            </div>
                            <p className="m-0 pl-5">Clinic 1 </p>
                          </div>
                          <div className="col-12 border-bottom py-2 px-0">
                            <div className="float-right">
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-pen-to-square" />
                              </a>
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-circle-minus" />
                              </a>
                            </div>
                            <p className="m-0 pl-5">Clinic 2 </p>
                          </div>
                          <div className="col-12 border-bottom py-2 px-0">
                            <div className="float-right">
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-pen-to-square" />
                              </a>
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-circle-minus" />
                              </a>
                            </div>
                            <p className="m-0 pl-5">Workstation 1 </p>
                          </div>
                          <div className="col-12 border-bottom py-2 px-0">
                            <div className="float-right">
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-pen-to-square" />
                              </a>
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-circle-minus" />
                              </a>
                            </div>
                            <h5 className="font-weight-bold m-0">Change Management</h5>
                          </div>
                          <div className="col-12 border-bottom py-2 px-0">
                            <div className="float-right">
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-eye" />
                              </a>
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-pen-to-square" />
                              </a>
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-circle-minus" />
                              </a>
                            </div>
                            <p className="font-weight-bold m-0">New System Implementation</p>
                          </div>
                          <div className="col-12 border-bottom py-2 px-0">
                            <div className="float-right">
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-pen-to-square" />
                              </a>
                              <a href="#" className="mx-1 text-decoration-none">
                                <i className="fa-solid fa-circle-minus" />
                              </a>
                            </div>
                            <p className="m-0 pl-4">CyberKnife Implementation Checklist </p>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted text-right pt-2">Prepared by: John Doe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}