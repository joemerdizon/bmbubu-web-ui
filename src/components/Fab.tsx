import React from 'react';

export const Fab = () => {
    return (
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
    )
}