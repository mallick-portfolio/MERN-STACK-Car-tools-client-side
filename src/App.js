import Navbar from "./Pages/Shared/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Pages/Login/Register.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
