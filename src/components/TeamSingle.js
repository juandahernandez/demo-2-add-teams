import React from "react";

import MembersItem from "./MembersItem";

import "./TeamSingle.css";

const TeamSingle = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h2>Teams</h2>
      {data.map((item, index) => (
        <div>
          <MembersItem
            item={item}
            index={index}
            key={index}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        </div>
      ))}
    </div>
  );
};

export default TeamSingle;
