import React, { useState } from "react";
import "./EditTodo.css"; 

function EditTodo({ todo, updateTodo }) {
  //Variables for title and des
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  //Function for handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

   //check if title is empty or not whitespace
    if (!title.trim()) return;

  //call updateTodo function
    updateTodo({
      id: todo.id,
      title,
      description,
      status: todo.status,
    });
  };

  //jsx render
  return (
    <div className="edit-todo-container">
      {" "}
      
      <h2>Edit Todo</h2>
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
        <button type="submit">Update Todo</button>
      </form>
    </div>
  );
}

export default EditTodo;
