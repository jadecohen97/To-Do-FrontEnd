import React from "react";
import { useEffect, useState } from "react";
import "../Styled/styledToDo.css";

const CreateToDo = () => {
  const [toDo, setToDo] = useState("");
  const uploadToDo = (event) => {
    event.preventDefault();
    setToDo("");
    console.log(toDo);
  };

  return (
    <form className="noteForm" onSubmit={uploadToDo}>
      <input
        type="text"
        name="text"
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button className="addToDoButton">add</button>
    </form>
  );
};

export default CreateToDo;
