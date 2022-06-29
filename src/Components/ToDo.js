import React from "react";
import { useEffect, useState } from "react";
import "../Styled/styledToDo.css";
import { addToDo } from "../lib/api";

const CreateToDo = () => {
  const [toDo, setToDo] = useState("");

  const uploadToDo = async (event) => {
    event.preventDefault();
    await addToDo(toDo);
    setToDo("");
  };

  return (
    <form className="noteForm" onSubmit={uploadToDo}>
      <input
        type="text"
        name="text"
        value={toDo}
        placeholder="to do..."
        onChange={(e) => setToDo(e.target.value)}
      />
      <button className="addToDoButton">add</button>
    </form>
  );
};

export default CreateToDo;
