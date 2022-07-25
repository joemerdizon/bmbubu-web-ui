import { map } from "lodash";
import React from "react";
import { JsxElement } from "typescript";
import { SectionReference } from "../../lib/dto/report.template.dto";

interface SectionReferenceTreeProps {
  data?: SectionReference[];
  isEditable: boolean;
}

interface SectionReferenceTreeNodeProps {
  data: SectionReference;
  isEditable: boolean;
}

const SectionReferencesTreeNode = (props: SectionReferenceTreeNodeProps) => {
  const { data, isEditable } = props;
  const { text, level, children } = data;
  const hasChild: boolean = children ? true : false;

  const getClass = (level: number): string => {
    const baseClass = "creators-hub-input-text";

    switch (level) {
      case 0:
        return `${baseClass} h5 font-weight-bold`;
      case 1:
        return `${baseClass} font-weight-bold`;
      case 2:
        return `${baseClass} creators-hub-items-level2`;
      case 3:
        return `${baseClass} creators-hub-items-level3`;
      case 4:
        return `${baseClass} creators-hub-items-level4`;
      default:
        return "";
    }
  };

  // Only for not Editable Tree
  const getElement = (level: number) => {
    switch (level) {
      case 0:
        return (
          <h5 className="font-weight-bold m-0 creators-hub-items-level1">
            {text}
          </h5>
        );
      case 1:
        return (
          <p className="font-weight-bold m-0 creators-hub-items-level1">
            {text}
          </p>
        );
      case 2:
        return <p className="m-0 creators-hub-items-level2">{text}</p>;
      case 3:
        return <p className="m-0 creators-hub-items-level3">{text}</p>;
      case 3:
        return <p className="m-0 creators-hub-items-level4">{text}</p>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="col-12 border-bottom py-2 px-0">
        {isEditable ? (
          <>
            <input
              type="text"
              className={getClass(level)}
              id="name"
              placeholder="&#xf304; Category"
              value={text}
            />
            <a
              href="#"
              className="text-muted mx-1 text-decoration-none float-right"
            >
              <i className="fa-solid fa-circle-minus"></i>
            </a>
          </>
        ) : (
          getElement(level)
        )}
      </div>
      {hasChild &&
        map(children, (child, index) => {
          return (
            <SectionReferencesTreeNode
              key={index}
              data={child}
              isEditable={isEditable}
            />
          );
        })}
    </>
  );
};

export const SectionReferenceTree = (props: SectionReferenceTreeProps) => {
  const { data, isEditable } = props;
  return (
    <div className="text-muted col-12 my-4">
      {map(data, (d, index) => {
        return (
          <SectionReferencesTreeNode
            key={index}
            data={d}
            isEditable={isEditable}
          />
        );
      })}
    </div>
  );
};
