import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { ToastProvider } from "./components/client/common/ToastProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </StrictMode>
);
