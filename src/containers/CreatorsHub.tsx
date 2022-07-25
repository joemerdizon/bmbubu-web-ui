import React, { useEffect, useState } from "react";
import CSS from "csstype";

import { Canvass } from "../components/creators-bub/Canvass";
import { PalletContainer } from "../components/creators-bub/pallet-container/PalletContainer";
import { SectionModal } from "../components/creators-bub/SectionModal";
import {
  CreateReportTemplateDto,
  ReportTemplateSectionDto,
} from "../lib/dto/report.template.dto";
import { isEqual, map } from "lodash";
import { HeaderModal } from "../components/creators-bub/HeaderModal";
import axios from "axios";

const styles: CSS.Properties = {
  width: "80.5%",
};

const api = axios.create({
  baseURL: `https://localhost:44360/api/ReportTempate/CreateReportTemplate`,
});

export const CreatorsHub = () => {
  // Global Variables
  const initialValues: CreateReportTemplateDto = {
    reportName: "",
    header: "",
    footer: "",
    sections: [],
  };

  // States
  const [createReportTemplate, setCreateReportTemplate] =
    useState<CreateReportTemplateDto>(initialValues);
  const [showSectionModal, setShowSectionModal] = useState<boolean>(false);
  const [showHeaderModal, setShowHeadernModal] = useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<boolean>(true);

  //Functions
  const handleShowSectionModal = () => setShowSectionModal(!showSectionModal);
  const handleShowHeaderModal = () => setShowHeadernModal(!showSectionModal);

  const handleReportPropertyOnChanged = (
    field: string,
    value: string | number
  ) => {
    // Hold the event the change of createReportTemplate state
    setCreateReportTemplate({ ...createReportTemplate, [field]: value });
  };

  const handleAddReportTemplateHeader = (name: string) => {
    setCreateReportTemplate({ ...createReportTemplate, header: name });
    setShowHeadernModal(false);
    setIsPreview(false);
  };

  const handleAddReportTemplateSection = (
    sectionDto: ReportTemplateSectionDto
  ) => {
    const sections: ReportTemplateSectionDto[] = [
      ...createReportTemplate.sections,
      sectionDto,
    ];

    setCreateReportTemplate({ ...createReportTemplate, sections: sections });
    setShowSectionModal(false);
    setIsPreview(false);
  };

  const contructSection = () => {
    // TODO move and improve this
    return map(createReportTemplate.sections, (section) => {
      return {
        name: section.name,
        description: section.description,
        order: section.order,
      };
    });
  };

  const handleSaveReportTemplate = async () => {
    // TODO: Validation
    // TODO: Create a separate file for this services/handler

    const data = JSON.stringify({
      documentName: createReportTemplate.reportName, // Missing Header and Footer
      reportTemplateSections: contructSection(),
    });

    const result = await api.post("/", data, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(result);
  };

  useEffect(() => {
    console.log(createReportTemplate);
  }, [createReportTemplate]);

  return (
    <>
      <div className="content-wrapper">
        <div className="row" style={styles}>
          <div className="col-md-12 col-12 align-items-stretch">
            <div className="row">
              <div className="col-md-12 col-12 grid-margin stretch-card">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <Canvass
                      data={createReportTemplate}
                      isPreview={isPreview}
                    />
                  </div>
                </div>
              </div>
              <PalletContainer
                events={{
                  onAddSection: handleShowSectionModal,
                  onAddHeader: handleShowHeaderModal,
                  onReportPropertyChanged: handleReportPropertyOnChanged,
                  onSaveReportTemplate: handleSaveReportTemplate,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {showSectionModal ? (
        <SectionModal
          isEdit={false}
          onHide={handleShowSectionModal}
          onSave={handleAddReportTemplateSection}
        />
      ) : null}{" "}
      {showHeaderModal ? (
        <HeaderModal
          isEdit={false}
          onHide={handleShowHeaderModal}
          onSave={handleAddReportTemplateHeader}
        />
      ) : null}
    </>
  );
};
