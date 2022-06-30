import React from "react";

const TeamSingle = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h2>Teams</h2>
      {data.length === 0 ? (
        <h3>no hay equipo conformados</h3>
      ) : (
        data.map((item) => (
          <div key={item.id}>
            <p>name: {item.name}</p>
            <div>
              members:{" "}
              {item.members ? (
                item.members.map((member) => (
                  <div key={member.id}>
                    <p>
                      name:
                      {member.name}
                    </p>
                    <img src={member.img} />
                    <p>role : {member.role}</p>
                  </div>
                ))
              ) : (
                <button>agregar miembros</button>
              )}
            </div>
            <button>editar</button>
            <button>editar</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TeamSingle;
