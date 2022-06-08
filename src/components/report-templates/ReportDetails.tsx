import { FC } from "react";
import { ViewTemplateReportProps } from '../../interfaces/props/ViewTemplateReportProps';
import { ReportStatus } from "../../constants/enum";
import { REPORT_STATUS_PUBLISHED, REPORT_STATUS_SAVED, REPORT_STATUS_SENT_FOR_APPROVAL } from "../../constants/tms";
import { Anchor } from "../custom-web-controls/Anchor";
import { Button } from "../custom-web-controls/Button";
import { convertToDateString } from "../../lib/common/helpers";

const ItemStatus: FC<{status: number;}> = ({status}) => {
    
    const getStatus = () => {
        switch(status) {
            case ReportStatus.SAVED:
                return <span className="badge badge-dark mr-2">{REPORT_STATUS_SAVED}</span>
                break
            case ReportStatus.PUBLISHED:
                return <span className="badge badge-danger mr-2">{REPORT_STATUS_PUBLISHED}</span>
                break
            case ReportStatus.SENT_FOR_APPROVAL:
                return <span className="badge badge-warning mr-2">{REPORT_STATUS_SENT_FOR_APPROVAL}</span>
                break
        }
    }
    return (
        <>{ getStatus() }</>
    )
}

export const ReportDetails : FC<ViewTemplateReportProps> = (props: ViewTemplateReportProps) => {

    const { reportTemplateId, thumbnail, documentName, description, status, createdBy, isPinned, onPinClick, createdDate, lastUpdatedDate } = props;

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
            <div className="col-md-12 col-12 forum-info text-left">
              <div className="mt-2 d-inline-block">
                <Button class_name="btn btn-outline-primary btn-icon-text btn-sm mr-1" icon="fa fa-edit" value="Edit" />
                <Button class_name="btn btn-outline-primary btn-icon-text btn-sm mr-1" icon="fa fa-user-tag" value="Assign" />
                <Button class_name="btn btn-outline-primary btn-icon-text btn-sm mr-1" icon="fa fa-vial" value="Simulate" />            
              </div>
              <div className="float-right mt-0">
                <Button class_name="btn btn-danger btn-rounded btn-icon mr-1" tooltip={{toggle: "tooltip", placement: "bottom", title: "Play"}} icon="fas fa-play" />
                <Button class_name="btn btn-warning btn-rounded btn-icon mr-1" tooltip={{toggle: "tooltip", placement: "bottom", title: "Chat"}} icon="fas fa-comment-dots" />
              </div>
            </div>
          </div>
        </div>
      )
}