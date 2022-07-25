import React, { useState, useEffect } from "react";
import { SectionModal } from "../SectionModal";
import { General } from "./General";
import { Organization } from "./Organization";
import { ReportProperties } from "./ReportProperties";
import { TemplateOptions } from "./TemplateOptions";

type PalletContainerEvents = {
  onAddSection(): void;
  onAddHeader(): void;
  onReportPropertyChanged(field: string, value: string | number): void;
  onSaveReportTemplate(): void;
};
interface PalletContainerProps {
  events?: PalletContainerEvents;
}

export const PalletContainer = ({ events }: PalletContainerProps) => {
  // global variable

  const TITLE = "PALLET CONTAINER"; // To move in TMS

  // state
  const [toogleContainer, setToogleContainer] = useState<boolean>(false);

  // functions
  const handleToogleContainer = () => setToogleContainer(!toogleContainer);
  const handleOnAddSection = () => events?.onAddSection();
  const handleOnAddHeader = () => events?.onAddHeader();
  const handleOnSaveReportTemplate = () => events?.onSaveReportTemplate();
  const handleReportPropertyChanged = (field: string, value: string | number) =>
    events?.onReportPropertyChanged(field, value);

  useEffect(() => {
    //console.log(showSectionModal);
  });

  return (
    <>
      <div className="theme-setting-wrapper">
        <div id="settings-trigger" onClick={handleToogleContainer}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div
          id="theme-settings"
          className={`settings-panel ${toogleContainer ? "open" : ""}`}
        >
          <i
            className="settings-close ti-close d-block"
            onClick={handleToogleContainer}
          ></i>
          <p className="settings-heading">{TITLE}</p>

          <div id="accordion" className="myaccordion w-100">
            <ReportProperties onChangeField={handleReportPropertyChanged} />
            <TemplateOptions onSaveClick={handleOnSaveReportTemplate} />
            <General
              onAddSection={handleOnAddSection}
              onAddHeader={handleOnAddHeader}
            />
            <Organization />
          </div>
        </div>
      </div>
    </>
  );
};
