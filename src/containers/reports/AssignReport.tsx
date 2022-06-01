import React from "react"
import { Pagination } from "../../components/custom-web-controls/Pagination"
import { TabButton } from "../../components/custom-web-controls/TabButton"
import { ReportHeaderOptions } from "./reports-component/ReportHeaderOptions"
import { ReportDetails } from "./assign-report/ReportDetails"


export const AssignReport = () => {
  const pagination = ["assign-report-1", "assign-report-2", "assign-report-3"];
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
                <ReportDetails 
                  report_thumbnail={"images/assigned-templates/report1.png"} 
                  report_title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} 
                  report_status={"Archive"} 
                  report_description={"Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit amet. Purus in mollis nunc sed id semper risus in."}
                  icon_pin={"ti-pin2"} 
                  created_by={"John Doe"}
                  created_at={"February 06, 2022"} 
                  updated_at={"February 07, 2022"}
                  pb_style={{width : "25%"}}
                  value_now={25}                  
                />
                <ReportDetails 
                  report_thumbnail={"images/assigned-templates/report2.png"} 
                  report_title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} 
                  report_status={"Active"} 
                  report_description={"Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit amet. Purus in mollis nunc sed id semper risus in."}
                  icon_pin={"ti-pin2"} 
                  created_by={"John Doe"}
                  created_at={"February 06, 2022"} 
                  updated_at={"February 07, 2022"}
                  pb_style={{width : "100%"}}
                  value_now={100}                  
                />
                <ReportDetails 
                  report_thumbnail={"images/assigned-templates/report3.png"} 
                  report_title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} 
                  report_status={"Inactive"} 
                  report_description={"Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit amet. Purus in mollis nunc sed id semper risus in."}
                  icon_pin={"ti-pin-alt text-secondary"} 
                  created_by={"John Doe"}
                  created_at={"February 06, 2022"} 
                  updated_at={"February 07, 2022"}
                  pb_style={{width : "50%"}}
                  value_now={50}                  
                />
                <ReportDetails 
                  report_thumbnail={"images/assigned-templates/report4.png"} 
                  report_title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} 
                  report_status={"Pending"} 
                  report_description={"Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit amet. Purus in mollis nunc sed id semper risus in."}
                  icon_pin={"ti-pin-alt text-secondary"} 
                  created_by={"John Doe"}
                  created_at={"February 06, 2022"} 
                  updated_at={"February 07, 2022"}
                  pb_style={{width : "75%"}}
                  value_now={75}                  
                />                
              </div>
              <Pagination href={pagination}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}