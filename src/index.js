import React from "react";
import { createRoot } from "react-dom/client";
import App from "././components/App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* <BrowserRouter basename="money-guard-team3"> */}
      <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
