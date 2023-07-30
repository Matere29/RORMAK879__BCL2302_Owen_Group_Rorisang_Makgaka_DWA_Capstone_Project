import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './Pages/About';
import ContactPage from './Pages/ContactPage';

import {
  createBrowserRouter,
  RouterProvider,
  //Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Contact",
    element: <ContactPage />,
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

