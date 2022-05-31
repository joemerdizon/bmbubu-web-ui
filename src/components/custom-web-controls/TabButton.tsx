import React, { useEffect } from "react"

interface TabButtonProps {
  href        ? : string,
  id          ? : string,  
  class_name  ? : string,          
  style       ? : {},  
  icon        ? : string,
  value       ? : string
}

const defaultProps: TabButtonProps = {
  href        : "#",
  id          : "",
  class_name  : "", 
  style       : {},   
  icon        : "",
  value       : "Link"
}

export const TabButton : React.FunctionComponent<TabButtonProps> = (props:any) => { 
  return (
    <li className="nav-item">      
        <a 
          className       = {'nav-link ' + props.class_name}
          id              = {props.id} 
          data-toggle     = "tab" 
          href            = {'#' + props.href} 
          role            = "tab" 
          aria-controls   = {props.href} 
          style           = {props.style}
        >
          <i className={props.icon} /> {props.value}
        </a>       
    </li>
  )
}

TabButton.defaultProps = defaultProps;