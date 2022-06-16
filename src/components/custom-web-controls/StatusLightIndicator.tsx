import React, { useEffect, FC } from "react"
import { LightIndicatorStatus } from "../../constants/enum";
import { LIGHT_INDICATOR_STATUS_PENDING, LIGHT_INDICATOR_STATUS_ACTIVE, LIGHT_INDICATOR_STATUS_COMPLETED } from "../../constants/tms";

interface StatusLightIndicatorProps {
  status? : number,
}

const defaultProps: StatusLightIndicatorProps = {
  status : 0,
}

const LightIndicatortatus: FC<{status: number;}> = ({status}) => {
    
  const getLightIndicatortatus = () => {
      switch(status) {
          case LightIndicatorStatus.PENDING:
              return <><svg height={13} width={10} className="mr-1"><circle cx={5} cy={5} r={5} fill="#ba3742" /></svg> {LIGHT_INDICATOR_STATUS_PENDING}</>
              break
          case LightIndicatorStatus.ACTIVE:            
              return <><svg height={13} width={10} className="mr-1"><circle cx={5} cy={5} r={5} fill="#fc8a34" /></svg> {LIGHT_INDICATOR_STATUS_ACTIVE}</>              
              break
          case LightIndicatorStatus.COMPLETED:
              return <><svg height={13} width={10} className="mr-1"><circle cx={5} cy={5} r={5} fill="#529f50" /></svg> {LIGHT_INDICATOR_STATUS_COMPLETED}</>              
              break            
      }
  }
  return (
      <>{ getLightIndicatortatus() }</>
  )
}

export const StatusLightIndicator : React.FunctionComponent<StatusLightIndicatorProps> = (props:any) => { 
  return (
    <>
      <LightIndicatortatus status={props.status} />
    </>
  )
}

StatusLightIndicator.defaultProps = defaultProps;