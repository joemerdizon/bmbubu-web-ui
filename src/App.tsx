import React from 'react';
import { Appbar } from "./components/Appbar"
import { Sidebar } from "./components/Sidebar"
import { Footer } from "./components/Footer"
import { ViewTemplateReport } from './containers/reports/ViewTemplateReport';
import { GenerateReport } from './containers/reports/GenerateReport';

function App() {
  return (
    <div className="container-scroller">
      <Appbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          {/* <ViewTemplateReport /> */}
            <GenerateReport />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
