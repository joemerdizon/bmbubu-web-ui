import React from "react"
import { Search } from "../../../components/custom-web-controls/Search"
import { ToggleSwitch } from "../../../components/custom-web-controls/ToggleSwitch"



export const ReportHeaderOptions = () => {
  return (
    <div className="row border rounded pb-3 pt-4 mb-5">
      <div className="col-md-8 col-sm-8">
        <ToggleSwitch label="Sort by" data_on="Asc" data_off="Desc" />

        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline-primary btn-fw btn-xs active">
            <i className="fa-solid fa-envelope-open-text mr-1" /> Title
          </button>
          <button type="button" className="btn btn-outline-primary btn-fw btn-xs">
            <i className="far fa-calendar-plus mr-1" /> Created at
          </button>
          <button type="button" className="btn btn-outline-primary btn-fw btn-xs">
            <i className="far fa-calendar-check mr-1"> </i> Updated at
          </button>
        </div>

      </div>
      <div className="col-md-4 col-sm-4">
        <Search />
      </div>
    </div>
  )
}