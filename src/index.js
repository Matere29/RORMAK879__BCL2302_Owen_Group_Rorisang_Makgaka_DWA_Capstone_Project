import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './Pages/About';
import ContactPage from './Pages/ContactPage';
import Login from './Components/auth/Login';
import SignUp from './Components/auth/SignUp';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BlogPage from './Pages/BlogPage';
import Seasons from './Components/Seasons';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Seasons",
    element: <Seasons />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "BlogPage",
    element: <BlogPage />,
  },
  {
    path: "ContactPage",
    element: <ContactPage />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "SignUp",
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

