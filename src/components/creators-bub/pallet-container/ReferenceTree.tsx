import { filter, forEach, map, transform } from "lodash";
import React, { useState, useEffect, FC } from "react";
import { SectionReference } from "../../../lib/dto/report.template.dto";
import { mockTreeData } from "../../../mockData/ReferencesMockData";

interface ReferenceTreeProps {
  onReferenceChecked(reference: SectionReference): void;
}

interface TreeNodeProps {
  id: number;
  parentId?: number;
  level: number;
  text: string;
  icon: {
    type: string;
    color: string;
  };
  children?: TreeNodeProps[];
  showChildren?: boolean;
  checked: boolean;
  onChecked?(
    nodeId: number,
    text: string,
    level: number,
    children?: TreeNodeProps[]
  ): void;
}

const TreeNode = (props: TreeNodeProps) => {
  const { id, text, icon, children, checked, showChildren, level, onChecked } =
    props;
  const hasChild: boolean = children ? true : false;

  const composeDataContent = () => {
    return `<h5 class='m-0 py-2 border-bottom'>
                  <b>${text}</b>
              </h5>
              <span class='panel_toolbox-v2' style='right: 3px;'>
                  <a href='#' class='mx-1'>
                      <i class='fa fa-edit'></i>
                  </a>
                  <a href='#' class='mx-1'>
                      <i class='fa fa-close'></i>
                  </a>
              </span>`;
  };

  const fetchChildNode = () => {
    return (
      <ul>
        {map(children, (child, index) => {
          const chilNode = {
            ...child,
            onChecked: onChecked,
          };
          return <TreeNode key={index} {...chilNode} />;
        })}
      </ul>
    );
  };

  const showHideChild = () => {
    //setChildVisibility(!childVisible);
  };

  const handledNodeCheck = (id: number) => {
    onChecked && onChecked(id, text, level, children);
  };

  return (
    <li className="branch">
      {hasChild && (
        <i
          className={`indicator fa ${
            showChildren ? "fa-minus-circle" : "fa-plus-circle"
          }`}
          onClick={() => showHideChild()}
        />
      )}
      <input
        type="checkbox"
        className={`item${id}`}
        id={`item${id}`}
        data-content={composeDataContent()}
        checked={checked}
        onChange={() => handledNodeCheck(id)}
      />
      <i className={`fa-solid ${icon.type} mx-1 ${icon.color}`}></i>
      <a href="#">{text}</a>
      {showChildren && hasChild && fetchChildNode()}
    </li>
  );
};

export const ReferenceTree = ({ onReferenceChecked }: ReferenceTreeProps) => {
  const [references, setReferences] = useState<TreeNodeProps[]>();

  const constructSectionReference = (
    text: string,
    level: number,
    children?: TreeNodeProps[]
  ): SectionReference => {
    return {
      text: text,
      level: level,
      children: map(children, (child) => {
        return constructSectionReference(
          child.text,
          child.level,
          child.children
        );
      }),
    };
  };

  const checkNode = (props: TreeNodeProps): TreeNodeProps => {
    return {
      ...props,
      checked: true,
      showChildren: true,
      children: map(props.children, (child) => {
        return checkNode(child);
      }),
    };
  };

  const handleNodeChecked = (
    nodeId: number,
    text: string,
    level: number,
    children: TreeNodeProps[]
  ) => {
    const newReferences = map(references, (reference) => {
      return reference.id === nodeId ? checkNode(reference) : reference;
    });

    //newReferences filter to the parent
    onReferenceChecked(constructSectionReference(text, level, children));

    setReferences(newReferences);
  };

  const handleShowHideChildren = (nodeId: number) => {
    const newReferences = map(references, (reference) => {
      return reference.id === nodeId
        ? { ...reference, showChildren: true }
        : reference;
    });

    setReferences(newReferences);
  };

  //Possible Mapping

  useEffect(() => {
    setReferences(mockTreeData);
  }, []);

  return (
    <ul className="tree">
      {map(references, (reference, index) => {
        const node = {
          ...reference,
          onChecked: handleNodeChecked,
        };
        return <TreeNode key={index} {...node} />;
      })}
    </ul>
  );
};
