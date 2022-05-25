import React from "react"

export const SubmitATicket = () => {
  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title">
                <i className="fa-solid fa-ticket menu-icon mr-1" />
                Tickets <small>(Create)</small>
                <button type="button" className="btn btn-primary btn-sm btn-icon-text float-right">
                  <i className="fa-solid fa-square-arrow-up-right mr-2" />
                  Submit for Approval
                </button>
              </p>
              <div className="my-3">
                <hr />
              </div>
              <form>
                <div className="form-group mb-0 row">
                  <label htmlFor="name" className="col-sm-3 col-form-label text-right required">
                    Name
                  </label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control" id="name" />
                  </div>
                </div>
                <div className="form-group mb-0 row">
                  <label htmlFor="description" className="col-sm-3 col-form-label text-right required">
                    Description
                  </label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control" id="description" />
                  </div>
                </div>
                <div className="form-group mb-0 row">
                  <label htmlFor="category" className="col-sm-3 col-form-label text-right required">
                    Category
                  </label>
                  <div className="col-sm-6">
                    <input className="form-control" list="categories" name="category" id="category" />
                    <datalist id="categories">
                      <option value="Category 1"></option>
                      <option value="Category 2"></option>
                      <option value="Category 3"></option>
                      <option value="Category 4"></option>
                      <option value="Category 5"></option>
                    </datalist>
                  </div>
                </div>
                <div className="form-group mb-0 row">
                  <label htmlFor="sub_category" className="col-sm-3 col-form-label text-right required">
                    Sub Category
                  </label>
                  <div className="col-sm-6">
                    <input className="form-control" list="sub_categories" name="sub_category" id="sub_category" />
                    <datalist id="sub_categories">
                      <option value="Sub Category 1"></option>
                      <option value="Sub Category 2"></option>
                      <option value="Sub Category 3"></option>
                      <option value="Sub Category 4"></option>
                      <option value="Sub Category 5"></option>
                    </datalist>
                  </div>
                </div>
                <div className="form-group mb-0 row">
                  <label htmlFor="tags" className="col-sm-3 col-form-label text-right required">
                    Completion Approval
                  </label>
                  <div className="col-sm-6">
                    <div className="switchToggle">
                      <div className="switchToggle">
                        <div className="custom-toggle">
                          <label className="switch switch-left-right">
                            <input className="switch-input" type="checkbox" />
                            <span className="switch-label" data-on="Yes" data-off="No" />
                            <span className="switch-handle" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group mb-0 row">
                  <label htmlFor="approval_condition" className="col-sm-3 col-form-label text-right required">
                    Approval Condition
                  </label>
                  <div className="col-sm-6">
                    <select id="approval_condition" className="form-control" required>
                      <option disabled selected />
                      <option value="Approval Condition 1">Approval Condition 1</option>
                      <option value="Approval Condition 2">Approval Condition 2</option>
                      <option value="Approval Condition 3">Approval Condition 3</option>
                    </select>
                  </div>
                </div>
                <div className="form-group mb-0 row">
                  <label htmlFor="template_approver" className="col-sm-3 col-form-label text-right required">
                    Template Approver
                  </label>
                  <div className="col-sm-6">
                    <select id="template_approver" className="form-control" required>
                      <option disabled selected />
                      <option value="Template Approver 1">Template Approver 1</option>
                      <option value="Template Approver 2">Template Approver 2</option>
                      <option value="Template Approver 3">Template Approver 3</option>
                    </select>
                  </div>
                </div>
                <div className="form-group mb-0 row">
                  <label htmlFor="archived" className="col-sm-3 col-form-label text-right required">
                    Archived
                  </label>
                  <div className="col-sm-6">
                    <div className="switchToggle">
                      <div className="custom-toggle">
                        <label className="switch switch-left-right">
                          <input className="switch-input" type="checkbox" />
                          <span className="switch-label" data-on="Yes" data-off="No" />
                          <span className="switch-handle" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="my-3">
                <hr />
              </div>
              <div className="text-right">
                <button type="button" className="btn btn-primary btn-sm btn-icon-text mr-1">
                  <i className="fa-solid fa-circle-plus mr-2" />
                  Action Item
                </button>
                <button type="button" className="btn btn-primary btn-sm btn-icon-text">
                  <i className="fa-solid fa-circle-plus mr-2" />
                  Checklist
                </button>
              </div>
              <div className="my-3">
                <hr />
              </div>
              <p className="card-title m-0 mb-2 mt-5">Reference Materials</p>
              <ul className="nav nav-tabs" id="setting-panel" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="reference-materials-tab"
                    data-toggle="tab"
                    href="#reference-materials-section"
                    role="tab"
                    aria-controls="reference-materials-section"
                    aria-expanded="true"
                  >
                    Reference Materials <span className="badge badge-light ml-3">0</span>
                  </a>
                </li>
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
                <div className="tab-pane fade show active scroll-wrapper" id="reference-materials-section" role="tabpanel" aria-labelledby="reference-materials-section">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}