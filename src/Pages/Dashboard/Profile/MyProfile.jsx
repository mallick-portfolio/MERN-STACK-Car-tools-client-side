import React from "react";
import CommonProfile from "../../Shared/CommonProfile.jsx";
import userImg from "../../../assets/images/user.png";
import { Link } from "react-router-dom";
const MyProfile = () => {
  return (
    <div className="py-4 px-4 text-accent">
      <CommonProfile title="My Profile" />
      
      <div className="sm:flex">
        <div>
          <div class="avatar">
            <div class="w-20">
              <img src={userImg} alt="" />
            </div>
          </div>
          <div>
            <button className="px-4 py-2 my-2 text-sm text-white rounded-full border-0 bg-neutral">
              <Link to={"/profile/edit-profile"}>Edit Profile</Link>
            </button>
          </div>
        </div>
        <div className="pl-5">
          <div className="my-1">
            <h5 className="font-bold">Full name</h5>
            <p>Tamal Mallick</p>
          </div>
          <div className="my-1">
            <h5 className="font-bold">Email Address</h5>
            <p>abc</p>
          </div>
          <div className="my-1">
            <h5 className="font-bold">Phone</h5>
            <p>abc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
