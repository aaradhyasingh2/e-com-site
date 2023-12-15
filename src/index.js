import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import { ToastContainer } from 'react-toastify';


ReactDOM.render(
  <>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      bodyClassName="toastBody"
    />
  </>, document.getElementById("root")
) 