import Navbar from "./Pages/Shared/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Pages/Login/Register.jsx";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import PageNotFound from "./Pages/Shared/PageNotFound.jsx";
import ToolsDetails from "./Pages/Shared/ToolsDetails.jsx";
import RequireAuth from "./Pages/Login/RequireAuth.jsx";
import Shop from "./Pages/Shop/Shop.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import MyOrders from "./Pages/Dashboard/MyOrders.jsx";
import MyReviews from "./Pages/Dashboard/MyReviews.jsx";
import AddReview from "./Pages/Dashboard/AddReview.jsx";
import Users from "./Pages/Dashboard/Users.jsx";
function App() {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    themeChange(false);
  }, []);
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));

    setTheme(theme);
  }, []);
  return (
    <div
      className="overflow-hidden"
      data-theme={`${!theme ? "light" : "dark"}`}
    >
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />

        {/* protected route start */}
        <Route
          path="/tool-details/:id"
          element={
            <RequireAuth>
              <ToolsDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />} />
          <Route path="my-reviews" element={<MyReviews />} />
          <Route path="add-review" element={<AddReview />} />
          <Route path="users" element={<Users />} />
        </Route>
        {/* protected route end */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        {/* 404 page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
