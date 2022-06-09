import React, { useEffect, useState } from 'react';
import { AssignReportProps } from '../../interfaces/props/AssignReportProps';
import { Pagination } from "../../components/custom-web-controls/Pagination"
import { ReportHeaderOptions } from "./reports-component/ReportHeaderOptions"
import { AssignReportDetails } from "../../components/report-templates/AssignReportDetails"
import { AssignReportMockData } from '../../mockData/AssignReportMockData';
import { ThumbnailMockData } from '../../mockData/ThumbnailMockData';


export const AssignReport = () => {
  let mappedData: AssignReportProps[];
  const pagination = ["view-report-template-1", "view-report-template-2", "view-report-template-3"];

  const [reportTemplates, setReportTemplates] = useState<AssignReportProps[]>([]);

  // Fetch from API
  // Might need to convert this in a custom hooks
  useEffect(() => {
    mappedData = AssignReportMockData.map(report => {
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
                Assigned Reports
                <button type="button" className="btn btn-primary btn-sm btn-icon-text float-right">
                  <i className="fa-solid fa-circle-plus mr-1" />
                  Create Report
                </button>
              </p>
              <div className="my-3">
                <hr />
              </div>          

              <div className="ibox-content forum-container mx-3 mt-4">                
                <ReportHeaderOptions />
                {
                  reportTemplates.map( (item, index) => (                          
                    <AssignReportDetails 
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
  )
}