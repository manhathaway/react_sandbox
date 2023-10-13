import './ToDoList.css'
import { useState } from "react";

function ToDoList() {
  const [newItem, setNewItem] = useState("");
  const [toDos, setToDos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setToDos((currentToDos) => {
      return [
        ...currentToDos,
        {
          id: crypto.randomUUID(),
          title: newItem,
        },
      ];
    });
    setNewItem("");
  }

  function handleChange(e) {
    setNewItem(e.target.value);
  }

  function deleteToDo(id) {
    setToDos((currentToDos) => {
      return currentToDos.filter((toDo) => toDo.id !== id);
    });
  }

  return (
    <div className="body">
      <h2 className="heading">To-Do List</h2>
      <div className="content ToDo-content">
        <form onSubmit={handleSubmit} id="ToDo-form">
          <input
            className="ToDo-input"
            placeholder="Add Item"
            value={newItem}
            onChange={handleChange}
            type="text"
          />
          <button type="submit" className="ToDo-button">Add</button>
        </form>
        {toDos.length === 0 ? (
          <p className="ToDo-null">
            No list items found.
          </p>
        ) : (
          <div id="ToDo-list">
            {toDos.map((toDo) => {
              return (
                <div className="ToDo-list-item" key={toDo.id}>
                  <p className="ToDo-list-label">{toDo.title}</p>
                  <button
                    type="button"
                    className="ToDo-button ToDo-list-button"
                    onClick={() => deleteToDo(toDo.id)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ToDoList;
