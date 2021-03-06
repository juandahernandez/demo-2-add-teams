import React, { useState } from "react";
import "./MemberForm.css";

const MemberForm = ({ data, closeForm }) => {
  const [imageList, setImageList] = useState([]);
  const [membersData, setMembersData] = useState({
    name: "",
    img: "",
    role: "",
  });

  const sendData = (e) => {
    e.preventDefault();
    if (data.members.length >= 3) {
      return;
    }

    for (let i = 0; i < data.members.length; i++) {
      if (data.members[i].role === membersData.role) {
        alert("Este rol ya esta asignado");
        return;
      }
    }

    const { name, role } = membersData;

    if (
      name.trim().length === 0 ||
      imageList.length === 0 ||
      role.trim().length === 0
    ) {
      alert("Ingresar todos los campos requeridos para continuar");
      return;
    }

    data.members.push({
      name: membersData.name,
      img: imageList,
      role: membersData.role,
    });
    setImageList([]);

    setMembersData({
      name: "",
      img: "",
      role: "",
    });
    closeForm();
  };

  return (
    <form className="form-member">
      <input
        className="input-name-member"
        type="text"
        name="name"
        placeholder="name"
        value={membersData.name}
        onChange={({ target }) =>
          setMembersData({ ...membersData, name: target.value })
        }
      />
      <select
        className="input-name-member"
        name="role"
        value={membersData.role}
        onChange={({ target }) =>
          setMembersData({ ...membersData, role: target.value })
        }
      >
        <option></option>
        <option value="Project leader">Project leader</option>
        <option value="Engineering Architect">Engineering Architect</option>
        <option value="Account Manager">Account Manager</option>
      </select>
      <input
        className="input-img"
        type="file"
        multiple
        value={membersData.img}
        onChange={(e) => {
          const files = e.target.files;
          const fileList = [];

          Object.keys(files).forEach((index) => {
            fileList.push(URL.createObjectURL(files[index]));
          });

          setImageList(fileList);
        }}
      />
      <div>
        <input
          className="input-send-member"
          type="submit"
          value="Enviar"
          onClick={sendData}
        />
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
