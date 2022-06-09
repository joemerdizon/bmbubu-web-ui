import { FC } from "react";
import { AssignReportProps } from '../../interfaces/props/AssignReportProps';
import { AssignReportStatus } from "../../constants/enum";
import { REPORT_STATUS_ARCHIVE, REPORT_STATUS_ACTIVE, REPORT_STATUS_INACTIVE, REPORT_STATUS_PENDING } from "../../constants/tms";
import { Anchor } from "../custom-web-controls/Anchor";
import { Button } from "../custom-web-controls/Button";
import { ProgressBar } from "../custom-web-controls/ProgressBar";
import { convertToDateString } from "../../lib/common/helpers";

const ItemStatus: FC<{status: number;}> = ({status}) => {    
    const getStatus = () => {
        switch(status) {
            case AssignReportStatus.ARCHIVE:
                return <span className="badge badge-dark mr-2">{REPORT_STATUS_ARCHIVE}</span>
                break
            case AssignReportStatus.ACTIVE:
                return <span className="badge badge-info mr-2">{REPORT_STATUS_ACTIVE}</span>
                break
            case AssignReportStatus.INACTIVE:
                return <span className="badge badge-danger mr-2">{REPORT_STATUS_INACTIVE}</span>
                break
            case AssignReportStatus.PENDING:
                return <span className="badge badge-warning mr-2">{REPORT_STATUS_PENDING}</span>
                break
        }
    }
    return (
        <>{ getStatus() }</>
    )
}

const ReportProgress: FC<{status: number; reportProgress: number}> = ({status, reportProgress}) => {    
  const getReportProgress = () => {
      switch(status) {
          case AssignReportStatus.ARCHIVE:              
              return <ProgressBar label="Report Progress:" class_name="bg-dark" style={{width : reportProgress + "%"}} value_now={reportProgress} min={0} max={100} />
              break
          case AssignReportStatus.ACTIVE:            
              return <ProgressBar label="Report Progress:" class_name="bg-info" style={{width : reportProgress + "%"}} value_now={reportProgress} min={0} max={100} />
              break
          case AssignReportStatus.INACTIVE:            
              return <ProgressBar label="Report Progress:" class_name="bg-danger" style={{width : reportProgress + "%"}} value_now={reportProgress} min={0} max={100} />
              break
          case AssignReportStatus.PENDING:            
              return <ProgressBar label="Report Progress:" class_name="bg-warning" style={{width : reportProgress + "%"}} value_now={reportProgress} min={0} max={100} />
              break
      }
  }
  return (
      <>{ getReportProgress() }</>
  )
}

export const AssignReportDetails : FC<AssignReportProps> = (props: AssignReportProps) => {

    const { reportTemplateId, thumbnail, documentName, description, status, createdBy, createdDate, lastUpdatedDate, isPinned, onPinClick, reportProgress } = props;

    const handlePinClick = () => {
      onPinClick && onPinClick();
    }

    return (
        <div className="forum-item">
          <div className="row">
            <div className="col-12">
              <div className="forum-icon">
                <img src={thumbnail} className="forum-avatar" />
              </div>
              <span className="mx-2 float-right">
                <Anchor onClick={handlePinClick} class_name="text-primary text-decoration-none" icon={isPinned ? 'ti-pin2' : 'ti-pin-alt text-secondary'} />            
              </span>
              <Anchor href="#" class_name="forum-item-title" value={documentName} />
              <div className="forum-sub-title mt-1">
                <ItemStatus status={status}  />
                
                <small className="text-secondary">
                  <span className="mr-3">
                    <i className="fa fa-user-edit" /> <b>Created by:</b> {createdBy}
                  </span>
                  {<span className="mr-3">
                    <i className="far fa-calendar-plus" /> <b>Created:</b> {convertToDateString(createdDate)}
                  </span>}
                  {<span>
                    <i className="far fa-calendar-check" /> <b>Updated:</b> {convertToDateString(lastUpdatedDate)}
                  </span>}
                </small>
                <p className="m-0">
                  {/* {description} */}
                </p>
              </div>
            </div>
            
            <div className="col-md-9 col-12">
              <div className="forum-sub-title mt-2">
                <ReportProgress status={status} reportProgress={reportProgress} />
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