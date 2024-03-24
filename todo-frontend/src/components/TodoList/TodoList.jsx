import React from 'react';
import "./TodoList.css";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa"; //inport react icons for buttons
import { TiTick } from "react-icons/ti";


function TodoList({ todos, deleteTodo, setEditingTodo, markAsCompleted }) {
  return (
    <div className="todo-list-container">
      <h2>Todo List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.status}</td>
              <td>
                <button onClick={() => deleteTodo(todo.id)}><MdDeleteForever size={20}/></button>
                <button onClick={() => setEditingTodo(todo)}><FaEdit size={20}/></button>
                <button onClick={() => markAsCompleted(todo.id)}><TiTick size={20}/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
