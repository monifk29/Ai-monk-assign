import React, { useEffect, useState } from "react";
// import styles  from "../styles/tagStyles.modules.css";

const Tag = ({ tag, addChild, editName, editData, toggleCollapse }) => {
  const [toggle, setToggle] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [name, setName] = useState(tag.name);
  const [data, setData] = useState(tag.data);

  const nameSave = (e) => {
    if (e.key === "Enter") {
      editName(tag, name);
      setShowEdit(false);
      alert("Name change successfull");
    }
  };

  const dataSave = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      editData(tag, data);
      alert("Data change successfull");
    }
  };

  return (
    <div className = "container">
      <div className="main">
        <div className="top">
      <div className="name-sec">
      {toggle ? (
          <button onClick={() => setToggle(!toggle)}>{">"}</button>
        ) : (
          <button onClick={() => setToggle(!toggle)}>v</button>
        )}
        <span onClick={() => setShowEdit(true)}>
          {showEdit ? (
            <>
              <input
                value={name}
                onKeyDown={nameSave}
                onChange={(e) => setName(e.target.value)}
              />
            </>
          ) : (
            `${tag.name}`
          )}
        </span>
      </div>

       <div className="addChildBtn"> <button onClick={() => addChild(tag)}>Add Child</button></div>
        </div>
        <div className="dataDiv">
          {tag.data ? (
            <input
              value={data}
              onKeyDown={dataSave}
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      {!toggle &&
        tag.children &&
        tag.children.map((child) => (
          <Tag
            key={child.name}
            tag={child}
            addChild={addChild}
            editName={editName}
            editData={editData}
            toggleCollapse={toggleCollapse}
          />
        ))}
    </div>
  );
};
export default Tag;
