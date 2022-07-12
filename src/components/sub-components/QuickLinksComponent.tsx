import { FC } from "react";
import { DashboardQuickLinksProps } from '../../interfaces/props/DashboardQuickLinksProps';
import { Anchor } from "../custom-web-controls/Anchor";



export const QuickLinksComponent : FC<DashboardQuickLinksProps> = (props: DashboardQuickLinksProps) => {
    const { quickLinksId, summary, description, icon, link } = props;    

    return (
      <div className="col-lg-6 col-md-6 col-sm-6 col-6 stretch-card mb-4" key={quickLinksId}>
        <div className="card bg-white shadow">
          <div className="card-body p-3">
            <div className="row no-gutters align-items-center">
              <div className="col-12">
                <div style={{ height: "60px" }}>
                  <h3 className="m-0">
                    {summary} <i className={"fa-solid " + icon + " float-right"}/>
                  </h3>
                  <small className="text-uppercase smallest">{description}</small>
                </div>
                <a href={link} className="small text-decoration-none">
                  more details
                  <i className="fa-solid fa-circle-chevron-right btn-icon-append ml-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}