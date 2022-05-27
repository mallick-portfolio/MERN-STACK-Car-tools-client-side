import React from "react";
import { Link } from "react-router-dom";
import CommonProfile from "../../Shared/CommonProfile.jsx";

const JobProfile = () => {
  return (
    <div className="py-4 px-4 text-accent">
      <CommonProfile
        title="Job Profile"
        path={`/profile/edit-profile/${"userProfile?._id"}`}
      />

      <div className="">
        <div className="pl-5">
          <div className="my-1 sm:my-3">
            <p>Do you want job?</p>
            <h5 className="font-bold">yes</h5>
          </div>
          <div className="my-1 sm:my-3">
            <p>What type of job are you looking for?</p>
            <h5 className="font-bold">Remote</h5>
          </div>
          <div className="my-1 sm:my-3">
            <p>Your job preference:</p>
            <h5 className="font-bold">Remotely</h5>
          </div>
          <div className="my-1 sm:my-3">
            <p>Want to do a job outside Bangladesh?</p>
            <h5 className="font-bold">Yes</h5>
          </div>
          <div className="my-1 sm:my-3">
            <p>Do have any job experience?</p>
            <h5 className="font-bold">Yes</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobProfile;
