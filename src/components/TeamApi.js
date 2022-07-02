import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";
import TeamForm from "./TeamForm";
import TeamSingle from "./TeamSingle";
import "./TeamApi.css";

const TeamApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/teams";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        setDb(res);
        setError(null);
      });
    setLoading(false);
  }, [url]);

  const createData = (data) => {
    const body = data;
    let options = {
      body,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        console.log(res);
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `estas seguro de eliminar el registro con id ${id}`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newDta = db.filter((el) => el.id !== id);
          setDb(newDta);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div className="components-container">
      <h2>Teams App</h2>
      <TeamForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error${error.status}:${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      {db && (
        <TeamSingle
          key={db.id}
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
          setDb={setDb}
        />
      )}
    </div>
  );
};

export default TeamApi;
