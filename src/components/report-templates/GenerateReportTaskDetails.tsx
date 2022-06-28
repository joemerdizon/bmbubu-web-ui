import { FC } from "react";
import { Anchor } from "../custom-web-controls/Anchor";
import { StatusLightIndicator } from "../custom-web-controls/StatusLightIndicator";
import { convertToDateString } from "../../lib/common/helpers";
import { GenerateReportTasDetailskProps } from '../../interfaces/props/GenerateReportProps';
import { GenerateReportTaskActionItemProps } from '../../interfaces/props/GenerateReportProps';
import { map } from 'lodash';






const GenerateReportTaskActionDetails: FC<GenerateReportTaskActionItemProps> = (props:GenerateReportTaskActionItemProps ) => {     
  const { actionId, actionItemName, assigned, dueDate , status, action} = props;  

  return (      
      <tr key={actionId}>
        <td className="pl-5">{actionItemName}</td>
        <td>{assigned == true ? "Yes" : "No"}</td>
        <td>&nbsp;</td>
        <td>{convertToDateString(dueDate)}</td>
        <td className="my-auto"><StatusLightIndicator status={status} /></td>
        <td>
          {status == 1 && <Anchor href={"javascript:void(0);"} icon={"fa-solid fa-arrow-up-right-from-square"} tooltip={{toggle: "tooltip", placement: "bottom", title: "Open Description and/or Other Documents"}} modal={{toggle: "modal", target: action}} /> }
        </td>
      </tr>      
  )
}

export const GenerateReportTaskDetails : FC<GenerateReportTasDetailskProps> = (props: GenerateReportTasDetailskProps) => {      
  const { taskID, taskName, assigned, approverName, approverImage, dueDate , status, action, actionItem} = props;  
  
  
  return (  
    <>
      <tr className="font-weight-bold" key={taskID}>
        <td>{taskName}</td>
        <td>{assigned == true ? "Yes" : "No"}</td>
        <td>
          <img src={"images/faces/" + approverImage} alt="image" className="mr-3" />
          {approverName}
        </td>
        <td>{convertToDateString(dueDate)}</td>
        <td className="my-auto">
          <StatusLightIndicator status={status} />                            
        </td>
        <td>                            
          {status == 1 && <Anchor href={"javascript:void(0);"} icon={"fa-solid fa-arrow-up-right-from-square"} tooltip={{toggle: "tooltip", placement: "bottom", title: "Open Description and/or Other Documents"}} modal={{toggle: "modal", target: action}} />}
        </td>
      </tr>
      {
        map(actionItem, (item, index) => (
          <GenerateReportTaskActionDetails {...item} />
        ))
      }
    </>  
  )
}