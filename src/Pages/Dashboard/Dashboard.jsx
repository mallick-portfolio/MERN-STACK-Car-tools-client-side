import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init.js";
import useAdmin from "../../hooks/useAdmin.js";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile lg:px-16 pb-8 text-accent mx-auto">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content lg:px-16 px-2">
        {/* <!-- Page content here --> */}
        <div className="bg-base-300 px-4 rounded-lg py-4">
          <h1 className="text-4xl">Welcome To Dashboard</h1>
          <Outlet />
        </div>
        {/* <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
      </div>
      <div className="drawer-side rounded-lg">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content">
          {!admin && (
            <>
              <li>
                <Link to={"/dashboard"}>My Orders</Link>
              </li>
              <li>
                <Link to={"/dashboard/my-reviews"}>My Reviews</Link>
              </li>
              <li>
                <Link to={"/dashboard/add-review"}>Add Review</Link>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <Link to={"/dashboard/users"}>Users</Link>
              </li>
              <li>
                <Link to={"/dashboard/orders"}>Orders</Link>
              </li>
            </>
          )}
          <li>
            <a>My Profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
