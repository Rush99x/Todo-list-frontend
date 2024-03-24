import React, { useState } from "react";
import "./AddTodo.css";

function AddTodo({ addTodo }) {

  //variables for title and des
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //Function for handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //check if title is empty or not whitespace
    if (!title.trim()) return;
    addTodo({ title, description, status: "Pending" });
    setTitle("");
    setDescription("");
  };

  //jsx rendering
  return (
    <div className="add-todo-container">
      <h2 className="h2">Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Todo Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
