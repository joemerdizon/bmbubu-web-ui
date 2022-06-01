import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreatorsHub } from '../containers/CreatorsHub';
import { Dashboard } from '../containers/Dashboard';
import { AssignReport } from '../containers/reports/AssignReport';
import { GenerateReport } from '../containers/reports/GenerateReport';
import { ViewTemplateReport } from '../containers/reports/ViewTemplateReport';


export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/viewreporttemplate' element={<ViewTemplateReport />} />
            <Route path='/generatereport' element={<GenerateReport />} />
            <Route path='/assignreport' element={<AssignReport />} />
            <Route path='/creatorshub' element={<CreatorsHub />} />          
        </Routes>
    )
}