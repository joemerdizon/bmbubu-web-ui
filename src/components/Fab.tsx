import React from 'react';

export const Fab = () => {
    return (
      <>
        {/* <div className="theme-setting-wrapper">
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
        </div> */}
      
        <div id="right-sidebar" className="settings-panel">
          <i className="settings-close ti-close" />
          <p className="settings-heading">SIDEBAR COLOR</p>
          <div className="sidebar-bg-options selected" id="sidebar-light-theme">
            <div className="img-ss rounded-circle bg-light border mr-3" />
            Light
          </div>
          <div className="sidebar-bg-options" id="sidebar-dark-theme">
            <div className="img-ss rounded-circle bg-dark border mr-3" />
            Dark
          </div>
          <p className="settings-heading mt-2">HEADER COLOR</p>
          <div className="color-tiles mx-0 px-4">
            <div className="tiles default" />
            <div className="tiles dark" />
            <div className="tiles" />
            <div className="tiles" />
            <div className="tiles success" />
            <div className="tiles danger" />
            <div className="tiles warning" />
            <div className="tiles info" />
          </div>
        </div>
      </>
      

      
    )
}