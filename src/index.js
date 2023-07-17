<<<<<<< HEAD
import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './store'
import { createRoot } from 'react-dom/client'
=======
import React from "react";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./store";
>>>>>>> fefa0825726ab97cf872e1e6206429696ae1cbf0

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
