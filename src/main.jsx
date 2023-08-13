import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CarritoApp from "./CarritoApp.jsx";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <BrowserRouter>
      <React.StrictMode>
        <CarritoApp />
      </React.StrictMode>
    </BrowserRouter>
  </NextUIProvider>
);
