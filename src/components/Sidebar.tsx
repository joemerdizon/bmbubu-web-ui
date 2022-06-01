import React, { FC, useEffect, useState } from 'react';
import { Navigation, SubNavigation } from '../interfaces/SidebarItem';
import { NavigationMockData } from '../mockData/NavigationMockData';
import { Fab } from './Fab';
import { isEmpty, map } from 'lodash';
import { Link, useNavigate } from 'react-router-dom';



const NavigationItem: FC<Navigation> = (item: Navigation) => {

    
    const loadContent = () => {
        if(isEmpty(item.subNavigations)) {
            return (
                <a className='nav-link' href={item.route}>              
                    <i className={item.icon}></i>
                    <span className='menu-title'>{item.label}</span>
                </a>
            )
        } else {
            return (
                <>
                    <a className='nav-link' data-toggle="collapse" href="#nav-item-task" aria-expanded="false" aria-controls="nav-item-task">              
                    <i className={item.icon}></i>
                    <span className='menu-title'>{item.label}</span>
                    <i className="menu-arrow"></i>                  
                    </a>
                        {
                            loadSubNavigations(item.subNavigations)
                        }
                </>         
            )      
        }
    }

    const loadSubNavigations = (subNavigations?: SubNavigation[])  => {
       return (
            <div className="collapse" id="nav-item-task">
                    <ul className="nav flex-column sub-menu">
                    {
                        subNavigations?.map((subItem, index) => {
                            return (
                                <li className="nav-item"> <a className="nav-link" href={subItem.route}>{subItem.label}</a></li>
                            )
                        })
                    }
                </ul>
            </div>          
       )
    }

    return (       
        <li className={item.isActive ? 'nav-item active' : 'nav-item' }>          
            { 
                loadContent()
            }
        </li>
    )
}

export const Sidebar = () => {

    const [navigations, setNavigations] = useState<Navigation[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        setNavigations(NavigationMockData);
    },[navigations]);

    return (
        <>
            <Fab />
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    { /*navigations.map( (item, index) => {
                        return <NavigationItem 
                                    key={index}
                                    label={item.label}
                                    icon={item.icon}
                                    route={item.route}
                                    isActive={item.isActive}
                                    subNavigations={item.subNavigations}
                                />
                    })*/}
                     
                     <li className="nav-item">
                        <Link to='/' className='nav-link'>
                            <i className="fa-solid fa-gauge menu-icon" />
                            <span className="menu-title">Dashboard</span>
                        </Link>                         
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#nav-item-task" aria-expanded="false" aria-controls="nav-item-task">
                            <i className="fa-solid fa-tasks menu-icon" />
                            <span className="menu-title">Task</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="nav-item-task">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Personal
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Ad hoc
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#nav-item-reports" aria-expanded="false" aria-controls="nav-item-reports">
                            <i className="fa-solid fa-file-lines menu-icon" />
                            <span className="menu-title">Reports</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="nav-item-reports">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <Link to='/viewreporttemplate' className='nav-link'>
                                        View Template Report
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/generatereport' className='nav-link'>
                                        Generate Report
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/assignreport' className='nav-link'>
                                        Assign Report
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        My Generated Report
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to='/creatorshub' className="nav-link">
                            <i className="fa-solid fa-desktop menu-icon" />
                            <span className="menu-title">Creators Hub</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#nav-item-tickets" aria-expanded="false" aria-controls="nav-item-tickets">
                            <i className="fa-solid fa-ticket menu-icon" />
                            <span className="menu-title">Tickets</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="nav-item-tickets">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <a className="nav-link" href="generate-ticket-report.html">
                                        Generate Ticket Report
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="submit-a-ticket.html">
                                        Submit a Ticket
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#nav-item-approval" aria-expanded="false" aria-controls="nav-item-approval">
                            <i className="fa-solid fa-thumbs-up menu-icon" />
                            <span className="menu-title">Approval</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="nav-item-approval">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Request
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Submit
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="files.html">
                            <i className="fa-solid fa-laptop-file menu-icon" />
                            <span className="menu-title">Files</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="comments-and-notes.html">
                            <i className="fa-solid fa-comments menu-icon" />
                            <span className="menu-title">Comments and Notes</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa-solid fa-shopping-bag menu-icon" />
                            <span className="menu-title">Market Place</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contacts.html">
                            <i className="fa-solid fa-phone-square menu-icon" />
                            <span className="menu-title">Contacts</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa-solid fa-cogs menu-icon" />
                            <span className="menu-title">Settings</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>       
    )
}