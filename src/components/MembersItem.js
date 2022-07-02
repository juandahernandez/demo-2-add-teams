import React from "react";
import { useModal } from "../hooks/useModal";
import MemberForm from "./MemberForm";
import Modal from "./Modal";
const MembersItem = ({ item, index, deleteData, setDataToEdit }) => {
  const [isOpenForm, openForm, closeForm] = useModal(false);
  return (
    <div className="team-container">
      <h3> {item.name}</h3>
      <div className="member-container">
        <Modal isOpen={isOpenForm} closeModal={closeForm}>
          <MemberForm data={item} closeForm={closeForm} />
        </Modal>
        {item.members.map((member, index) => (
          <div className="member-single" key={index + item.id}>
            <img src={member.img} />
            <div>
              <p>{member.name}</p>
              <p> {member.role}</p>
            </div>
          </div>
        ))}
        {item.members.length !== 3 && (
          <button className="add-member" onClick={openForm}>
            Agregar miembros
          </button>
        )}
      </div>
      <div className="buttons-team">
        <button className="edit" onClick={() => setDataToEdit(item)}>
          <i class="far fa-edit"></i>
        </button>
        <button className="delete" onClick={() => deleteData(item.id)}>
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default MembersItem;
