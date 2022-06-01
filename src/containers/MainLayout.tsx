import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Appbar } from '../components/Appbar';
import { Footer } from '../components/Footer';
import { Router } from '../components/Router';
import { Sidebar } from '../components/Sidebar';

export const MainLayout: FC<any> = props => {
    return (
        <BrowserRouter>
            <div className="container-scroller">
            <Appbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />         
                <div className="main-panel">
                    <Router />
                    <Footer />
                </div>
            </div>
            </div>
        </BrowserRouter>
    )
}