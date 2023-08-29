import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStorage } from "./components/GlobalContext";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStorage>
      <App />
    </GlobalStorage>
  </React.StrictMode>
);
