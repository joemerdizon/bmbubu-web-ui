import React from "react"



export const ViewTemplateReport = () => {
    return (
        <div className="content-wrapper">
            <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title">
                <i className="fa fa-edit" />
                View Template Reports
                <button type="button" className="btn btn-primary btn-sm btn-icon-text float-right">
                  <i className="fa-solid fa-circle-plus mr-1" />
                  Create Report
                </button>
              </p>
              <div className="my-3">
                <hr />
              </div>
              <ul className="nav nav-tabs" id="setting-panel" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="all-reports-tab" data-toggle="tab" href="#all-reports-section" role="tab" aria-controls="all-reports-section" aria-expanded="true">
                    <i className="fa-solid fa-envelopes-bulk" /> All Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="saved-tab" data-toggle="tab" href="#saved-section" role="tab" aria-controls="saved-section">
                    <i className="fa-solid fa-floppy-disk" /> Saved
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="published-tab" data-toggle="tab" href="#published-section" role="tab" aria-controls="published-section">
                    <i className="fa-solid fa-file-arrow-up" /> Published
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="sent-for-approval-tab" data-toggle="tab" href="#sent-for-approval-section" role="tab" aria-controls="sent-for-approval-section">
                    <i className="fa-solid fa-file-import" /> Sent for Approval
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="setting-content">
                <div className="tab-pane fade show active scroll-wrapper" id="all-reports-section" role="tabpanel" aria-labelledby="all-reports-section">
                  <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="ibox-content forum-container">
                      <div className="row border rounded pb-3 pt-4 mb-5">
                        <div className="col-md-8 col-sm-8">
                          <div className="switchToggle mr-2">
                            <small className="font-weight-bold mr-2">Sort by:</small>
                            <input type="checkbox" id="switch" />
                            <label htmlFor="switch">Toggle</label>
                          </div>
                          <div className="btn-group mt-2" role="group" aria-label="Basic example">
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
                            <span className="mx-2 float-right">
                              <a href="#" className="text-primary text-decoration-none">
                                <i className="ti-pin2" />
                              </a>
                            </span>
                            <a href="#" className="forum-item-title">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </a>
                            <div className="forum-sub-title mt-1">
                              <span className="badge badge-dark mr-2">Saved</span>
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
                              <p className="m-0">
                                Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit
                                amet. Purus in mollis nunc sed id semper risus in.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-12 col-12 forum-info text-left">
                            <div className="mt-2" style={{ display: "inline-block" }}>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-edit" /> Edit
                              </button>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-user-tag" /> Assign
                              </button>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-vial" /> Simulate
                              </button>
                            </div>
                            <div className="float-right mt-0" style={{ marginLeft: "100px" }}>
                              <button type="button" className="btn btn-danger btn-rounded btn-icon mx-1" data-toggle="tooltip" data-placement="bottom" title="Play">
                                <i className="fas fa-play" aria-hidden="true" />
                              </button>
                              <button type="button" className="btn btn-warning btn-rounded btn-icon mx-1" data-toggle="tooltip" data-placement="bottom" title="Chat">
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
                            <span className="mx-2 float-right">
                              <a href="#" className="text-primary text-decoration-none">
                                <i className="ti-pin2" />
                              </a>
                            </span>
                            <a href="#" className="forum-item-title">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </a>
                            <div className="forum-sub-title mt-1">
                              <span className="badge badge-danger mr-2">Published</span>
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
                              <p className="m-0">
                                Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit
                                amet. Purus in mollis nunc sed id semper risus in.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-12 col-12 forum-info text-left">
                            <div className="mt-2" style={{ display: "inline-block" }}>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-edit" /> Edit
                              </button>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-user-tag" /> Assign
                              </button>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-vial" /> Simulate
                              </button>
                            </div>
                            <div className="float-right mt-0" style={{ marginLeft: "100px" }}>
                              <button type="button" className="btn btn-danger btn-rounded btn-icon mx-1" data-toggle="tooltip" data-placement="bottom" title="Play">
                                <i className="fas fa-play" aria-hidden="true" />
                              </button>
                              <button type="button" className="btn btn-warning btn-rounded btn-icon mx-1" data-toggle="tooltip" data-placement="bottom" title="Chat">
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
                            <span className="mx-2 float-right">
                              <a href="#" className="text-primary text-decoration-none">
                                <i className="ti-pin-alt text-secondary" />
                              </a>
                            </span>
                            <a href="#" className="forum-item-title">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </a>
                            <div className="forum-sub-title mt-1">
                              <span className="badge badge-dark mr-2">Saved</span>
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
                              <p className="m-0">
                                Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit
                                amet. Purus in mollis nunc sed id semper risus in.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-12 col-12 forum-info text-left">
                            <div className="mt-2" style={{ display: "inline-block" }}>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-edit" /> Edit
                              </button>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-user-tag" /> Assign
                              </button>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-vial" /> Simulate
                              </button>
                            </div>
                            <div className="float-right mt-0" style={{ marginLeft: "100px" }}>
                              <button type="button" className="btn btn-danger btn-rounded btn-icon mx-1" data-toggle="tooltip" data-placement="bottom" title="Play">
                                <i className="fas fa-play" aria-hidden="true" />
                              </button>
                              <button type="button" className="btn btn-warning btn-rounded btn-icon mx-1" data-toggle="tooltip" data-placement="bottom" title="Chat">
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
                            <span className="mx-2 float-right">
                              <a href="#" className="text-primary text-decoration-none">
                                <i className="ti-pin-alt text-secondary" />
                              </a>
                            </span>
                            <a href="#" className="forum-item-title">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </a>
                            <div className="forum-sub-title mt-1">
                              <span className="badge badge-warning mr-2">Sent for Approval</span>
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
                              <p className="m-0">
                                Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit
                                amet. Purus in mollis nunc sed id semper risus in.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-12 col-12 forum-info text-left">
                            <div className="mt-2" style={{ display: "inline-block" }}>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-edit" /> Edit
                              </button>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-user-tag" /> Assign
                              </button>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-vial" /> Simulate
                              </button>
                            </div>
                            <div className="float-right mt-0" style={{ marginLeft: "100px" }}>
                              <button type="button" className="btn btn-danger btn-rounded btn-icon mx-1" data-toggle="tooltip" data-placement="bottom" title="Play">
                                <i className="fas fa-play" aria-hidden="true" />
                              </button>
                              <button type="button" className="btn btn-warning btn-rounded btn-icon mx-1" data-toggle="tooltip" data-placement="bottom" title="Chat">
                                <i className="fas fa-comment-dots" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="tab-pane fade" id="saved-section" role="tabpanel" aria-labelledby="saved-section">
                  <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="ibox-content forum-container">
                      <div className="row border rounded pb-3 pt-4 mb-5">
                        <div className="col-md-8 col-sm-8">
                          <div className="switchToggle mr-2">
                            <small className="font-weight-bold mr-2">Sort by:</small>
                            <input type="checkbox" id="switch" />
                            <label htmlFor="switch">Toggle</label>
                          </div>
                          <div className="btn-group mt-2" role="group" aria-label="Basic example">
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
                              <p className="m-0">
                                Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit
                                amet. Purus in mollis nunc sed id semper risus in.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-12 col-12 forum-info text-left">
                            <div className="mt-2" style={{ display: "inline-block" }}>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-edit" /> Edit
                              </button>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-user-tag" /> Assign
                              </button>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-vial" /> Simulate
                              </button>
                            </div>
                            <div className="float-right mt-0" style={{ marginLeft: "100px" }}>
                              <button type="button" className="btn btn-danger btn-rounded btn-icon mx-1" data-toggle="tooltip" data-placement="bottom" title="Play">
                                <i className="fas fa-play" aria-hidden="true" />
                              </button>
                              <button type="button" className="btn btn-warning btn-rounded btn-icon mx-1" data-toggle="tooltip" data-placement="bottom" title="Chat">
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
                              <p className="m-0">
                                Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit
                                amet. Purus in mollis nunc sed id semper risus in.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-12 col-12 forum-info text-left">
                            <div className="mt-2" style={{ display: "inline-block" }}>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-edit" /> Edit
                              </button>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-user-tag" /> Assign
                              </button>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-vial" /> Simulate
                              </button>
                            </div>
                            <div className="float-right mt-0" style={{ marginLeft: "100px" }}>
                              <button type="button" className="btn btn-danger btn-rounded btn-icon mx-1" data-toggle="tooltip" data-placement="bottom" title="Play">
                                <i className="fas fa-play" aria-hidden="true" />
                              </button>
                              <button type="button" className="btn btn-warning btn-rounded btn-icon mx-1" data-toggle="tooltip" data-placement="bottom" title="Chat">
                                <i className="fas fa-comment-dots" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="tab-pane fade" id="published-section" role="tabpanel" aria-labelledby="published-section">
                  <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="ibox-content forum-container">
                      <div className="row border rounded pb-3 pt-4 mb-5">
                        <div className="col-md-8 col-sm-8">
                          <div className="switchToggle mr-2">
                            <small className="font-weight-bold mr-2">Sort by:</small>
                            <input type="checkbox" id="switch" />
                            <label htmlFor="switch">Toggle</label>
                          </div>
                          <div className="btn-group mt-2" role="group" aria-label="Basic example">
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
                              <img src="images/assigned-templates/report2.png" className="forum-avatar" />
                            </div>
                            <a href="#" className="forum-item-title">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </a>
                            <div className="forum-sub-title mt-1">
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
                              <p className="m-0">
                                Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit
                                amet. Purus in mollis nunc sed id semper risus in.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-12 col-12 forum-info text-left">
                            <div className="mt-2" style={{ display: "inline-block" }}>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-edit" /> Edit
                              </button>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-user-tag" /> Assign
                              </button>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-vial" /> Simulate
                              </button>
                            </div>
                            <div className="float-right mt-0" style={{ marginLeft: "100px" }}>
                              <button type="button" className="btn btn-danger btn-rounded btn-icon mx-1" data-toggle="tooltip" data-placement="bottom" title="Play">
                                <i className="fas fa-play" aria-hidden="true" />
                              </button>
                              <button type="button" className="btn btn-warning btn-rounded btn-icon mx-1" data-toggle="tooltip" data-placement="bottom" title="Chat">
                                <i className="fas fa-comment-dots" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="tab-pane fade" id="sent-for-approval-section" role="tabpanel" aria-labelledby="sent-for-approval-section">
                  <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="ibox-content forum-container">
                      <div className="row border rounded pb-3 pt-4 mb-5">
                        <div className="col-md-8 col-sm-8">
                          <div className="switchToggle mr-2">
                            <small className="font-weight-bold mr-2">Sort by:</small>
                            <input type="checkbox" id="switch" />
                            <label htmlFor="switch">Toggle</label>
                          </div>
                          <div className="btn-group mt-2" role="group" aria-label="Basic example">
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
                              <img src="images/assigned-templates/report4.png" className="forum-avatar" />
                            </div>
                            <a href="#" className="forum-item-title">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </a>
                            <div className="forum-sub-title mt-1">
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
                              <p className="m-0">
                                Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit
                                amet. Purus in mollis nunc sed id semper risus in.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-12 col-12 forum-info text-left">
                            <div className="mt-2" style={{ display: "inline-block" }}>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-edit" /> Edit
                              </button>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-user-tag" /> Assign
                              </button>
                              <button type="button" className="btn btn-outline-primary btn-icon-text btn-sm mx-1">
                                <i className="fa fa-vial" /> Simulate
                              </button>
                            </div>
                            <div className="float-right mt-0" style={{ marginLeft: "100px" }}>
                              <button type="button" className="btn btn-danger btn-rounded btn-icon mx-1" data-toggle="tooltip" data-placement="bottom" title="Play">
                                <i className="fas fa-play" aria-hidden="true" />
                              </button>
                              <button type="button" className="btn btn-warning btn-rounded btn-icon mx-1" data-toggle="tooltip" data-placement="bottom" title="Chat">
                                <i className="fas fa-comment-dots" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
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