import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Admin from "./pages/Admin";
import Employee from "./pages/Employee";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </Router>
  );
}

export default App;
