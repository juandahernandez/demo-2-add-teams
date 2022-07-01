import React, { useEffect } from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import "./TeamSingle.css";

const TeamSingle = ({ data, setDataToEdit, deleteData }) => {
  const [isOpenForm, openForm, closeForm] = useModal(false);

  useEffect(() => {
    console.log(data);
  }, []);
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
                <button onClick={openForm}>agregar miembros</button>
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
        <form>
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="role" placeholder="role" />
          <input type="text" name="imagen" placeholder="imagen" />
          <input type="submit" value="Enviar" />
          <input type="reset" value="Limpiar" />
        </form>
      </Modal>
      <button onClick={openForm}>abrir</button>
    </div>
  );
};

export default TeamSingle;
