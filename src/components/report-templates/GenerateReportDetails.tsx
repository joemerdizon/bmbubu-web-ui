import { FC, useEffect, useState } from "react";
import { Button } from "../custom-web-controls/Button";
import { DataTable } from "../../components/custom-web-controls/DataTable";
import { ProgressBar } from "../custom-web-controls/ProgressBar";
import { convertToDateString } from "../../lib/common/helpers";
import { GenerateReportProps } from '../../interfaces/props/GenerateReportProps';
import { GenerateReportTaskDetails } from '../../components/report-templates/GenerateReportTaskDetails';

import {   
  GenerateReportAssignmentInformation, 
  GenerateReportGeneralInformation,   
  GenerateReportActionItems,
  GenerateReportReferenceMaterialsAttachments, 
  GenerateReportCommentsAndNotes, 
  GenerateReportApprovalFileUpload
} from '../../components/report-templates/GenerateReportJobDescriptionAndOrOtherDocuments';
import { 
  GenerateReportAssignmentInformationMockData, 
  GenerateReportGeneralInformationMockData, 
  GenerateReportRelatedObjectivesMockData,    
  GenerateReportActionItemsMockData, 
  GenerateReportReferenceMaterialsAttachmentsMockData, 
  GenerateReportCommentsAndNotesMockData, 
  GenerateReportApprovalFileUploadMockData
} from '../../mockData/GenerateReportMockData';
import { 
  ReportAssignmentInformationProps,
  ReportGeneralInformationProps, 
  ReportRelatedObjectivesProps, 
  ReportActionItemsProps, 
  ReportReferenceMaterialsAttachmentsProps, 
  ReportCommentsAndNotesProps, 
  ReportApprovalFileUploadProps
} from '../../interfaces/props/GenerateReportProps';
import { map } from 'lodash';





export const GenerateReportDetails : FC<GenerateReportProps> = (props: GenerateReportProps) => {      
  const { reportTemplateId, idNumber, createdBy, documentName, rangeFrom, rangeTo , createdDate, reportProgress, task} = props;

  let mappedReportAssignmentInformationData: ReportAssignmentInformationProps[];  
  let mappedReportGeneralInformationData: ReportGeneralInformationProps[];  
  let mappedReportRelatedObjectivesData: ReportRelatedObjectivesProps[];  
  let mappedReportActionItemsData: ReportActionItemsProps[];
  let mappedReportReferenceMaterialsAttachmentsData: ReportReferenceMaterialsAttachmentsProps[];
  let mappedReportCommentsAndNotesData: ReportCommentsAndNotesProps[];
  let mappedReportApprovalFileUploadData: ReportApprovalFileUploadProps[];

  const [assignmentInformationData, setAssignmentInformationData] = useState<ReportAssignmentInformationProps[]>([]);
  const [generalInformationData, setGeneralInformationData] = useState<ReportGeneralInformationProps[]>([]);
  const [relatedObjectivesData, setRelatedObjectivesData] = useState<ReportRelatedObjectivesProps[]>([]);  
  const [actionItemsData, setActionItemsData] = useState<ReportActionItemsProps[]>([]);
  const [referenceMaterialsAttachmentsData, setReferenceMaterialsAttachmentsData] = useState<ReportReferenceMaterialsAttachmentsProps[]>([]);
  const [commentsAndNotesData, setCommentsAndNotesData] = useState<ReportCommentsAndNotesProps[]>([]);
  const [approvalFileUploadData, setApprovalFileUploadData] = useState<ReportApprovalFileUploadProps[]>([]);

  // Fetch from API
  // Might need to convert this in a custom hooks
  useEffect(() => {
    mappedReportAssignmentInformationData = GenerateReportAssignmentInformationMockData.map(data => {
      return {
        ...data        
      }
    });

    mappedReportGeneralInformationData = GenerateReportGeneralInformationMockData.map(data => {
      return {
        ...data        
      }
    });

    mappedReportRelatedObjectivesData = GenerateReportRelatedObjectivesMockData.map(data => {
      return {
        ...data        
      }
    });
              
    mappedReportActionItemsData = GenerateReportActionItemsMockData.map(data => {
      return {
        ...data        
      }
    });

    mappedReportReferenceMaterialsAttachmentsData = GenerateReportReferenceMaterialsAttachmentsMockData.map(data => {
      return {
        ...data        
      }
    });

    mappedReportCommentsAndNotesData = GenerateReportCommentsAndNotesMockData.map(data => {
      return {
        ...data        
      }
    });

    mappedReportApprovalFileUploadData = GenerateReportApprovalFileUploadMockData.map(data => {
      return {
        ...data        
      }
    });
  }, []);
    
  useEffect(() => {    
    mappedReportAssignmentInformationData && setAssignmentInformationData(mappedReportAssignmentInformationData);
    mappedReportGeneralInformationData && setGeneralInformationData(mappedReportGeneralInformationData);
    mappedReportRelatedObjectivesData && setRelatedObjectivesData(mappedReportRelatedObjectivesData);    
    mappedReportActionItemsData && setActionItemsData(mappedReportActionItemsData);
    mappedReportReferenceMaterialsAttachmentsData && setReferenceMaterialsAttachmentsData(mappedReportReferenceMaterialsAttachmentsData);
    mappedReportCommentsAndNotesData && setCommentsAndNotesData(mappedReportCommentsAndNotesData);
    mappedReportApprovalFileUploadData && setApprovalFileUploadData(mappedReportApprovalFileUploadData);
  },[
      assignmentInformationData, 
      generalInformationData, 
      relatedObjectivesData,       
      actionItemsData, 
      referenceMaterialsAttachmentsData,
      commentsAndNotesData, 
      approvalFileUploadData
    ]);

    const relatedObjectivesTableHeader = [
      { heading: 'Name', value : 'name' }, 
      { heading: 'Assign To', value : 'assignTo'},
      { heading: 'Status', value : 'status'},
      { heading: 'Due Date', value : 'dueDate'}    
    ];   

  // console.log(createdDate);
  // function launchReportActionModal() {
  //   // $('#modal-fullscreen-xl-generate-report-action').modal('show');
  //   console.log('Alamu para eyamu mag error, hahaha');
  // }

  // map(task, (item) => console.log(...item.taskDetails));
  // task.map(report => {
  //   return {
  //     console.log(report)
  //   }
  // });

  return (    
    <>
      <div className="col-md-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <Button class_name={"btn btn-primary btn-sm btn-icon-text float-right"} icon={"fa-solid fa-circle-plus mr-1"} value={"Generate Report"} modal={{toggle: "modal", target: "#modal-fullscreen-xl-generate-report"}} />            
            <p className="card-title">
              <i className="fa fa-desktop mr-2" />
              Generate Reports
            </p>
            <div className="my-3">
              <hr />
            </div>
            <form>
              <div className="form-group mb-0 row">
                <label htmlFor="name_of_report" className="col-sm-3 col-form-label text-right required">
                  Name of Report
                </label>
                <div className="col-sm-6">
                  <select id="name_of_report" className="form-control" defaultValue={''} required >
                    <option disabled value="" />
                    <option value="Sample Report Name 1">Sample Report Name 1</option>
                    <option value="Sample Report Name 2">Sample Report Name 2</option>
                    <option value="Sample Report Name 3">Sample Report Name 3</option>
                    <option value="Sample Report Name 4">Sample Report Name 4</option>
                  </select>
                </div>
              </div>
              <div className="form-group mb-0 row">
                <label htmlFor="status" className="col-sm-3 col-form-label text-right required">
                  Status
                </label>
                <div className="col-sm-6">
                  <select id="status" className="form-control" defaultValue={''} required>
                    <option disabled value="" />
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="form-group mb-4 row">
                <label htmlFor="date-range" className="col-sm-3 col-form-label text-right required">
                  Date Range
                </label>
                <div className="col-sm-3">
                  <input type="date" className="form-control" id="date-from" />
                  <small id="passwordHelpBlock" className="form-text text-muted">
                    Date from
                  </small>
                </div>
                <div className="col-sm-3">
                  <input type="date" className="form-control" id="date-to" />
                  <small id="passwordHelpBlock" className="form-text text-muted">
                    Date to
                  </small>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal Fullscreen xl */}
      <div className="modal fade modal-fullscreen" id="modal-fullscreen-xl-generate-report" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-11">
                  <div className="card bg-light border mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 col-sm-2">
                          <p className="m-0">
                            <b className="text-primary mr-2">ID No:</b>
                            {idNumber}
                          </p>
                        </div>
                        <div className="col-12 col-sm-2">
                          <p className="m-0">
                            <b className="text-primary mr-2">Name:</b>
                            {createdBy}
                          </p>
                        </div>
                        <div className="col-12 col-sm-3">
                          <p className="m-0">
                            <b className="text-primary mr-2">Report:</b>
                            {documentName}
                          </p>
                        </div>
                        <div className="col-12 col-sm-3">
                          <p className="m-0">
                            <b className="text-primary mr-2">Range:</b>
                            {convertToDateString(rangeFrom)} - {convertToDateString(rangeTo)}                            
                          </p>
                        </div>
                        <div className="col-12 col-sm-2">
                          <p className="m-0">
                            <b className="text-primary mr-2">Date:</b>
                            {convertToDateString(createdDate)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1 text-right">
                  <span className="fa-stack fa-2x">
                    <i className="fa fa-circle fa-stack-2x text-primary" />
                    <i className="fa-solid fa-chart-bar fa-stack-1x text-white" />
                  </span>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12">
                  <small>Report Progress:</small>
                  <ProgressBar label="Report Progress:" class_name="bg-primary" style={{width : reportProgress + "%"}} value_now={reportProgress} min={0} max={100} />                                    
                </div>
              </div>
              <div className="row">
              {
                map(task, (item, index) => (
                  <div className="col-12" key={index}>
                    <div className="table-responsive">
                      <span className="badge badge-primary">
                        <i className="fa-solid fa-list-check mr-2" /> {item.taskName}
                      </span>    
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th className="font-weight-bold">Task Name</th>
                            <th className="font-weight-bold">Assigned</th>
                            <th className="font-weight-bold">Approver</th>
                            <th className="font-weight-bold">Due Date</th>
                            <th className="font-weight-bold">Status</th>
                            <th className="font-weight-bold">Action</th>
                          </tr>
                        </thead>
                        <tbody>           
                          {
                            map(item.taskDetails, (taskItem, index) => (
                              <GenerateReportTaskDetails {...taskItem} key={index} />
                            ))                  
                          }
                        </tbody>
                      </table>                                            
                    </div>
                  </div>  
                ))
              }                
              </div>
            </div>
            <div className="modal-footer py-2">
              <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">
                Close
              </button>
              <Button class_name="btn btn-primary btn-sm" icon="fa-solid fa-download" value="Save and Download" />
              <Button class_name="btn btn-primary btn-sm" icon="fa-solid fa-floppy-disk" value="Save" />              
            </div>
          </div>
        </div>
      </div>
            
      {/* Modal Fullscreen xl (Layer 2) */}
      <div className="modal fade modal-fullscreen" id="modal-fullscreen-xl-generate-report-action" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="m-0">Job Description and/or other Document(s)</h3>
              <button type="button" className="close mr-1" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body" style={{ background: "#f5f7ff" }}>
              <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      {
                        map(assignmentInformationData, (item, index) => (
                          <GenerateReportAssignmentInformation key={index} {...item} />
                        ))
                      }
                      
                      {
                        map(generalInformationData, (item, index) => (
                          <GenerateReportGeneralInformation key={index} {...item} />
                        ))
                      }
                      
                      <p className="card-title m-0 mb-2">Related Objectives</p>
                      <DataTable headers={relatedObjectivesTableHeader} data={relatedObjectivesData}/>
                      <div className="pb-5 mb-5 border-bottom" />
                      
                      <GenerateReportActionItems data={actionItemsData} />

                      {
                        map(referenceMaterialsAttachmentsData, (item, index) => (
                          <GenerateReportReferenceMaterialsAttachments key={index} {...item} />
                        ))
                      }

                      {
                        map(commentsAndNotesData, (item, index) => (
                          <GenerateReportCommentsAndNotes key={index} {...item} />
                        ))
                      }

                      <GenerateReportApprovalFileUpload data={approvalFileUploadData} />                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer py-2">
              <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}