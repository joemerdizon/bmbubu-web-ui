import { map } from "lodash";
import React, { useEffect } from "react";
import { convertToDateString } from "../../lib/common/helpers";

interface TableProps {
  id? : string,
  className ? : string,
  style? : {},     
  headers : HeaderProps[],
  data : any[],
}

interface HeaderProps  {
  heading: string;
  value: string;
}

const defaultProps: TableProps = {
  id  : "",
  className : "table table-striped w-100", 
  style : {}, 
  headers : [],
  data : []
}

export const Table : React.FunctionComponent<TableProps> = (props) => { 
  
  const { id, className, style, headers, data } = props;       
  
  return (
    <table id={id} className={className} style={style}>
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

Table.defaultProps = defaultProps;