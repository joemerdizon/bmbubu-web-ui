import React from "react"

export const GenerateTicketReport = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="row">
          <div className="col-md-9 col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-12">
                    <p className="card-title">
                      <i className="fa-solid fa-ticket mr-1" />
                      Issues
                    </p>
                    <div className="my-3">
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 col-12 mb-4">
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button" className="btn btn-outline-dark">
                        162 Open Tickets
                      </button>
                      <button type="button" className="btn btn-outline-dark">
                        95,721 Closed Tickets
                      </button>
                      <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        Sort Tickets By
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item">Newest</a>
                        <a className="dropdown-item">Oldest</a>
                        <a className="dropdown-item">Recently Updated</a>
                        <a className="dropdown-item">Least Recently Updated</a>
                        <a className="dropdown-item">Most Commented</a>
                        <a className="dropdown-item">Least Commented</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-12 mb-4">
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
                    <div className="list-group mb-5">
                      <a href="#" className="list-group-item list-group-item-action py-3" data-toggle="modal" data-target="#modal-ticket-details">
                        <b>
                          <i className="fa-solid fa-gear mr-1" />
                          Add drag and drop config import closes
                          <span className="badge badge-pill badge-danger ml-3">Danger</span>
                        </b>
                        <span className="float-right"># 13698</span>
                        <span className="d-block">
                          <small className="text-muted">
                            Opened by <b>jwilliams</b> 5 hours ago <i className="fa-solid fa-comments" /> 2 comments
                          </small>
                        </span>
                      </a>
                      <a href="#" className="list-group-item list-group-item-action py-3" data-toggle="modal" data-target="#modal-ticket-details">
                        <b>
                          <i className="fa-solid fa-file mr-1" />
                          Document that Helvetica Neue can cause problems on Windows
                          <span className="badge badge-pill badge-success ml-3">Success</span>
                        </b>
                        <span className="float-right"># 13697</span>
                        <span className="d-block">
                          <small className="text-muted">
                            Opened by <b>lgardner</b> 12 hours ago <i className="fa-solid fa-comments" /> 7 comments
                          </small>
                        </span>
                      </a>
                      <a href="#" className="list-group-item list-group-item-action py-3" data-toggle="modal" data-target="#modal-ticket-details">
                        <b>
                          <i className="fa-solid fa-code-branch mr-1" />
                          Manually triggering dropdown not working
                          <span className="badge badge-pill badge-primary ml-3">Primary</span>
                        </b>
                        <span className="float-right"># 13695</span>
                        <span className="d-block">
                          <small className="text-muted">
                            Opened by <b>ehernandez</b> 19 hours ago <i className="fa-solid fa-comments" /> 14 comments
                          </small>
                        </span>
                      </a>
                      <a href="#" className="list-group-item list-group-item-action py-3" data-toggle="modal" data-target="#modal-ticket-details">
                        <b>
                          <i className="fa-solid fa-code mr-1" />
                          Add classes for respective directions to affix
                          <span className="badge badge-pill badge-primary ml-3">Primary</span>
                        </b>
                        <span className="float-right"># 13691</span>
                        <span className="d-block">
                          <small className="text-muted">
                            Opened by <b>tmckenzie</b> 1 day ago <i className="fa-solid fa-comments" /> 20 comments
                          </small>
                        </span>
                      </a>
                      <a href="#" className="list-group-item list-group-item-action py-3" data-toggle="modal" data-target="#modal-ticket-details">
                        <b>
                          <i className="fa-solid fa-gear mr-1" />
                          Make autoprefixer browsers fixed
                          <span className="badge badge-pill badge-warning ml-3">Warning</span>
                        </b>
                        <span className="float-right"># 13679</span>
                        <span className="d-block">
                          <small className="text-muted">
                            Opened by <b>lgardner</b> 2 days ago <i className="fa-solid fa-comments" /> 29 comments
                          </small>
                        </span>
                      </a>
                      <a href="#" className="list-group-item list-group-item-action py-3" data-toggle="modal" data-target="#modal-ticket-details">
                        <b>
                          <i className="fa-solid fa-file mr-1" />
                          Glyphicon chevron left/right vertical alignment
                          <span className="badge badge-pill badge-info ml-3">Info</span>
                        </b>
                        <span className="float-right"># 13695</span>
                        <span className="d-block">
                          <small className="text-muted">
                            Opened by <b>lgardner</b> 2 days ago <i className="fa-solid fa-comments" /> 9 comments
                          </small>
                        </span>
                      </a>
                      <a href="#" className="list-group-item list-group-item-action py-3" data-toggle="modal" data-target="#modal-ticket-details">
                        <b>
                          <i className="fa-solid fa-code mr-1" />
                          Horizontal to vertical navbar/offcanvas
                          <span className="badge badge-pill badge-secondary ml-3">Secondary</span>
                        </b>
                        <span className="float-right"># 13691</span>
                        <span className="d-block">
                          <small className="text-muted">
                            Opened by <b>tmckenzie</b> 5 days ago <i className="fa-solid fa-comments" /> 10 comments
                          </small>
                        </span>
                      </a>
                      <a href="#" className="list-group-item list-group-item-action py-3" data-toggle="modal" data-target="#modal-ticket-details">
                        <b>
                          <i className="fa-solid fa-code-branch mr-1" />
                          Changing container padding
                          <span className="badge badge-pill badge-success ml-3">Success</span>
                        </b>
                        <span className="float-right"># 13680</span>
                        <span className="d-block">
                          <small className="text-muted">
                            Opened by <b>ehernandez</b> 1 week ago <i className="fa-solid fa-comments" /> 82 comments
                          </small>
                        </span>
                      </a>
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
          <div className="col-md-3 col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-12">
                    <p className="card-title">
                      <i className="fa-solid fa-list-ul mr-1" />
                      Legends
                    </p>
                    <div className="my-3">
                      <hr />
                    </div>
                  </div>
                  <div className="col-md-12 col-12 my-2">
                    <svg height={13} width={10} className="mr-2">
                      <circle cx={5} cy={5} r={5} fill="#4B49AC" />
                    </svg>
                    <span>Primary</span>
                    <small className="text-muted float-right">2</small>
                  </div>
                  <div className="col-md-12 col-12 my-2">
                    <svg height={13} width={10} className="mr-2">
                      <circle cx={5} cy={5} r={5} fill="#a3a4a5" />
                    </svg>
                    <span>Secondary</span>
                    <small className="text-muted float-right">9</small>
                  </div>
                  <div className="col-md-12 col-12 my-2">
                    <svg height={13} width={10} className="mr-2">
                      <circle cx={5} cy={5} r={5} fill="#57B657" />
                    </svg>
                    <span>Success</span>
                    <small className="text-muted float-right">110</small>
                  </div>
                  <div className="col-md-12 col-12 my-2">
                    <svg height={13} width={10} className="mr-2">
                      <circle cx={5} cy={5} r={5} fill="#FF4747" />
                    </svg>
                    <span>Danger</span>
                    <small className="text-muted float-right">30</small>
                  </div>
                  <div className="col-md-12 col-12 my-2">
                    <svg height={13} width={10} className="mr-2">
                      <circle cx={5} cy={5} r={5} fill="#FFC100" />
                    </svg>
                    <span>Warning</span>
                    <small className="text-muted float-right">20</small>
                  </div>
                  <div className="col-md-12 col-12 my-2">
                    <svg height={13} width={10} className="mr-2">
                      <circle cx={5} cy={5} r={5} fill="#248AFD" />
                    </svg>
                    <span>Info</span>
                    <small className="text-muted float-right">102</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="modal fade" id="modal-ticket-details" data-backdrop="static" data-keyboard="false" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header p-3 pr-4">
              <h5 className="modal-title">
                <i className="fa-solid fa-ticket" /> Ticket Details
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-1 py-2 overflow-auto" style={{ height: "450px", scrollbarWidth: "thin" }}>
              <div className="card">
                <div className="card-body">
                  <p className="card-title border-bottom pb-4">
                    <i className="fa-solid fa-gear" /> Add drag and drop config import closes
                    <small className="d-block text-justify mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint beatae, cupiditate adipisci maiores omnis unde non corporis autem iste repudiandae, recusandae placeat impedit et
                      quibusdam eaque fuga. Voluptates, veniam quo.
                    </small>
                  </p>
                  <ul className="icon-data-list w-100">
                    <li>
                      <div className="d-flex">
                        <img src="images/faces/face1.jpg" alt="user" />
                        <div>
                          <p className="text-primary mb-1">John Williams</p>
                          <p className="mb-0">Sales dashboard have been created</p>
                          <small>9:30 am</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <img src="images/faces/face2.jpg" alt="user" />
                        <div>
                          <p className="text-info mb-1">Sofia Andres</p>
                          <p className="mb-0">You have done a great job #TW111</p>
                          <small>10:30 am</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <img src="images/faces/face1.jpg" alt="user" />
                        <div>
                          <p className="text-primary mb-1">John Williams</p>
                          <p className="mb-0">Sales dashboard have been created</p>
                          <small>11:30 am</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <img src="images/faces/face2.jpg" alt="user" />
                        <div>
                          <p className="text-info mb-1">Sofia Andres</p>
                          <p className="mb-0">Sales dashboard have been created</p>
                          <small>8:50 am</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <img src="images/faces/face2.jpg" alt="user" />
                        <div>
                          <p className="text-info mb-1">Sofia Andres</p>
                          <p className="mb-0">Herbs are fun and easy to grow.</p>
                          <small>9:00 am</small>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal-footer py-2 pl-2 pr-0">
              <div className="col-md-12 col-12">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Write your message here..." aria-label="Write your message here..." />
                  <div className="input-group-append">
                    <button className="btn btn-sm btn-primary" type="button">
                      <i className="fa-solid fa-reply mr-1" />
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}