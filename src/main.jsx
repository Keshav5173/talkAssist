import React from "react"; // Import React
import ReactDOM from "react-dom/client"; // Import ReactDOM
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // Import App component
import "./index.css"; // Import global styles (optional)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap App in BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
