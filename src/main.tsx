import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@avalon/globally.css";
import Home from "@avalon/Home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
