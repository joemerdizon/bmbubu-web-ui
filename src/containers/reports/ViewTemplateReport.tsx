import React, { useEffect, useState } from 'react';
import { ViewTemplateReportProps } from '../../interfaces/props/ViewTemplateReportProps';
import { ViewTemplateReportMockData } from '../../mockData/ViewTemplateReportMockData';
import { Pagination } from "../../components/custom-web-controls/Pagination"
import { TabButton } from "../../components/custom-web-controls/TabButton"
import { ReportHeaderOptions } from "./reports-component/ReportHeaderOptions"
import { ReportDetails } from "../../components/report-templates/ReportDetails"
import dayjs from 'dayjs';
// import { ReportDetails } from "./view-template-report/ReportDetails"



export const ViewTemplateReport = () => {
  const [viewTemplateReport, setViewTemplateReport] = useState<ViewTemplateReportProps[]>([]);  
// const dt = new Date('07/06/2022');
// console.log(dayjs('2022-06-07'));

  useEffect(() => {
    setViewTemplateReport(ViewTemplateReportMockData);
  },[viewTemplateReport]);
  
  const pagination = ["view-report-template-1", "view-report-template-2", "view-report-template-3"];
  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title">
                <i className="fa fa-edit" />
                View Template Reports
                <button type="button" className="btn btn-primary btn-sm btn-icon-text float-right">
                  <i className="fa-solid fa-circle-plus mr-1" />
                  Create Report
                </button>
              </p>
              <div className="my-3">
                <hr />
              </div>

              <ul className="nav nav-tabs" id="setting-panel" role="tablist">
                <TabButton id="all-reports-tab" href="all-reports-section" icon="fa-solid fa-envelopes-bulk" value="All Reports" class_name="active" />
                <TabButton id="saved-tab" href="saved-section" icon="fa-solid fa-floppy-disk" value="Saved"/>
                <TabButton id="published-tab" href="published-section" icon="fa-solid fa-file-arrow-up" value="Published"/>
                <TabButton id="sent-for-approval-tab" href="sent-for-approval-section" icon="fa-solid fa-file-import" value="Sent for Approval"/>
              </ul>
              <div className="tab-content" id="setting-content">
                <div className="tab-pane fade show active scroll-wrapper" id="all-reports-section" role="tabpanel" aria-labelledby="all-reports-section">
                  <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="ibox-content forum-container">
                      <ReportHeaderOptions />                      
                      {
                        viewTemplateReport.map( (item, index) => (                          
                          <ReportDetails 
                            reportTemplateID = {item.reportTemplateID}
                            thumbnail = {item.thumbnail}
                            documentName = {item.documentName}
                            description = {item.description}
                            status = {item.status}
                            createdBy = {item.createdBy}
                            // createdDate = {item.createdDate}
                            // lastUpdatedDate = {item.lastUpdatedDate}
                            isPinned = {item.isPinned}
                            onPinClicked = {item.onPinClicked}
                          />
                        ))
                      }                       
                    </div>
                    <Pagination href={pagination}/>
                  </div>
                </div>
                <div className="tab-pane fade" id="saved-section" role="tabpanel" aria-labelledby="saved-section">
                  <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="ibox-content forum-container">
                      <ReportHeaderOptions />
                      {                        
                        viewTemplateReport.map( (item, index) => (    
                          item.status === 1 && 
                          <ReportDetails 
                            reportTemplateID = {item.reportTemplateID}
                            thumbnail = {item.thumbnail}
                            documentName = {item.documentName}
                            description = {item.description}
                            status = {item.status}
                            createdBy = {item.createdBy}
                            // createdDate = {item.createdDate}
                            // lastUpdatedDate = {item.lastUpdatedDate}
                            isPinned = {item.isPinned}
                            onPinClicked = {item.onPinClicked}
                          />
                        ))                        
                      }   
                    </div>
                    <Pagination href={pagination}/>
                  </div>
                </div>
                <div className="tab-pane fade" id="published-section" role="tabpanel" aria-labelledby="published-section">
                  <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="ibox-content forum-container">
                      <ReportHeaderOptions />
                      {                        
                        viewTemplateReport.map( (item, index) => (    
                          item.status === 2 && 
                          <ReportDetails 
                            reportTemplateID = {item.reportTemplateID}
                            thumbnail = {item.thumbnail}
                            documentName = {item.documentName}
                            description = {item.description}
                            status = {item.status}
                            createdBy = {item.createdBy}
                            // createdDate = {item.createdDate}
                            // lastUpdatedDate = {item.lastUpdatedDate}
                            isPinned = {item.isPinned}
                            onPinClicked = {item.onPinClicked}
                          />
                        ))                        
                      }   
                    </div>
                    <Pagination href={pagination}/>
                  </div>
                </div>
                <div className="tab-pane fade" id="sent-for-approval-section" role="tabpanel" aria-labelledby="sent-for-approval-section">
                  <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="ibox-content forum-container">
                      <ReportHeaderOptions />                      
                      {                        
                        viewTemplateReport.map( (item, index) => (    
                          item.status === 3 && 
                          <ReportDetails 
                            reportTemplateID = {item.reportTemplateID}
                            thumbnail = {item.thumbnail}
                            documentName = {item.documentName}
                            description = {item.description}
                            status = {item.status}
                            createdBy = {item.createdBy}
                            // createdDate = {item.createdDate}
                            // lastUpdatedDate = {item.lastUpdatedDate}
                            isPinned = {item.isPinned}
                            onPinClicked = {item.onPinClicked}
                          />
                        ))                        
                      }   
                    </div>
                    <Pagination href={pagination}/>
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