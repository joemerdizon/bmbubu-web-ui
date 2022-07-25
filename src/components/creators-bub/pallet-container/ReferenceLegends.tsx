import React from "react";

export const ReferenceLegends = () => {
  return (
    <>
      <div className="card-header p-0 bg-primary border-0" id="headingOne">
        <h2 className="mb-0">
          <button
            className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link collapsed"
            data-toggle="collapse"
            data-target="#collapseReference"
            aria-expanded="false"
            aria-controls="collapseReference"
          >
            <p className="mb-0 text-white">Reference Legends</p>
            <i className="myaccordion-fa fa" aria-hidden="true"></i>
          </button>
        </h2>
      </div>
      <div
        id="collapseReference"
        className="collapse bg-light"
        aria-labelledby="headingOne"
        data-parent="#accordion-reference-legends"
      >
        <div className="card-body px-0">
          <div className="mt-2 pb-4">
            <span className="d-block">
              <i className="fa-fw fa-solid fa-folder-plus mr-2 text-primary"></i>
              Category
            </span>
            <span className="d-block text">
              <i className="fa-fw fa-solid fa-folder-tree mr-2 text-dark"></i>
              Sub Category
            </span>
            <span className="d-block text">
              <i className="fa-fw fa-solid fa-person-running mr-2 text-warning"></i>
              Action Item
            </span>
            <span className="d-block text">
              <i className="fa-fw fa-solid fa-file-circle-check mr-2 text-success"></i>
              Approved Task Template
            </span>
            <span className="d-block text">
              <i className="fa-fw fa-solid fa-file-circle-xmark mr-2 text-danger"></i>
              Not Approved Task Template
            </span>
            <span className="d-block text">
              <i className="fa-fw fa-solid fa-list-check mr-2 text-info"></i>{" "}
              Checklist
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
