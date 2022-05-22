import Navbar from "./Pages/Shared/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Pages/Login/Register.jsx";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
function App() {
  const [theme, setTheme] = useState(true);
  useEffect(() => {
    themeChange(false);
  }, []);
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    
    setTheme(theme);
    console.log(theme)
  }, []);
  return (
    <div className="overflow-hidden" data-theme={`${theme ? "light" : "dark"}`}>
      <Navbar theme={theme} setTheme={setTheme} />
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
