import React from 'react';
import { Appbar } from "./components/Appbar"
import { Sidebar } from "./components/Sidebar"
import { Footer } from "./components/Footer"
import { ViewTemplateReport } from './containers/reports/ViewTemplateReport';
import { GenerateReport } from './containers/reports/GenerateReport';
import { AssignReport } from './containers/reports/AssignReport';
import { Dashboard } from './containers/Dashboard';
import { CreatorsHub } from './containers/CreatorsHub';
import { GenerateTicketReport } from './containers/GenerateTicketReport';
import { SubmitATicket } from './containers/SubmitATicket';
import { Files } from './containers/Files';
import { CommentsAndNotes } from './containers/CommentsAndNotes';
import { Contacts } from './containers/Contacts';

function App() {
  return (
    <div className="container-scroller">
      <Appbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          {/* <Dashboard /> */}
          {/* <ViewTemplateReport /> */}
          {/* <GenerateReport /> */}
          <AssignReport />
          {/* <CreatorsHub /> */}
          {/* <GenerateTicketReport /> */}
          {/* <SubmitATicket /> */}
          {/* <Files /> */}
          {/* <CommentsAndNotes /> */}
          {/* <Contacts /> */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
