// Libraries
import { Routes, Route } from "react-router-dom";

// importing base component
import Base from "./pages/Base";

// importing page components
import Home from "./pages/Home";
import Account from "./pages/Account";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Base title="Home">
            <Home />
          </Base>
        }
      />
      <Route
        path="/account"
        element={
          <Base title="Account">
            <Account />
          </Base>
        }
      />
      <Route
        path="/todo"
        element={
          <Base title="Todo">
            <Todo />
          </Base>
        }
      />
    </Routes>
  );
};

export default App;
