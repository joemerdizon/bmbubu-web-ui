import React from "react"
import { Anchor } from "../../../components/custom-web-controls/Anchor"
import { Button } from "../../../components/custom-web-controls/Button"
import { ProgressBar } from "../../../components/custom-web-controls/ProgressBar"



interface ReportDetailsProps {  
  report_thumbnail    ? : string,  
  report_title        ? : string,          
  report_status       ? : string,
  report_description  ? : string,
  icon_pin            ? : string,  
  created_by          ? : string,
  created_at          ? : string,
  updated_at          ? : string,
  pb_style            ? : {},
  value_now           ? : number,
  min                 ? : number,
  max                 ? : number,
}

const defaultProps: ReportDetailsProps = {
  report_thumbnail    : "",  
  report_title        : "",   
  report_status       : "N/A",
  report_description  : "",
  icon_pin            : "ti-pin-alt text-secondary",
  created_by          : "",
  created_at          : "",
  updated_at          : "",
  pb_style            : {},
  value_now           : 0,
  max                 : 0,
  min                 : 0
}

export const ReportDetails : React.FunctionComponent<ReportDetailsProps> = (props:any) => { 
  return (
    <div className="forum-item">
      <div className="row">
        <div className="col-12">
          <div className="forum-icon">
            <img src={props.report_thumbnail} className="forum-avatar" />
          </div>
          <span className="mx-2 float-right">
            <Anchor href="#" class_name="text-primary text-decoration-none" icon={props.icon_pin} />            
          </span>
          <Anchor href="#" class_name="forum-item-title" value={props.report_title} />
          <div className="forum-sub-title mt-1">
            {
              props.report_status == 'Archive' ? (
                <span className="badge badge-dark mr-2">{props.report_status}</span>                           
              ) : props.report_status == 'Active' ? (
                <span className="badge badge-info mr-2">{props.report_status}</span>                
              ) : props.report_status == 'Inactive' ? (
                <span className="badge badge-danger mr-2">{props.report_status}</span>
              ) : props.report_status == 'Pending' ? (
                <span className="badge badge-warning mr-2">{props.report_status}</span>
              ) : (
                <span></span>
              )
            }  
            
            <small className="text-secondary">
              <span className="mr-3">
                <i className="fa fa-user-edit" /> <b>Created by:</b> {props.created_by}
              </span>
              <span className="mr-3">
                <i className="far fa-calendar-plus" /> <b>Created:</b> {props.created_at}
              </span>
              <span>
                <i className="far fa-calendar-check" /> <b>Updated:</b> {props.updated_at}
              </span>
            </small>

            <p className="m-0">
              {props.report_description}
            </p>
          </div>
        </div>

        <div className="col-md-9 col-12">
          <div className="forum-sub-title mt-2">
          {
              props.report_status == 'Archive' ? (                
                <ProgressBar label="Report Progress:" class_name="bg-dark" style={props.pb_style} value_now={props.value_now} min={props.min} max={props.max} />
              ) : props.report_status == 'Active' ? (
                <ProgressBar label="Report Progress:" class_name="bg-info" style={props.pb_style} value_now={props.value_now} min={props.min} max={props.max} />                
              ) : props.report_status == 'Inactive' ? (
                <ProgressBar label="Report Progress:" class_name="bg-danger" style={props.pb_style} value_now={props.value_now} min={props.min} max={props.max} />                
              ) : props.report_status == 'Pending' ? (
                <ProgressBar label="Report Progress:" class_name="bg-warning" style={props.pb_style} value_now={props.value_now} min={props.min} max={props.max} />                
              ) : (
                <span></span>
              )
            }                          
          </div>
        </div>
        <div className="col-md-3 col-12">
          <div className="float-right mt-0">
            <Button class_name="btn btn-danger btn-rounded btn-icon mr-1" tooltip={{toggle: "tooltip", placement: "bottom", title: "Generate"}} icon="fas fa-list-check" />
            <Button class_name="btn btn-warning btn-rounded btn-icon mr-1" tooltip={{toggle: "tooltip", placement: "bottom", title: "Chat"}} icon="fas fa-comment-dots" />
          </div>
        </div>
      </div>
    </div>
  )
}

ReportDetails.defaultProps = defaultProps;