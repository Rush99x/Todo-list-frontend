import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';
import EditTodo from './components/EditTodo/EditTodo';


import "./App.css";

function App() {
  //variables for todos and editing todos
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  //Fetch todos from the server component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  // Function to fetch todos from the server
  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://localhost:7204/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Function to add a new todo
  const addTodo = async (newTodo) => {
    try {
      await axios.post('https://localhost:7204/api/todos', newTodo);
      fetchTodos();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  //Function to update todo
  const updateTodo = async (updatedTodo) => {
    try {
      await axios.put('https://localhost:7204/api/todos', updatedTodo);
      fetchTodos();
      setEditingTodo(null);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  //Function to delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://localhost:7204/api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  //Function to mark a todo as completed
  const markAsCompleted = async (id) => {
    try {
      await axios.put(`https://localhost:7204/api/todos/${id}/completed`);
      fetchTodos();
    } catch (error) {
      console.error('Error marking todo as completed:', error);
    }
  };

  //jsx
  return (
    <div className='bg'>
      <h1 className="Heading">Task Master</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos.filter(todo => !todo.completed)}
        deleteTodo={deleteTodo}
        setEditingTodo={setEditingTodo}
        markAsCompleted={markAsCompleted}
      />
      
      {editingTodo && <EditTodo todo={editingTodo} updateTodo={updateTodo} />}
    </div>
  );
}

export default App;
