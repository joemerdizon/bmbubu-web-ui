import React from "react"

export const Files = () => {
  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-3 col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-12">
                  <p className="card-title">
                    <i className="fa-solid fa-folder-tree mr-1" />
                    File Locations
                  </p>
                  <div className="my-3">
                    <hr />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action active">
                      <i className="fa-solid fa-house mr-2" />
                      Home
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <i className="fa-solid fa-file-lines mr-2" />
                      Report Attachments
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <i className="fa-solid fa-ticket mr-2" />
                      Ticket Attachments
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <i className="fa-solid fa-file-circle-exclamation mr-2" />
                      Other Files
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-12">
                  <p className="card-title">
                    <i className="fa-solid fa-laptop-file mr-1" />
                    Files
                  </p>
                  <div className="my-3">
                    <hr />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 col-12 mb-2">
                  {/* <div class="btn-group" role="group" aria-label="Basic example"> */}
                  <button type="button" className="btn btn-primary mr-1">
                    <i className="fa-solid fa-arrows-rotate" />
                  </button>
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary">
                      <i className="fa-solid fa-file" /> All Files
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle dropdown-toggle-split mr-1"
                      id="dropdownMenuSplitButton1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuSplitButton1">
                      <a className="dropdown-item" role="button">
                        <i className="fa-solid fa-file-pdf mr-2" /> Documents
                      </a>
                      <a className="dropdown-item" role="button">
                        <i className="fa-solid fa-file-image mr-2" />
                        Images
                      </a>
                      <a className="dropdown-item" role="button">
                        <i className="fa-solid fa-file-video mr-2" />
                        Media Files
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                      id="dropdownMenuSplitButton2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="mr-2">Sort</span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuSplitButton2">
                      <a className="dropdown-item" role="button">
                        Newest
                      </a>
                      <a className="dropdown-item" role="button">
                        Oldest
                      </a>
                    </div>
                  </div>
                  {/* </div>           */}
                </div>
                <div className="col-md-4 col-12 mb-2">
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
                <div className="col-12">
                  <div className="my-3">
                    <hr />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <ul className="nav nav-tabs float-right" id="setting-panel" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="grid-view-tab" data-toggle="tab" href="#grid-view-section" role="tab" aria-controls="grid-view-section" aria-expanded="true">
                        <i className="fa-solid fa-table-cells" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="list-tab" data-toggle="tab" href="#list-section" role="tab" aria-controls="list-section">
                        <i className="fa-solid fa-list-ul" />
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content mt-5" id="setting-content">
                    <div className="tab-pane fade show active scroll-wrapper" id="grid-view-section" role="tabpanel" aria-labelledby="grid-view-section">
                      <div className="wrapper wrapper-content animated fadeInRight">
                        <div className="row row-cols-2 row-cols-md-4">
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-pdf fa-3x text-danger" />
                                <p className="font-weight-bold mt-2">file-name-1.pdf</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-primary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Unpin File">
                                    <i className="ti-pin2" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-pdf fa-3x text-danger" />
                                <p className="font-weight-bold mt-2">file-name-2.pdf</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-primary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Unpin File">
                                    <i className="ti-pin2" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-word fa-3x text-info" />
                                <p className="font-weight-bold mt-2">file-name-3.docx</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-primary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Unpin File">
                                    <i className="ti-pin2" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-powerpoint fa-3x text-danger" />
                                <p className="font-weight-bold mt-2">file-name-4.pptx</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-primary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Unpin File">
                                    <i className="ti-pin2" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-word fa-3x text-info" />
                                <p className="font-weight-bold mt-2">file-name-5.docx</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-primary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Unpin File">
                                    <i className="ti-pin2" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-word fa-3x text-info" />
                                <p className="font-weight-bold mt-2">file-name-6.docx</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-primary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Unpin File">
                                    <i className="ti-pin2" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-excel fa-3x text-success" />
                                <p className="font-weight-bold mt-2">file-name-7.xlsx</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-primary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Unpin File">
                                    <i className="ti-pin2" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-pdf fa-3x text-danger" />
                                <p className="font-weight-bold mt-2">file-name-8.pdf</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-primary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Unpin File">
                                    <i className="ti-pin2" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-pdf fa-3x text-danger" />
                                <p className="font-weight-bold mt-2">file-name-9.pdf</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-excel fa-3x text-success" />
                                <p className="font-weight-bold mt-2">file-name-10.xlsx</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-image fa-3x text-primary" />
                                <p className="font-weight-bold mt-2">file-name-11.png</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-word fa-3x text-info" />
                                <p className="font-weight-bold mt-2">file-name-12.docx</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-image fa-3x text-primary" />
                                <p className="font-weight-bold mt-2">file-name-13.jpg</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-pdf fa-3x text-danger" />
                                <p className="font-weight-bold mt-2">file-name-14.pdf</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-word fa-3x text-info" />
                                <p className="font-weight-bold mt-2">file-name-15.docx</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-powerpoint fa-3x text-danger" />
                                <p className="font-weight-bold mt-2">file-name-16.pptx</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-word fa-3x text-info" />
                                <p className="font-weight-bold mt-2">file-name-17.docx</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-video fa-3x text-warning" />
                                <p className="font-weight-bold mt-2">file-name-18.mp4</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-image fa-3x text-primary" />
                                <p className="font-weight-bold mt-2">file-name-19.jpg</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-video fa-3x text-warning" />
                                <p className="font-weight-bold mt-2">file-name-20.mkv</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-pdf fa-3x text-danger" />
                                <p className="font-weight-bold mt-2">file-name-21.pdf</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-excel fa-3x text-success" />
                                <p className="font-weight-bold mt-2">file-name-22.xlsx</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-excel fa-3x text-success" />
                                <p className="font-weight-bold mt-2">file-name-23.xlsx</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-4 text-center">
                            <div className="card border">
                              <div className="card-body">
                                <i className="fa-solid fa-file-word fa-3x text-info" />
                                <p className="font-weight-bold mt-2">file-name-24.docx</p>
                                <div className="border-top pt-3">
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="list-section" role="tabpanel" aria-labelledby="list-section">
                      <div className="wrapper wrapper-content animated fadeInRight">
                        <div className="table-responsive table-hover">
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">File Name</th>
                                <th scope="col">Task Name</th>
                                <th scope="col">Status</th>
                                <th scope="col">Due Date</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-pdf text-danger mr-2" /> file-name-1.pdf
                                </td>
                                <td>Demo Task Name 1</td>
                                <td>Pending</td>
                                <td>June 01, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-primary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Unpin File">
                                    <i className="ti-pin2" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-pdf text-danger mr-2" /> file-name-2.pdf
                                </td>
                                <td>Demo Task Name 2</td>
                                <td>Pending</td>
                                <td>June 02, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-primary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Unpin File">
                                    <i className="ti-pin2" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-word text-info mr-2" /> file-name-3.docx
                                </td>
                                <td>Demo Task Name 3</td>
                                <td>Pending</td>
                                <td>June 03, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-primary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Unpin File">
                                    <i className="ti-pin2" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-pdf text-danger mr-2" /> file-name-4.pptx
                                </td>
                                <td>Demo Task Name 4</td>
                                <td>Pending</td>
                                <td>June 04, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-primary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Unpin File">
                                    <i className="ti-pin2" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-word text-info mr-2" /> file-name-5.docx
                                </td>
                                <td>Demo Task Name 5</td>
                                <td>Pending</td>
                                <td>June 05, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-primary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Unpin File">
                                    <i className="ti-pin2" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-word text-info mr-2" /> file-name-6.docx
                                </td>
                                <td>Demo Task Name 6</td>
                                <td>Pending</td>
                                <td>June 06, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-primary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Unpin File">
                                    <i className="ti-pin2" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-excel text-success mr-2" /> file-name-7.xlsx
                                </td>
                                <td>Demo Task Name 7</td>
                                <td>Pending</td>
                                <td>June 07, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-primary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Unpin File">
                                    <i className="ti-pin2" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-pdf text-danger mr-2" /> file-name-8.pdf
                                </td>
                                <td>Demo Task Name 8</td>
                                <td>Pending</td>
                                <td>June 08, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-primary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Unpin File">
                                    <i className="ti-pin2" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-pdf text-danger mr-2" /> file-name-9.pdf
                                </td>
                                <td>Demo Task Name 9</td>
                                <td>Completed</td>
                                <td>June 09, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-excel text-success mr-2" /> file-name-10.xlsx
                                </td>
                                <td>Demo Task Name 10</td>
                                <td>Completed</td>
                                <td>June 10, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-image text-primarys mr-2" /> file-name-11.png
                                </td>
                                <td>Demo Task Name 11</td>
                                <td>Completed</td>
                                <td>June 11, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-word text-info mr-2" /> file-name-12.docx
                                </td>
                                <td>Demo Task Name 12</td>
                                <td>Completed</td>
                                <td>June 12, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-image text-primary mr-2" /> file-name-13.jpg
                                </td>
                                <td>Demo Task Name 13</td>
                                <td>Completed</td>
                                <td>June 13, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-pdf text-danger mr-2" /> file-name-14.pdf
                                </td>
                                <td>Demo Task Name 14</td>
                                <td>Completed</td>
                                <td>June 14, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-word text-info mr-2" /> file-name-15.docx
                                </td>
                                <td>Demo Task Name 15</td>
                                <td>Completed</td>
                                <td>June 15, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-powerpoint text-danger mr-2" /> file-name-16.pptx
                                </td>
                                <td>Demo Task Name 16</td>
                                <td>Completed</td>
                                <td>June 16, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-word text-info mr-2" /> file-name-17.docx
                                </td>
                                <td>Demo Task Name 17</td>
                                <td>Completed</td>
                                <td>June 17, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-video text-warning mr-2" /> file-name-18.mp4
                                </td>
                                <td>Demo Task Name 18</td>
                                <td>Completed</td>
                                <td>June 18, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-image text-primary mr-2" /> file-name-19.jpg
                                </td>
                                <td>Demo Task Name 19</td>
                                <td>Completed</td>
                                <td>June 19, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-video text-warning mr-2" /> file-name-20.mkv
                                </td>
                                <td>Demo Task Name 20</td>
                                <td>Completed</td>
                                <td>June 20, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-pdf text-danger mr-2" /> file-name-21.pdf
                                </td>
                                <td>Demo Task Name 21</td>
                                <td>Completed</td>
                                <td>June 21, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-excel text-success mr-2" /> file-name-22.xlsx
                                </td>
                                <td>Demo Task Name 22</td>
                                <td>Completed</td>
                                <td>June 22, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-excel text-success mr-2" /> file-name-23.xlsx
                                </td>
                                <td>Demo Task Name 23</td>
                                <td>Completed</td>
                                <td>June 23, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="fa-solid fa-file-word text-info mr-2" /> file-name-24.docx
                                </td>
                                <td>Demo Task Name 24</td>
                                <td>Completed</td>
                                <td>June 24, 2022</td>
                                <td>
                                  <a href="#" className="mx-2 text-dark text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Open File">
                                    <i className="ti-arrow-circle-right" />
                                  </a>
                                  <a href="#" className="mx-2 text-danger text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Archive File">
                                    <i className="ti-archive" />
                                  </a>
                                  <a href="#" className="mx-2 text-secondary text-decoration-none" data-toggle="tooltip" data-placement="bottom" title="Pin File">
                                    <i className="ti-pin-alt" />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
    </div>
  )
}