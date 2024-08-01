import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const user = localStorage.getItem("token");
  return (
    <>
      <Router>
        <Routes>
          {user && <Route path="/" exact element={<Home />} />}
          <Route path="/" exact element={<Navigate replace to="/login" />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
