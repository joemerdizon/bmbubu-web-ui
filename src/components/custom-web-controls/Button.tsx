import React, { useEffect } from "react"

interface ButtonProps {
  type        ? : string,
  id          ? : string,
  class_name  ? : string,
  style       ? : {},          
  tooltip     ? : {toggle?: string, placement?: string, title?: string},
  modal       ? : {toggle?: string, target?: string},
  icon        ? : string,
  value       ? : string
}

const defaultProps: ButtonProps = {
  type        : "button",
  id          : "",
  class_name  : "btn btn-primary", 
  style       : {}, 
  tooltip     : {toggle: "", placement: "", title: ""},
  modal       : {toggle: "", target: ""},
  icon        : "",
  value       : "Button"
}

export const Button : React.FunctionComponent<ButtonProps> = (props:any) => { 
  return (
    <button 
      type                  = {props.href} 
      id                    = {props.id}
      className             = {props.class_name} 
      style                 = {props.style}
      data-tooltip-toggle   = {props.tooltip.toggle} 
      data-placement        = {props.tooltip.placement}
      title                 = {props.tooltip.title}      
      data-toggle           = {props.modal.toggle} 
      data-target           = {props.modal.target}
    >
      <i className={props.icon} /> {props.value}      
    </button>
  )
}

Button.defaultProps = defaultProps;