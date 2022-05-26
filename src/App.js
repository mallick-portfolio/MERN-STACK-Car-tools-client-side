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
import Blogs from "./Pages/Blogs/Blogs.jsx";
import RequireAdmin from "./Pages/Login/RequireAdmin.jsx";
import AllOrders from "./Pages/Dashboard/AllOrders.jsx";
import ManageProducts from "./Pages/Dashboard/ManageProducts.jsx";
import AddProduct from "./Pages/Dashboard/AddProduct.jsx";
import EditProduct from "./Pages/Dashboard/EditProduct.jsx";
import Profile from "./Pages/Dashboard/Profile/Profile.jsx";
import MyProfile from "./Pages/Dashboard/Profile/MyProfile.jsx";
import EditProfile from "./Pages/Dashboard/Profile/EditProfile.jsx";
import Address from "./Pages/Dashboard/Profile/Address.jsx";
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
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path="edit-profile/:id" element={<EditProfile />} />
          <Route path="address" element={<Address />} />
        </Route>
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
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
          <Route
            path="orders"
            element={
              <RequireAdmin>
                <AllOrders />
              </RequireAdmin>
            }
          />
          <Route
            path="manage-products"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          />
          <Route
            path="add-product"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="edit-product/:id"
            element={
              <RequireAdmin>
                <EditProduct />
              </RequireAdmin>
            }
          />
        </Route>
        {/* protected route end */}

        <Route path="/blogs" element={<Blogs />} />
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
