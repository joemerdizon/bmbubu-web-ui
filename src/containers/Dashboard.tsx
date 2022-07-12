import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { DashboardChartProps } from '../interfaces/props/DashboardChartProps';
import { DashboardChartMockData } from '../mockData/DashboardChartMockData';
import { DashboardQuickLinksProps } from '../interfaces/props/DashboardQuickLinksProps';
import { DashboardQuickLinksMockData } from '../mockData/DashboardQuickLinksMockData';
import { QuickLinksComponent } from '../components/sub-components/QuickLinksComponent';
import { CalendarComponent } from '../components/sub-components/CalendarComponent';
// import _ from 'lodash';

ChartJS.register(ArcElement, Tooltip, Legend);

// const data = {
//   labels: ["Completed", "New", "Urgent", "Overdue"],
//   datasets: [
//     {
//       // label: '# of Votes',
//       data: [39.7, 24.1, 6.9, 29.3],
//       backgroundColor: [
//         "#529f50", "#4793c8", "#fc8a34","#ba3742"
//       ],
//       borderColor: 
//         'rgba(255, 255, 255, 1)'        
//       ,
//       borderWidth: 1,
//     },
//   ],
// };

export const Dashboard = () => {
  let mappedChartData: DashboardChartProps[];
  let mappedQuickLinksData: DashboardQuickLinksProps[];

  const [dashboardChartData, setDashboardChartData] = useState<DashboardChartProps[]>([]);
  const [dashboardQuickLinksData, setDashboardQuickLinksData] = useState<DashboardQuickLinksProps[]>([]);

  // Fetch from API
  // Might need to convert this in a custom hooks
  useEffect(() => {       
    // mappedChartData = {...DashboardChartMockData}; 
    mappedChartData = DashboardChartMockData.map(data => {
      return {
        ...data        
      }
    });

    mappedQuickLinksData = DashboardQuickLinksMockData.map(data => {
      return {
        ...data        
      }
    });
  }, []);
    
  useEffect(() => {    
    mappedChartData && setDashboardChartData(mappedChartData);
    mappedQuickLinksData && setDashboardQuickLinksData(mappedQuickLinksData);
  },[dashboardChartData, dashboardQuickLinksData]);

  // console.log(data);  
  // console.log(dashboardChartData[0]);

  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="row">
            <div className="col-12 col-xl-12 mb-4 mb-xl-0">
              <h3 className="font-weight-bold">Welcome Renmark</h3>
              <h6 className="font-weight-normal mb-0">
                All systems are running smoothly! You have <span className="text-primary">3 unread alerts!</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-lg-12 grid-margin grid-margin-lg-0">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-12 mb-5">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    <i className="fa-solid fa-tasks"></i> Tasks
                  </h4>
                  <div className="my-3">
                    <hr />
                  </div>
                  <div className="row justify-content-center">
                    <div className="w-50">                            
                      {dashboardChartData[0] !== undefined && <Pie data={dashboardChartData[0]} />}                      
                    </div>                  
                  </div>                                    
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-4 mb-4">
              <h4 className="card-title">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Quick Links
              </h4>
              <div className="my-3">
                <hr />
              </div>
              <div className="row mb-4">
                {
                  dashboardQuickLinksData.map( (item, index) => (                          
                    <QuickLinksComponent 
                      key={index} 
                      {...item}                      
                    />
                  ))
                }                
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 grid-margin grid-margin-lg-0 stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <i className="fa-solid fa-calendar-days"></i> Schedule
              </h4>
              <div className="my-3">
                <hr />
              </div>
              <CalendarComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title">Other Dashboard Details</p>
              <p className="font-weight-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores id alias accusamus esse unde, quasi quia nemo impedit fuga deserunt magnam qui sapiente ullam
                adipisci explicabo ut totam? Assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores id alias accusamus esse unde, quasi quia nemo impedit fuga
                deserunt magnam qui sapiente ullam adipisci explicabo ut totam? Assumenda.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="theme-setting-wrapper">
          <div id="settings-trigger" className="settings-trigger-top">
            <i className="fa-solid fa-plus"></i>          
          </div>
          <div id="theme-settings" className="settings-panel">
            <i className="settings-close ti-close"></i>
            <p className="settings-heading">CUSTOMIZE DASHBOARD</p>
            <div className="col-12 mt-4">  
              <small>Show / Hide Widgets</small>          
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input"/>
                  Calendar
                <i className="input-helper"></i></label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input"/>
                  Chart
                <i className="input-helper"></i></label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input"/>
                  Quick Links
                <i className="input-helper"></i></label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" />
                  Report
                <i className="input-helper"></i></label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" />
                  Others
                <i className="input-helper"></i></label>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}