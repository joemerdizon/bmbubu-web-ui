import React from "react"
import { Pagination } from "../../components/custom-web-controls/Pagination"
import { TabButton } from "../../components/custom-web-controls/TabButton"
import { ReportHeaderOptions } from "./view-template-report/ReportHeaderOptions"
import { ReportDetails } from "./view-template-report/ReportDetails"



export const ViewTemplateReport = () => {
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
                      <ReportDetails 
                        report_thumbnail={"images/assigned-templates/report1.png"} 
                        report_title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} 
                        report_status={"Saved"} 
                        report_description={"Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit amet. Purus in mollis nunc sed id semper risus in."}
                        icon_pin={"ti-pin2"} 
                        created_by={"John Doe"}
                        created_at={"February 06, 2022"} 
                        updated_at={"February 07, 2022"}
                      />
                      <ReportDetails 
                        report_thumbnail={"images/assigned-templates/report2.png"} 
                        report_title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} 
                        report_status={"Published"} 
                        report_description={"Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit amet. Purus in mollis nunc sed id semper risus in."}
                        icon_pin={"ti-pin2"} 
                        created_by={"John Doe"}
                        created_at={"February 06, 2022"} 
                        updated_at={"February 07, 2022"}
                      />
                      <ReportDetails 
                        report_thumbnail={"images/assigned-templates/report3.png"} 
                        report_title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} 
                        report_status={"Saved"} 
                        report_description={"Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit amet. Purus in mollis nunc sed id semper risus in."}
                        icon_pin={"ti-pin-alt text-secondary"} 
                        created_by={"John Doe"}
                        created_at={"February 06, 2022"} 
                        updated_at={"February 07, 2022"}
                      />
                      <ReportDetails 
                        report_thumbnail={"images/assigned-templates/report4.png"} 
                        report_title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} 
                        report_status={"Sent for Approval"} 
                        report_description={"Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit amet. Purus in mollis nunc sed id semper risus in."}
                        icon_pin={"ti-pin-alt text-secondary"} 
                        created_by={"John Doe"}
                        created_at={"February 06, 2022"} 
                        updated_at={"February 07, 2022"}
                      />
                    </div>
                    <Pagination href={pagination}/>
                  </div>
                </div>
                <div className="tab-pane fade" id="saved-section" role="tabpanel" aria-labelledby="saved-section">
                  <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="ibox-content forum-container">
                      <ReportHeaderOptions />
                      <ReportDetails 
                        report_thumbnail={"images/assigned-templates/report1.png"} 
                        report_title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}                         
                        report_description={"Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit amet. Purus in mollis nunc sed id semper risus in."}
                        icon_pin={"ti-pin2"} 
                        created_by={"John Doe"}
                        created_at={"February 06, 2022"} 
                        updated_at={"February 07, 2022"}
                      />                      
                      <ReportDetails 
                        report_thumbnail={"images/assigned-templates/report3.png"} 
                        report_title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}                         
                        report_description={"Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit amet. Purus in mollis nunc sed id semper risus in."}
                        icon_pin={"ti-pin-alt text-secondary"} 
                        created_by={"John Doe"}
                        created_at={"February 06, 2022"} 
                        updated_at={"February 07, 2022"}
                      />                      
                    </div>
                    <Pagination href={pagination}/>
                  </div>
                </div>
                <div className="tab-pane fade" id="published-section" role="tabpanel" aria-labelledby="published-section">
                  <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="ibox-content forum-container">
                      <ReportHeaderOptions />
                      <ReportDetails 
                        report_thumbnail={"images/assigned-templates/report2.png"} 
                        report_title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}                         
                        report_description={"Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit amet. Purus in mollis nunc sed id semper risus in."}
                        icon_pin={"ti-pin2"} 
                        created_by={"John Doe"}
                        created_at={"February 06, 2022"} 
                        updated_at={"February 07, 2022"}
                      />                     
                    </div>
                    <Pagination href={pagination}/>
                  </div>
                </div>
                <div className="tab-pane fade" id="sent-for-approval-section" role="tabpanel" aria-labelledby="sent-for-approval-section">
                  <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="ibox-content forum-container">
                      <ReportHeaderOptions />                      
                      <ReportDetails 
                        report_thumbnail={"images/assigned-templates/report4.png"} 
                        report_title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}                         
                        report_description={"Ed tempus urna et pharetra pharetra. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Integer eget aliquet nibh praesent tristique magna sit amet. Purus in mollis nunc sed id semper risus in."}
                        icon_pin={"ti-pin-alt text-secondary"} 
                        created_by={"John Doe"}
                        created_at={"February 06, 2022"} 
                        updated_at={"February 07, 2022"}
                      />
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