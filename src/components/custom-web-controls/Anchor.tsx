import React, { useEffect } from "react"

interface AnchorProps {
  href        ? : string,
  id          ? : string,  
  class_name  ? : string,          
  style       ? : {},
  tooltip     ? : {toggle?: string, placement?: string, title?: string},
  modal       ? : {toggle?: string, target?: string},
  icon        ? : string,
  value       ? : string
}

const defaultProps: AnchorProps = {
  href        : "#",
  id          : "",
  class_name  : "", 
  style       : {}, 
  tooltip     : {toggle: "", placement: "", title: ""},
  modal       : {toggle: "", target: ""},
  icon        : "",
  value       : "Link"
}

export const Anchor : React.FunctionComponent<AnchorProps> = (props:any) => { 
  return (
    <a 
      href                  = {props.href} 
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
    </a>
  )
}

Anchor.defaultProps = defaultProps;