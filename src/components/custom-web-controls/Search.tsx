import React, { useEffect } from "react"
import { Button } from "../../components/custom-web-controls/Button"


export const Search = (props:any) => { 
  return (
    <div className="input-group">
      <input type="text" className="form-control" id="search" placeholder="Search for..." aria-label="Search for..." />
      <div className="input-group-append">
        <Button class_name={"btn btn-sm btn-primary"} icon={"icon-search mr-1"} value={"Search"} />                             
      </div>
    </div>
  )
}