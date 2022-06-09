import React, { useEffect, useState } from 'react';
import { ViewTemplateReportProps } from '../../interfaces/props/ViewTemplateReportProps';
import { Pagination } from "../../components/custom-web-controls/Pagination"
import { TabButton } from "../../components/custom-web-controls/TabButton"
import { ReportHeaderOptions } from "./reports-component/ReportHeaderOptions"
import { ViewTemplateReportDetails } from "../../components/report-templates/ViewTemplateReportDetails"
import { ViewTemplateReportMockData } from '../../mockData/ViewTemplateReportMockData';
import { ThumbnailMockData } from '../../mockData/ThumbnailMockData';

export const ViewTemplateReport = () => {
  let mappedData: ViewTemplateReportProps[];
  const pagination = ["view-report-template-1", "view-report-template-2", "view-report-template-3"];

  const [reportTemplates, setReportTemplates] = useState<ViewTemplateReportProps[]>([]);

  // Fetch from API
  // Might need to convert this in a custom hooks
  useEffect(() => {
    mappedData = ViewTemplateReportMockData.map(report => {
      return {
        ...report,
        thumbnail: ThumbnailMockData[Math.floor(Math.random() * 3)],
        isPinned: false,
      }
    });
  }, []);
    
  useEffect(() => {    
    mappedData && setReportTemplates(mappedData);
  },[reportTemplates]);
  
  const handlePinClick = (id: number) => {
    const newReportTemplates = reportTemplates.map((reportTemplate) => {
      if(reportTemplate.reportTemplateId === id) {
        const updatedReportTemplate = {...reportTemplate, isPinned: !reportTemplate.isPinned}
        console.log(updatedReportTemplate);
        return updatedReportTemplate; 
      };
      return reportTemplate;
    });

    console.log(newReportTemplates)

    setReportTemplates(newReportTemplates);
  }

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
                        reportTemplates.map( (item, index) => (                          
                          <ViewTemplateReportDetails 
                            key={index} 
                            {...item}
                            onPinClick = {() => handlePinClick(item.reportTemplateId)}
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
                        reportTemplates.map( (item, index) => (    
                          item.status === 1 && 
                          <ViewTemplateReportDetails
                            key={index} 
                            {...item}
                            onPinClick = {() => handlePinClick(item.reportTemplateId)}
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
                        reportTemplates.map( (item, index) => (    
                          item.status === 2 && 
                          <ViewTemplateReportDetails
                            key={index} 
                            {...item}
                            onPinClick = {() => handlePinClick(item.reportTemplateId)}
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
                        reportTemplates.map( (item, index) => (    
                          item.status === 3 && 
                          <ViewTemplateReportDetails 
                            key={index} 
                            {...item}
                            onPinClick = {() => handlePinClick(item.reportTemplateId)}
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