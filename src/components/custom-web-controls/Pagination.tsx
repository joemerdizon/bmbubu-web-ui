import React, { useEffect } from "react"

interface PaginationProps {
  href        ? : string[]
}

const defaultProps: PaginationProps = {
  href        : ["#"],  
}

export const Pagination : React.FunctionComponent<PaginationProps> = (props:any) => { 
  return (
    <nav aria-label="Pagination">
      <ul className="pagination justify-content-center">
        <li className="page-item" key={"previous"}>
          <a className="page-link" href={props.href[0]} aria-label="Previous">
            <span aria-hidden="true">«</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {
          props.href.map((href:string, key:number) => (            
            <li className="page-item" key={key+1}>
              <a className="page-link" href={href}>
                {key+1}
              </a>
            </li>
          ))
        }               
        <li className="page-item" key={"next"}>
          <a className="page-link" href={props.href[props.href.length - 1]} aria-label="Next">
            <span aria-hidden="true">»</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

Pagination.defaultProps = defaultProps;