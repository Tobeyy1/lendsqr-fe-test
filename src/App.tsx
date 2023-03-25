import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        {/* <Route path="/users/:id" component={User} /> */}
      </Routes>
    </div>
  );
}

export default App;
