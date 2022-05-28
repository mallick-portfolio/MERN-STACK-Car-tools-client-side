import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  
  return (
    <div className="drawer drawer-mobile lg:px-16 pb-8 text-accent mx-auto">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  lg:px-16 px-2">
        {/* <!-- Page content here --> */}
        <div className="bg-base-300 px-4 rounded-lg py-4">
          <Outlet />
        </div>
        {/* <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
      </div>
      <div className={`drawer-side rounded-lg`}>
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 text-accent overflow-y-auto w-60 bg-base-300">
          <li>
            <Link className="font-bold" to={"/profile"}>My Profile</Link>
          </li>
          <li>
            <Link className="font-bold" to={"/profile/address"}>Address</Link>
          </li>
          <li>
            <Link className="font-bold" to={"/profile/education"}>Education</Link>
          </li>
          <li>
            <Link className="font-bold" to={"/profile/skills"}>About Me</Link>
          </li>
          <li>
            <Link className="font-bold" to={"/profile/job-profile"}>Job Profile</Link>
          </li>
          <li>
            <Link className="font-bold" to={"/profile/job-experience"}>Job Experience</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
