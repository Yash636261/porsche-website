import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { PorscheDesignSystemProvider } from "@porsche-design-system/components-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PorscheDesignSystemProvider>
      <App />
    </PorscheDesignSystemProvider>
  </React.StrictMode>
);
