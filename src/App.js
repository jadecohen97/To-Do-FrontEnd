import "./App.css";
import React, { useState } from "react";
import CreateToDo from "./Components/ToDo";
import ToDoList from "./Components/toDoList";

function App() {
  return (
    <div className="App">
      <CreateToDo />
      <ToDoList />
    </div>
  );
}

export default App;
