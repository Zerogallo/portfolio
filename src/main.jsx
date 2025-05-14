import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Protf from "./portf/indexportf";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Protf />
  </StrictMode>
);
