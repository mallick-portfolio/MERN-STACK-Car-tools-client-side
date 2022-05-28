import React from "react";
import CommonProfile from "../../Shared/CommonProfile.jsx";
import userImg from "../../../assets/images/user.png";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init.js";
import Loading from "../../Shared/Loading.jsx";
const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const { isLoading, data: userProfile } = useQuery("userProfile", () =>
    fetch(`http://localhost:5000/profile/user/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading || loading) {
    return <Loading />;
  }

  return (
    <div className="py-4 px-4 text-accent">
      <CommonProfile
        title="My Profile"
        path={`/profile/edit-profile/${userProfile?._id}`}
      />

      <div className="sm:flex">
        <div>
          <div className="avatar">
            <div className="w-20">
              <img
                src={userProfile.image ? userProfile.image : userImg}
                alt=""
                className="rounded-full border-neutral border-2 p-1"
              />
            </div>
          </div>
          <div>
            <button className="px-4 py-2 my-2 text-sm text-white rounded-full border-0 bg-neutral">
              <Link to={`/profile/edit-profile/${userProfile?._id}`}>
                Edit Profile
              </Link>
            </button>
          </div>
        </div>
        <div className="pl-5">
          <div className="my-1">
            <h5 className="font-bold">Full name</h5>
            <p>{userProfile?.name}</p>
          </div>
          <div className="my-1">
            <h5 className="font-bold">Email Address</h5>
            <p>{userProfile?.email}</p>
          </div>
          <div className="my-1">
            <h5 className="font-bold">Phone</h5>
            <p>{userProfile?.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
