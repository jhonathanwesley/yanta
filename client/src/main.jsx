import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrouserRouter } from "react-router";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrouserRouter>
      <App />
      <Toaster />
    </BrouserRouter>
  </StrictMode>
);
