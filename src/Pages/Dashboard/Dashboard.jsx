import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile lg:px-16 pb-8 text-accent mx-auto">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content lg:px-16 px-2">
        {/* <!-- Page content here --> */}
        <div className="bg-base-300 px-4 rounded-lg py-4">
          <h1 className="text-4xl">Welcome To Dashboard</h1>
          <Outlet />
        </div>
        {/* <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
      </div>
      <div class="drawer-side rounded-lg">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content">
          <li>
            <Link to={"/dashboard"}>My Orders</Link>
          </li>
          <li>
            <Link to={"/dashboard/my-reviews"}>My Reviews</Link>
          </li>
          <li>
            <Link to={"/dashboard/my-reviews"}>Add A Review</Link>
          </li>
          <li>
            <a>My Profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
