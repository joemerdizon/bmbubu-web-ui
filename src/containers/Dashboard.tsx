import React from "react"

export const Dashboard = () => {
  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="row">
            <div className="col-12 col-xl-12 mb-4 mb-xl-0">
              <h3 className="font-weight-bold">Welcome Renmark</h3>
              <h6 className="font-weight-normal mb-0">
                All systems are running smoothly! You have <span className="text-primary">3 unread alerts!</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-lg-12 grid-margin grid-margin-lg-0">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-12 mb-5">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Tasks</h4>
                  <div className="my-3">
                    <hr />
                  </div>
                  <div id="sales-legend" className="chartjs-legend mt-4 mb-2" />
                  <canvas id="dashboardChart" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-4 mb-4">
              <h4 className="card-title">Quick Links</h4>
              <div className="my-3">
                <hr />
              </div>
              <div className="row mb-4">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6 stretch-card mb-4">
                  <div className="card bg-white shadow">
                    <div className="card-body p-3">
                      <div className="row no-gutters align-items-center">
                        <div className="col-12">
                          <div style={{ height: "60px" }}>
                            <h3 className="m-0">
                              100 <i className="fa-solid fa-tasks float-right" />
                            </h3>
                            <small className="text-uppercase smallest">Task</small>
                          </div>
                          <a href="javascript:void();" className="small text-decoration-none">
                            more details
                            <i className="fa-solid fa-circle-chevron-right btn-icon-append ml-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6 stretch-card mb-4">
                  <div className="card bg-white shadow">
                    <div className="card-body p-3">
                      <div className="row no-gutters align-items-center">
                        <div className="col-12">
                          <div style={{ height: "60px" }}>
                            <h3 className="m-0">
                              120
                              <i className="fa-solid fa-edit float-right" />
                            </h3>
                            <small className="text-uppercase smallest">Report Templates</small>
                          </div>
                          <a href="javascript:void();" className="small text-decoration-none">
                            more details
                            <i className="fa-solid fa-circle-chevron-right btn-icon-append ml-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6 stretch-card mb-4">
                  <div className="card bg-white shadow">
                    <div className="card-body p-3">
                      <div className="row no-gutters align-items-center">
                        <div className="col-12">
                          <div style={{ height: "60px" }}>
                            <h3 className="m-0">
                              20 <i className="fa-solid fa-ticket float-right" />
                            </h3>
                            <small className="text-uppercase smallest">Tickets</small>
                          </div>
                          <a href="javascript:void();" className="small text-decoration-none">
                            more details
                            <i className="fa-solid fa-circle-chevron-right btn-icon-append ml-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6 stretch-card mb-4">
                  <div className="card bg-white shadow">
                    <div className="card-body p-3">
                      <div className="row no-gutters align-items-center">
                        <div className="col-12">
                          <div style={{ height: "60px" }}>
                            <h3 className="m-0">
                              64 <i className="fa-solid fa-thumbs-up float-right" />
                            </h3>
                            <small className="text-uppercase smallest">Approval</small>
                          </div>
                          <a href="javascript:void();" className="small text-decoration-none">
                            more details
                            <i className="fa-solid fa-circle-chevron-right btn-icon-append ml-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6 stretch-card mb-4">
                  <div className="card bg-white shadow">
                    <div className="card-body p-3">
                      <div className="row no-gutters align-items-center">
                        <div className="col-12">
                          <div style={{ height: "60px" }}>
                            <h3 className="m-0">
                              5 <i className="fa-solid fa-comments float-right" />
                            </h3>
                            <small className="text-uppercase smallest">Comments</small>
                          </div>
                          <a href="javascript:void();" className="small text-decoration-none">
                            more details
                            <i className="fa-solid fa-circle-chevron-right btn-icon-append ml-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6 stretch-card mb-4">
                  <div className="card bg-white shadow">
                    <div className="card-body p-3">
                      <div className="row no-gutters align-items-center">
                        <div className="col-12">
                          <div style={{ height: "60px" }}>
                            <h3 className="m-0">
                              123 <i className="fa-solid fa-shopping-bag float-right" />
                            </h3>
                            <small className="text-uppercase smallest">Market Place</small>
                          </div>
                          <a href="javascript:void();" className="small text-decoration-none">
                            more details
                            <i className="fa-solid fa-circle-chevron-right btn-icon-append ml-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 grid-margin grid-margin-lg-0 stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Schedule</h4>
              <div className="my-3">
                <hr />
              </div>
              <div id="calendar" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title">Other Dashboard Details</p>
              <p className="font-weight-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores id alias accusamus esse unde, quasi quia nemo impedit fuga deserunt magnam qui sapiente ullam
                adipisci explicabo ut totam? Assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores id alias accusamus esse unde, quasi quia nemo impedit fuga
                deserunt magnam qui sapiente ullam adipisci explicabo ut totam? Assumenda.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="theme-setting-wrapper">
          <div id="settings-trigger" className="settings-trigger-top">
            <i className="fa-solid fa-plus"></i>          
          </div>
          <div id="theme-settings" className="settings-panel">
            <i className="settings-close ti-close"></i>
            <p className="settings-heading">CUSTOMIZE DASHBOARD</p>
            <div className="col-12 mt-4">  
              <small>Show / Hide Widgets</small>          
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" checked />
                  Calendar
                <i className="input-helper"></i></label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" checked />
                  Chart
                <i className="input-helper"></i></label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" checked />
                  Quick Links
                <i className="input-helper"></i></label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" />
                  Report
                <i className="input-helper"></i></label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" />
                  Others
                <i className="input-helper"></i></label>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}