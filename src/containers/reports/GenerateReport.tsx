import React from "react"
// import $ from 'jquery';
// import 'DataTables.net';



export const GenerateReport = () => {
  // $('#data-table-generate-report').DataTable();
  // $('#data-table-generate-report-action-related-objectives').DataTable();
  // $('#data-table-generate-report-action-items').DataTable();

  function launchReportActionModal() {
    // $('#modal-fullscreen-xl-generate-report-action').modal('show');
    console.log('Alamu para eyamu mag error, hahaha');
  }
  

return (
    <>
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
                                  Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna
                                  sit amet. Purus in mollis nunc sed id semper risus in.
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
                                  Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna
                                  sit amet. Purus in mollis nunc sed id semper risus in.
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
                                  Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna
                                  sit amet. Purus in mollis nunc sed id semper risus in.
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
                                  Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna
                                  sit amet. Purus in mollis nunc sed id semper risus in.
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
                                  Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna
                                  sit amet. Purus in mollis nunc sed id semper risus in.
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
                                  Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna
                                  sit amet. Purus in mollis nunc sed id semper risus in.
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
                                  Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna
                                  sit amet. Purus in mollis nunc sed id semper risus in.
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
                                  Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna
                                  sit amet. Purus in mollis nunc sed id semper risus in.
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
                              <svg height={13} width={10}>
                                <circle cx={5} cy={5} r={5} fill="#ba3742" />
                              </svg>
                              Pending
                            </td>
                            <td>
                              <a href="javascript:void(0);" data-toggle="tooltip" data-placement="bottom" title="Open Description and/or Other Documents" onClick={launchReportActionModal}>
                                <i className="fa-solid fa-arrow-up-right-from-square" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="pl-5">Test action item 1</td>
                            <td>Yes</td>
                            <td>&nbsp;</td>
                            <td>February 10, 2022</td>
                            <td className="my-auto">
                              <svg height={13} width={10}>
                                <circle cx={5} cy={5} r={5} fill="#ba3742" />
                              </svg>
                              Pending
                            </td>
                            <td>
                              <a href="javascript:void(0);" data-toggle="tooltip" data-placement="bottom" title="Open Description and/or Other Documents" onClick={launchReportActionModal}>
                                <i className="fa-solid fa-arrow-up-right-from-square" />
                              </a>
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
                              <svg height={13} width={10}>
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
                              <svg height={13} width={10}>
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
                              <svg height={13} width={10}>
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
                              <svg height={13} width={10}>
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
                              <svg height={13} width={10}>
                                <circle cx={5} cy={5} r={5} fill="#ba3742" />
                              </svg>
                              Pending
                            </td>
                            <td>
                              <a href="javascript:void(0);" data-toggle="tooltip" data-placement="bottom" title="Open Description and/or Other Documents" onClick={launchReportActionModal}>
                                <i className="fa-solid fa-arrow-up-right-from-square" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="pl-5">Test action item 2</td>
                            <td>Yes</td>
                            <td>&nbsp;</td>
                            <td>February 10, 2022</td>
                            <td className="my-auto">
                              <svg height={13} width={10}>
                                <circle cx={5} cy={5} r={5} fill="#ba3742" />
                              </svg>
                              Pending
                            </td>
                            <td>
                              <a href="javascript:void(0);" data-toggle="tooltip" data-placement="bottom" title="Open Description and/or Other Documents" onClick={launchReportActionModal}>
                                <i className="fa-solid fa-arrow-up-right-from-square" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="pl-5">Test action item 3</td>
                            <td>Yes</td>
                            <td>&nbsp;</td>
                            <td>February 10, 2022</td>
                            <td className="my-auto">
                              <svg height={13} width={10}>
                                <circle cx={5} cy={5} r={5} fill="#ba3742" />
                              </svg>
                              Pending
                            </td>
                            <td>
                              <a href="javascript:void(0);" data-toggle="tooltip" data-placement="bottom" title="Open Description and/or Other Documents" onClick={launchReportActionModal}>
                                <i className="fa-solid fa-arrow-up-right-from-square" />
                              </a>
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
                              <svg height={13} width={10}>
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
                              <svg height={13} width={10}>
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
                              <svg height={13} width={10}>
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
                              <svg height={13} width={10}>
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
                              <svg height={13} width={10}>
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
                              <svg height={13} width={10}>
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
                <button type="button" className="btn btn-primary btn-sm">
                  Save and Download
                </button>
                <button type="button" className="btn btn-primary btn-sm">
                  Save
                </button>
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
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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