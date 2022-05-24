import React from "react"



export const AssignReport = () => {
  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title">
                <i className="fa fa-edit" />
                Assigned Reports
                <button type="button" className="btn btn-primary btn-sm btn-icon-text float-right">
                  <i className="fa-solid fa-circle-plus mr-1" />
                  Create Report
                </button>
              </p>
              <div className="my-3">
                <hr />
              </div>
              <div className="ibox-content forum-container mx-3 mt-4">
                <div className="row border rounded pb-3 pt-4 mb-5">
                  <div className="col-md-8 col-sm-8">
                    <div className="custom-toggle">
                      <small className="font-weight-bold">Sort by:</small>
                      <label className="switch switch-left-right">
                        <input className="switch-input" type="checkbox" defaultChecked />
                        <span className="switch-label" data-on="Asc" data-off="Desc" />
                        <span className="switch-handle" />
                      </label>
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button" className="btn btn-outline-primary btn-fw btn-xs active">
                        <i className="fa-solid fa-envelope-open-text mr-1" /> Title
                      </button>
                      <button type="button" className="btn btn-outline-primary btn-fw btn-xs">
                        <i className="far fa-calendar-plus mr-1" /> Created at
                      </button>
                      <button type="button" className="btn btn-outline-primary btn-fw btn-xs">
                        <i className="far fa-calendar-check mr-1"> </i> Updated at
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
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
                <div className="forum-item">
                  <div className="row">
                    <div className="col-12">
                      <div className="forum-icon">
                        <img src="images/assigned-templates/report1.png" className="forum-avatar" />
                      </div>
                      <a href="#" className="forum-item-title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </a>
                      <div className="forum-sub-title mt-1">
                        <span className="badge badge-dark mr-2">Archive</span>
                        <small className="text-secondary">
                          <span className="mr-3">
                            <i className="fa fa-user-edit" /> <b>Created by:</b> John Doe
                          </span>
                          <span className="mr-3">
                            <i className="far fa-calendar-plus" /> <b>Created:</b> February 06, 2022
                          </span>
                          <span>
                            <i className="far fa-calendar-check" /> <b>Updated:</b> February 07, 2022
                          </span>
                        </small>
                        <p className="m-0">Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit amet. Purus in mollis nunc sed id semper risus in.</p>
                      </div>
                    </div>
                    <div className="col-md-9 col-12">
                      <div className="forum-sub-title mt-2">
                        <small>Report Progress:</small>
                        <div className="progress" style={{ height: "20px" }}>
                          <div className="progress-bar bg-dark" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                            25%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-12">
                      <div className="float-right mt-0" style={{ marginLeft: "100px" }}>
                        <button type="button" className="btn btn-danger btn-rounded btn-icon mr-1" data-toggle="tooltip" data-placement="bottom" title="Generate">
                          <i className="fas fa-list-check" aria-hidden="true" />
                        </button>
                        <button type="button" className="btn btn-warning btn-rounded btn-icon" data-toggle="tooltip" data-placement="bottom" title="Chat">
                          <i className="fas fa-comment-dots" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="forum-item">
                  <div className="row">
                    <div className="col-12">
                      <div className="forum-icon">
                        <img src="images/assigned-templates/report2.png" className="forum-avatar" />
                      </div>
                      <a href="#" className="forum-item-title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </a>
                      <div className="forum-sub-title mt-1">
                        <span className="badge badge-info mr-2">Active</span>
                        <small className="text-secondary">
                          <span className="mr-3">
                            <i className="fa fa-user-edit" /> <b>Created by:</b> John Doe
                          </span>
                          <span className="mr-3">
                            <i className="far fa-calendar-plus" /> <b>Created:</b> February 06, 2022
                          </span>
                          <span>
                            <i className="far fa-calendar-check" /> <b>Updated:</b> February 07, 2022
                          </span>
                        </small>
                        <p className="m-0">Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit amet. Purus in mollis nunc sed id semper risus in.</p>
                      </div>
                    </div>
                    <div className="col-md-9 col-12">
                      <div className="forum-sub-title mt-2">
                        <small>Report Progress:</small>
                        <div className="progress" style={{ height: "20px" }}>
                          <div className="progress-bar bg-info" role="progressbar" style={{ width: "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                            100%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-12">
                      <div className="float-right mt-0" style={{ marginLeft: "100px" }}>
                        <button type="button" className="btn btn-danger btn-rounded btn-icon mr-1" data-toggle="tooltip" data-placement="bottom" title="Generate">
                          <i className="fas fa-list-check" aria-hidden="true" />
                        </button>
                        <button type="button" className="btn btn-warning btn-rounded btn-icon" data-toggle="tooltip" data-placement="bottom" title="Chat">
                          <i className="fas fa-comment-dots" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="forum-item">
                  <div className="row">
                    <div className="col-12">
                      <div className="forum-icon">
                        <img src="images/assigned-templates/report3.png" className="forum-avatar" />
                      </div>
                      <a href="#" className="forum-item-title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </a>
                      <div className="forum-sub-title mt-1">
                        <span className="badge badge-danger mr-2">Inactive</span>
                        <small className="text-secondary">
                          <span className="mr-3">
                            <i className="fa fa-user-edit" /> <b>Created by:</b> John Doe
                          </span>
                          <span className="mr-3">
                            <i className="far fa-calendar-plus" /> <b>Created:</b> February 06, 2022
                          </span>
                          <span>
                            <i className="far fa-calendar-check" /> <b>Updated:</b> February 07, 2022
                          </span>
                        </small>
                        <p className="m-0">Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit amet. Purus in mollis nunc sed id semper risus in.</p>
                      </div>
                    </div>
                    <div className="col-md-9 col-12">
                      <div className="forum-sub-title mt-2">
                        <small>Report Progress:</small>
                        <div className="progress" style={{ height: "20px" }}>
                          <div className="progress-bar bg-danger" role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                            50%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-12">
                      <div className="float-right mt-0" style={{ marginLeft: "100px" }}>
                        <button type="button" className="btn btn-danger btn-rounded btn-icon mr-1" data-toggle="tooltip" data-placement="bottom" title="Generate">
                          <i className="fas fa-list-check" aria-hidden="true" />
                        </button>
                        <button type="button" className="btn btn-warning btn-rounded btn-icon" data-toggle="tooltip" data-placement="bottom" title="Chat">
                          <i className="fas fa-comment-dots" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="forum-item">
                  <div className="row">
                    <div className="col-12">
                      <div className="forum-icon">
                        <img src="images/assigned-templates/report4.png" className="forum-avatar" />
                      </div>
                      <a href="#" className="forum-item-title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </a>
                      <div className="forum-sub-title mt-1">
                        <span className="badge badge-warning mr-2">Pending</span>
                        <small className="text-secondary">
                          <span className="mr-3">
                            <i className="fa fa-user-edit" /> <b>Created by:</b> John Doe
                          </span>
                          <span className="mr-3">
                            <i className="far fa-calendar-plus" /> <b>Created:</b> February 06, 2022
                          </span>
                          <span>
                            <i className="far fa-calendar-check" /> <b>Updated:</b> February 07, 2022
                          </span>
                        </small>
                        <p className="m-0">Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit amet. Purus in mollis nunc sed id semper risus in.</p>
                      </div>
                    </div>
                    <div className="col-md-9 col-12">
                      <div className="forum-sub-title mt-2">
                        <small>Report Progress:</small>
                        <div className="progress" style={{ height: "20px" }}>
                          <div className="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                            75%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-12">
                      <div className="float-right mt-0" style={{ marginLeft: "100px" }}>
                        <button type="button" className="btn btn-danger btn-rounded btn-icon mr-1" data-toggle="tooltip" data-placement="bottom" title="Generate">
                          <i className="fas fa-list-check" aria-hidden="true" />
                        </button>
                        <button type="button" className="btn btn-warning btn-rounded btn-icon" data-toggle="tooltip" data-placement="bottom" title="Chat">
                          <i className="fas fa-comment-dots" aria-hidden="true" />
                        </button>
                      </div>
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