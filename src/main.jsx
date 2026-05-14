import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";  
import { Provider } from "react-redux";
import store from "./store/index.js";
import { SpeedInsights } from "@vercel/speed-insights/react";  

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>  
      <Provider store={store}>
        <App />
        <SpeedInsights />  
      </Provider>
    </HashRouter>
  </StrictMode>
);