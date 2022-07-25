import React, { ChangeEvent, useEffect, useState } from "react";
import CSS from "csstype";

const styles: CSS.Properties = {
  height: "390px",
  scrollbarWidth: "thin",
};

interface HeaderModalProps {
  isEdit: false;
  onHide(): void;
  onSave(name: string): void;
}

export const HeaderModal = (props: HeaderModalProps) => {
  const { isEdit, onHide, onSave } = props;
  const [header, setHeader] = useState({
    name: "",
    description: "",
  });

  const handleOnClose = () => onHide();

  const handleOnSaveClick = () => {
    console.log(header.name);
    onSave(header.name);
  };
  const handleOnInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setHeader({ ...header, [event.target.id]: event.target.value });

  useEffect(() => {
    //console.log(header);
  }, [header]);

  return (
    <div
      className="modal fade"
      id="modal-add-header"
      data-backdrop="static"
      data-keyboard="false"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header p-3 pr-4">
            <h5 className="modal-title">
              <i className="mdi  mdi mdi-format-indent-increase"></i>
              {` ${isEdit ? "Edit" : "Add"} Header`}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body p-1 py-2 overflow-auto" style={styles}>
            <form className="p-4">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={header.name}
                  onChange={(e) => handleOnInputChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  cols={30}
                  rows={10}
                  value={header.description}
                  onChange={(e) => handleOnInputChange(e)}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer py-2">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              data-dismiss="modal"
              onClick={handleOnSaveClick}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              data-dismiss="modal"
              onClick={handleOnClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
