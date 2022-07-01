import React, { useState } from "react";
import "./MemberForm.css";

const MemberForm = () => {
  const [imageList, setImageList] = useState([]);

  return (
    <form className="form-member">
      <input
        className="input-name-member"
        type="text"
        name="name"
        placeholder="name"
      />
      <select className="input-name-member" name="role">
        <option value="Project leader">Project leader</option>
        <option value="Engineering Architect">Engineering Architect</option>
        <option value="Account Manager">Account Manager</option>
      </select>
      <input
        type="file"
        multiple
        onChange={(e) => {
          const files = e.target.files;
          const fileList = [];

          Object.keys(files).forEach((index) => {
            console.log(files[index]);
            fileList.push(URL.createObjectURL(files[index]));
          });

          setImageList(fileList);
        }}
      />
      <div>
        <input className="input-send-member" type="submit" value="Enviar" />
        <input className="input-clean-member" type="reset" value="Limpiar" />
      </div>
      <div className="render-img">
        {imageList &&
          imageList.map((image, index) => {
            return <img key={index} src={image} alt={index} />;
          })}
      </div>
    </form>
  );
};

export default MemberForm;
