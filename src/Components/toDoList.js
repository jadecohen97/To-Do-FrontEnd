import { useEffect, useState } from "react";
import { getAllToDos } from "../lib/api";
import "../Styled/styledToDoList.css";
import { removeToDo } from "../lib/api";
import { updateCompleted } from "../lib/api";

const ToDoList = () => {
  const [allToDos, setAllToDos] = useState([]);
  const [removedItem, setRemovedItem] = useState("");
  const [refresh, setRefresh] = useState(false);
  // const [isEditable, setIsEditable] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    getAllToDos().then((data) => {
      setAllToDos(data);
    });
    setRefresh(false);
    setIsCompleted(false);
  }, [refresh, isCompleted]); // when refresh state is update the component will rerender

  const handleRefresh = () => {
    setRefresh(true);
  };

  const handleRemoveItem = async (event) => {
    const itemId = event.target.value;
    setRemovedItem({ value: itemId });
    await removeToDo(itemId);
    const filteredItems = allToDos.filter((item) => {
      return item.id !== itemId; // return the item where id isnt the item id we just deleted
    });
    setAllToDos(filteredItems); // this will update the state and rerender this component
    console.log(allToDos, "this is what we looking for ");
  };

  const handleCompleted = async (event) => {
    const itemId = event.target.value;
    await updateCompleted(itemId);
    setIsCompleted(true);
  };

  return (
    <div className="listWrapper">
      <button onClick={handleRefresh} className="listButton refresh" >
        refresh
      </button>
      <div className="listContainer">
        {allToDos.map((toDoItems) => (
          <div key={toDoItems.id} className="list">
            <div className="date listItems">{toDoItems.date}</div>
            <div
              className="text listItems"
              value={toDoItems.text}
              style={{
                textDecoration: toDoItems.completed ? "line-through" : "",
              }}
            >
              {toDoItems.text}
            </div>

            <div className="buttonGroup">
              <button
                className="listButton"
                value={toDoItems.id} // give button a value - target this value so we get the id and then pass this back to the api to use for url
                onClick={handleRemoveItem}
              >
                delete
              </button>
              {/* <button
                className="listButton"
                value={toDoItems.id}
                onClick={handleEdit}
              >
                edit?
              </button> */}
              {toDoItems.completed ? (
                <button className="listButton disabledButton" disabled={true}>
                  complete
                </button>
              ) : (
                <button
                  className="listButton"
                  value={toDoItems.id}
                  onClick={handleCompleted}
                >
                  complete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
