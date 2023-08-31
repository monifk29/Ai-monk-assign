import React, { useEffect, useState } from "react";
import styles from "../styles/tagStyles.modules.css";
import Tag from "./Tag";

const TagView = () => {
  const [tree, setTree] = useState({
    name: "root",
    children: [
      {
        name: "child1",
        children: [
          { name: "child1-child1", data: "c1-c1 Hello" },
          { name: "child1-child2", data: "c1-c2 JS" },
        ],
      },
      { name: "child2", data: "c2 World" },
    ],
  });

  const [text, setText] = useState("");
  const [show, setShow] = useState(false);


  const addChild = (parentTag) => {
    const newChild = { name: "New Child", data: "Data" };
    if (!parentTag.children) {
      parentTag.children = [];
    }
    parentTag.children.push(newChild);
    setTree({ ...tree });
  };

  const editName = (tag, newName) => {
    tag.name = newName;
    setTree({ ...tree });
  };

  const editData = (tag, newData) => {
    tag.data = newData;
    setTree({ ...tree });
  };

useEffect(() => {
    setText(JSON.stringify(tree, null, 2))
},[tree])

  return (
    <div className="mainCont">
      <Tag
        tag={tree}
        addChild={addChild}
        editName={editName}
        editData={editData}
        toggleCollapse={() => {}}
      />
      <button className="export" onClick={() => setShow(true)}>
        Export
      </button>
      <p>{show? `${text}` : ""}</p>
    </div>
  );
};

export default TagView;
