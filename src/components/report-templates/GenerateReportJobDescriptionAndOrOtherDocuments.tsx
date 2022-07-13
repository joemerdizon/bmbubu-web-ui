import { FC } from "react";
import { Button } from "../custom-web-controls/Button";
import { map } from "lodash";
import { ProgressBar } from "../custom-web-controls/ProgressBar";
import { convertToDateString } from "../../lib/common/helpers";
import { 
          ReportAssignmentInformationProps, 
          ReportGeneralInformationProps, 
          ReportActionItemsProps,
          ReportReferenceMaterialsAttachmentsProps, 
          ReportCommentsAndNotesProps,
          ReportApprovalFileUploadProps
        } from '../../interfaces/props/GenerateReportProps';





export const GenerateReportAssignmentInformation: FC<ReportAssignmentInformationProps> = (props:ReportAssignmentInformationProps ) => {     
  const { assignmentInformationId, assignTo, assignBy, approver } = props;  

  return (      
    <>
      <p className="card-title m-0 mb-2">Assignment Information</p>
      <div className="card bg-light border mb-5" key={assignmentInformationId}>
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-sm-4">
              <p className="m-0">
                <b className="text-primary mr-2">Assign to:</b>
                {assignTo}
              </p>
            </div>
            <div className="col-12 col-sm-4">
              <p className="m-0">
                <b className="text-primary mr-2">Assigned by:</b>
                {assignBy}
              </p>
            </div>
            <div className="col-12 col-sm-4">
              <p className="m-0">
                <b className="text-primary mr-2">Approver:</b>
                {approver}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>  
  )
}

export const GenerateReportGeneralInformation: FC<ReportGeneralInformationProps> = (props:ReportGeneralInformationProps ) => {     
  const { generalInformationID, name, description, dueDate, headsUpDays, urgentDays } = props;

  return (      
    <>
      <p className="card-title m-0 mb-2">General Information</p>
      <div className="card bg-light border">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-sm-4">
              <p className="m-0">
                <b className="text-primary mr-2">Name:</b>
                {name}
              </p>
            </div>
            <div className="col-12 col-sm-8">
              <p className="m-0">
                <b className="text-primary mr-2">Description:</b>
                {description}
              </p>
            </div>                            
            <div className="col-12 col-sm-4">
              <p className="m-0">
                <b className="text-primary mr-2">Due Date:</b>
                {convertToDateString(dueDate)}
              </p>
            </div>
            <div className="col-12 col-sm-4">
              <p className="m-0">
                <b className="text-primary mr-2">Head's Up Days:</b>{headsUpDays + (headsUpDays == 1 ? ' Day' : ' Days')}
              </p>
            </div>
            <div className="col-12 col-sm-4">
              <p className="m-0">
                <b className="text-primary mr-2">Urgent Days:</b>{urgentDays + (urgentDays == 1 ? ' Day' : ' Days')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5 mb-5 border-bottom" />
    </>  
  )
}

export const GenerateReportActionItems: FC<any> = (props) => {       
  const actionItemsProgressBarData:number = 50;
  
  return (      
    <>
      <p className="card-title m-0 mb-2">Action Items</p>
      <div className="mb-4">                       
        <ProgressBar label="Progress:" class_name="bg-primary" style={{width : actionItemsProgressBarData + "%"}} value_now={actionItemsProgressBarData} min={0} max={100} />                        
      </div>                      
      <table id="data-table-generate-report-action-items" className="table table-striped table-bordered mb-5 w-100 data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Assign To</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            map(props, (obj, index) => {
              return(
                map(obj, (data, index) => {
                  return (            
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.description}</td>
                      <td>{data.assignTo}</td>
                      <td>{convertToDateString(data.dueDate)}</td>
                      <td>{data.status}</td>
                      <td>
                        <a href="#" className="text-decoration-none mx-1">
                          <div className="badge badge-pill badge-danger"><i className="fa-solid fa-paperclip"></i> {data.action.attachment}</div>
                        </a>
                        <a href="#" className="text-decoration-none mx-1">
                          <div className="badge badge-pill badge-warning"><i className="fa-solid fa-comments"></i> {data.action.comments}</div>
                        </a>                        
                      </td>
                    </tr> 
                  )
                })              
              )              
            })
          }             
        </tbody>
      </table>
      <div className="pb-5 mb-5 border-bottom" />
    </>  
  )
}

export const GenerateReportReferenceMaterialsAttachments: FC<ReportReferenceMaterialsAttachmentsProps> = (props:ReportReferenceMaterialsAttachmentsProps ) => {     
  const { referenceMaterialsAttachmentsID, attachments, name, action } = props;  

  return (      
    <>
      <p className="card-title m-0 mb-2">Refference Materials</p>
      <ul className="nav nav-tabs" id="setting-panel" role="tablist">                        
        <li className="nav-item">
          <a className="nav-link active" id="attachments-tab" data-toggle="tab" href="#attachments-section" role="tab" aria-controls="attachments-section">
            Attachments <span className="badge badge-light ml-3">{attachments}</span>
          </a>
        </li>
      </ul>
      <div className="tab-content" id="setting-content">                        
        <div className="tab-pane fade show active scroll-wrapper" id="attachments-section" role="tabpanel" aria-labelledby="attachments-section">
          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="card bg-light border mb-5">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <p className="m-0">
                      <b className="text-primary mr-2">Name:</b>
                      {name}
                    </p>
                  </div>
                  <div className="col-12 col-sm-6">
                    <p className="m-0">
                      <b className="text-primary mr-2">Action:</b>
                      {action}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>                        
      </div>
      <div className="mb-5 border-bottom" />
    </>  
  )
}

export const GenerateReportCommentsAndNotes: FC<ReportCommentsAndNotesProps> = (props:ReportCommentsAndNotesProps ) => {     
  const { commentsAndNotesID, comments, notifyByEmail } = props;  

  return (      
    <>      
      <p className="card-title m-0 mb-2">Comments and Notes</p>
      <div className="accordion collapase-card" id="commentsAndNotesAccordion">
        <div className="card bg-light border">
          <div className="card-header" id="commentsAndNotes">
            <a href="#" className="btn btn-header-link text-dark" data-toggle="collapse" data-target="#commentsAndNotesSection" aria-expanded="true" aria-controls="commentsAndNotesSection">
              User Comments
            </a>
          </div>
          <div id="commentsAndNotesSection" className="collapse" aria-labelledby="commentsAndNotes" data-parent="#commentsAndNotesAccordion">
            <div className="card-body pt-4">
              <textarea name="user-comments" className="form-control" rows={4} defaultValue={comments} />
              <div className="w-100 mt-3">
                <span className="font-weight-bold mr-2">Notify by email: </span>
                <span>
                  {(notifyByEmail ? <input type="checkbox" id="owner" className="form-check-input" defaultChecked /> : <input type="checkbox" id="owner" className="form-check-input" /> )}                  
                  <label htmlFor="owner" className="ml-3">Owner</label>
                </span>
                <button type="button" className="btn btn-primary btn-icon-text btn-sm float-right">
                  <i className="fa-solid fa-comment-medical" /> Add Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>  
  )
}

export const GenerateReportApprovalFileUpload: FC<any> = (props) => {       
  
  return (      
    <>      
      <p className="card-title m-0 mb-2">Approval File Upload</p>
      <div className="accordion collapase-card" id="approvalFileUploadAccordion">
        <div className="card bg-light border">
          <div className="card-header" id="approvalFileUpload">
            <a href="#" className="btn btn-header-link text-dark" data-toggle="collapse" data-target="#approvalFileUploadSection" aria-expanded="true" aria-controls="approvalFileUploadSection">
              Document Name
            </a>
          </div>
          <div id="approvalFileUploadSection" className="collapse" aria-labelledby="approvalFileUpload" data-parent="#approvalFileUploadAccordion">
            <div className="card-body pt-4">
              <div className="row">
                {
                  map(props, (obj, index) => {
                    return(
                      map(obj, (data, index) => {
                        return(
                          map(data.fileName, (fileName, index) => {
                            return(
                              <div className="col-6 col-sm-3" key={index}>
                                <div className="card shadow-sm p-5">
                                  <span className="text-center mb-2">
                                    <i className="fa-solid fa-file-pdf mr-2" /> {fileName}
                                  </span>
                                  <Button class_name={"btn btn-primary btn-icon-text btn-sm d-block"} icon={"fa-solid fa-file-export"} value={"Preview"} />                                  
                                </div>                  
                              </div>
                            )                            
                          })
                        )
                      })              
                    )              
                  })                  
                }                   
              </div>              
            </div>
          </div>
        </div>
      </div>
    </>  
  )
}