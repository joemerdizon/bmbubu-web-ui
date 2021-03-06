import React from 'react';

export const Appbar = () => {
    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a className="navbar-brand brand-logo mr-5" href="index.html"><img src="images/logo.png" className="mr-2" alt="logo"/></a>
                <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.png" alt="logo"/></a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                <span className="icon-menu"></span>
                </button>
                <ul className="navbar-nav navbar-nav-right">        
                <li className="nav-item dropdown">
                    <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                    <i className="icon-mail mx-0"></i>
                    <span className="count"></span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                    <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <img src="images/faces/face1.jpg" alt="" />                  
                        </div>
                        <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">
                            John Smith 
                            <small className="text-muted font-italic float-right">3 mins ago</small>
                        </h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit...
                        </p>
                        </div>
                    </a>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <img src="images/faces/face2.jpg" alt="" />                  
                        </div>
                        <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">
                            Fleece Marigold 
                            <small className="text-muted font-italic float-right">5 mins ago</small>
                        </h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit...
                        </p>
                        </div>
                    </a>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <img src="images/faces/face3.jpg" alt="" />                  
                        </div>
                        <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">
                            Gordon Norman 
                            <small className="text-muted font-italic float-right">15 mins ago</small>
                        </h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit...
                        </p>
                        </div>
                    </a>
                    <a className="dropdown-item preview-item">
                        <span className="text-center font-weight-bold w-100">See all Messages</span>
                    </a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                    <i className="icon-bell mx-0"></i>
                    <span className="count"></span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                    <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <div className="preview-icon bg-success">
                            <i className="ti-info-alt mx-0"></i>
                        </div>
                        </div>
                        <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">Application Error</h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                            Just now
                        </p>
                        </div>
                    </a>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <div className="preview-icon bg-warning">
                            <i className="ti-settings mx-0"></i>
                        </div>
                        </div>
                        <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">Settings</h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                            Private message
                        </p>
                        </div>
                    </a>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <div className="preview-icon bg-info">
                            <i className="ti-user mx-0"></i>
                        </div>
                        </div>
                        <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">New user registration</h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                            2 days ago
                        </p>
                        </div>
                    </a>
                    </div>
                </li>         
                <li className="nav-item nav-settings d-none d-lg-flex mx-2">
                    <a className="nav-link" href="#">
                    <i className="ti-settings"></i>
                    </a>
                </li>                     
                <li className="nav-item nav-profile dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                    <img src="images/faces/face0.jpg" alt="profile"/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                    <a className="dropdown-item">
                        <i className="ti-user text-primary"></i>
                        Profile
                    </a>
                    <a className="dropdown-item">
                        <i className="ti-power-off text-primary"></i>
                        Logout
                    </a>
                    </div>
                </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                <span className="icon-menu"></span>
                </button>
            </div>
        </nav>
    )
}