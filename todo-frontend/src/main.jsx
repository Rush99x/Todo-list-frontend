import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import LoginPage from './components/Login/Login.jsx';
import Register from './components/Registration/Register.jsx';

// Create BrowserRouter with route configurations
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element:  <LoginPage />,
  },
  {
    path: "/registration",
    element:  <Register />,
  },
  {
    path: "/app",
    element:  <App />,
  },
]);

// Render the application root using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
