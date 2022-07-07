import React, { useEffect, useState } from "react";
import "./TeamForm.css";

const initialForm = {
  id: null,
  name: "",
  members: [],
};

const TeamForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      alert("debes ingresar un name");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };
  return (
    <div className="team-form">
      <h5>{dataToEdit ? "Update team" : "Add team"}</h5>
      <form onSubmit={handleSubmit}>
        <input
          className="input-name"
          type="text"
          name="name"
          placeholder="name team"
          onChange={handleChange}
          value={form.name}
        />
        <input className="input-send" type="submit" value="Enviar" />
        <input
          className="input-clean"
          type="reset"
          value="Limpiar"
          onClick={handleReset}
        />
      </form>
    </div>
  );
};

export default TeamForm;
