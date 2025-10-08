import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@avalon/globally.css";
import Home from "@avalon/Home";
// import App from "@avalon/App.tsx";
// import { MyButton } from "@avalon/components/buttons.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
