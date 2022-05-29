import React, { useEffect } from "react"

interface ToggleSwitchProps {
  label       ? : string,
  id          ? : string,
  name        ? : string,
  checked     ? : boolean,
  class_name  ? : string,
  style       ? : {},
  data_on     ? : string,      
  data_off    ? : string,     
}

const defaultProps: ToggleSwitchProps = {
  label       : "",
  id          : "",
  name        : "",
  checked     : true,
  class_name  : "btn btn-primary", 
  style       : {},   
  data_on     : "On",
  data_off    : "Off",
}

export const ToggleSwitch : React.FunctionComponent<ToggleSwitchProps> = (props:any) => { 
  return (
    <div className="custom-toggle">
      <small className="font-weight-bold mr-1">{props.label}</small>
      <label className="switch switch-left-right">
        {
          props.checked ? (
            <input className="switch-input" type="checkbox" id={props.id} name={props.name} defaultChecked />
          ) : (
            <input className="switch-input" type="checkbox" id={props.id} name={props.name} />
          )
        }        
        <span className="switch-label" data-on={props.data_on} data-off={props.data_off} />
        <span className="switch-handle" />
      </label>
    </div>
  )
}

ToggleSwitch.defaultProps = defaultProps;