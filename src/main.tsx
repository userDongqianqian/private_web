import React from "react";
import ReactDOM from "react-dom/client";
import routers from "./routers";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import BeforeEnter from "./routers/beforeEnter";
// import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  // <Provider>
    <BrowserRouter>
      <BeforeEnter routers={routers} />
    </BrowserRouter>
  // </Provider>
  // </React.StrictMode>
);
