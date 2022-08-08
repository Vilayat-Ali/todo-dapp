import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// importing layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";

// react router dom
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Navbar />
        <App />
        <Footer />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
