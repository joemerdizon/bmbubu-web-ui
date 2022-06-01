import React, { useEffect } from "react"

interface ProgressBarProps {
  id          ? : string,  
  class_name  ? : string,
  label       ? : string,  
  style       ? : {},            
  value_now   ? : number,
  min         ? : number,
  max         ? : number
}

const defaultProps: ProgressBarProps = {
  id          : "",
  class_name  : "", 
  label       : "",  
  style       : {}, 
  value_now   : 0,  
  min         : 0,
  max         : 100
}

export const ProgressBar : React.FunctionComponent<ProgressBarProps> = (props:any) => { 
  return (
    <>
      <small>{props.label}</small>
      <div className="progress" style={{ height: "20px" }}>
        <div className={'progress-bar ' + props.class_name} role="progressbar" style={props.style} aria-valuenow={props.value_now} aria-valuemin={props.min} aria-valuemax={props.max}>
        {props.value_now}%
        </div>
      </div>
    </>   
  )
}

ProgressBar.defaultProps = defaultProps;