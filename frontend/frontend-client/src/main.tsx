import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import { SWRConfig } from "swr";
import fetcher from "./utils/fetcher";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <SWRConfig
          value={{
            fetcher,
          }}
        >
          <App />
        </SWRConfig>
        <Toaster />
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
