import React from 'react';

export const Fab = () => {
    return (
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
    )
}