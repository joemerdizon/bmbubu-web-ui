import { map } from "lodash";
import React, { useEffect } from "react";
import { convertToDateString } from "../../lib/common/helpers";

interface DataTableProps {
  headers : HeaderProps[],
  data : any[],
}

interface HeaderProps  {
  heading: string;
  value: string;
}

const defaultProps: DataTableProps = {
  headers : [],
  data : []
}

export const DataTable : React.FunctionComponent<DataTableProps> = (props) => { 
  
  const { headers, data } = props;

  // const TableData : any = (data: any, headers: HeaderProps) => {
  //   return (
  //     data.map( (itemData, index) => {      
  //       {
  //         headers.map( (itemHeader, index) => {
  //           const temp : string = itemHeader.value.toString()
  //           return itemData[temp];
  //         })
  //       }       
  //     })
  //   )    
  // } 
                  
  
  return (
    <table id="data-table-generate-report" className="table table-striped table-bordered w-100 data-table">
      <thead>
        <tr>
        {
          map(headers, (header, index) => {
            return (            
              <th className="font-weight-bold" key={index}>
                {header.heading}              
              </th> 
            )
          })
        }   
        </tr>
      </thead>
      <tbody>
        {
          map(data, (data, index) => {
            return (            
              <tr key={index}>
                {
                  map(headers, (header, index) => {
                    let tdValue;
                    if(header.value.includes('.')) {
                      // This condition is when the object you are trying to pull is nested on a certain property object
                      let itemSplit = header.value.split('.')
                      tdValue = data[itemSplit[0] as keyof typeof data][itemSplit[1] as keyof typeof data];
                      tdValue instanceof Date &&  (tdValue = convertToDateString(tdValue));
                    }
                    else {
                      tdValue = data[header.value as keyof typeof data];
                      tdValue instanceof Date &&  (tdValue = convertToDateString(tdValue));
                    }                    
                      
                    return (            
                      <td key={index}>
                        {tdValue}
                      </td> 
                    )
                  })
                }
              </tr> 
            )
          })
        } 
      </tbody>
      
    </table>
  )
}

DataTable.defaultProps = defaultProps;