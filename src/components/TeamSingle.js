import React from "react";
import { useModal } from "../hooks/useModal";
import MemberForm from "./MemberForm";
import Modal from "./Modal";
import "./TeamSingle.css";

const TeamSingle = ({ data, setDataToEdit, deleteData }) => {
  const [isOpenForm, openForm, closeForm] = useModal(false);
  return (
    <div>
      <h2>Teams</h2>

      {data.length > 0 ? (
        (console.log(data),
        data.map((item) => (
          <div className="team-container" key={item.id}>
            <h3> {item.name}</h3>
            <div className="member-container">
              {item.members.length > 0 ? (
                item.members.map((member) => (
                  <div className="member-single" key={member.id}>
                    <img src={member.img} />
                    <div>
                      <p>{member.name}</p>
                      <p> {member.role}</p>
                    </div>
                  </div>
                ))
              ) : (
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
        )))
      ) : (
        <h3>no hay equipos</h3>
      )}
      <Modal isOpen={isOpenForm} closeModal={closeForm}>
        <MemberForm />
      </Modal>
    </div>
  );
};

export default TeamSingle;
