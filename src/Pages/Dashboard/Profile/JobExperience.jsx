import React from "react";
import { Link } from "react-router-dom";
import Commonbtn from "../../Shared/Commonbtn.jsx";
import CommonProfile from "../../Shared/CommonProfile.jsx";

const JobExperience = () => {
  return (
    <div  className="py-4 px-4 text-accent">
      <CommonProfile
        title="Job Experience"
        path={`/profile/edit-profile/`}
      />
      <div className="flex my-8 text-accent justify-center items-center">
        <form
          // onSubmit={handleSubmit(onSubmit)}
          className="bg-base-100 w-full px-8 py-4 rounded-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="mb-2">
              <p className="text-sm mb-2">Job Title</p>
              <input
                // {...register("singlePrice", {
                //   required: true,
                // })}
                className="input bg-base-100 input-bordered rounded-full w-full"
              />
            </div>
            <div className="mb-2">
              <p className="text-sm mb-2">Company Name</p>
              <input
                // {...register("avilQty", {
                //   required: true,
                // })}
                className="input bg-base-100 input-bordered rounded-full w-full"
              />
            </div>
          </div>
          <p className="text-sm mb-2">Description</p>
          <textarea
            // {...register("des", {
            //   required: true,
            // })}
            rows={4}
            placeholder="Write..."
            className="textarea w-full textarea-bordered"
          ></textarea>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="mb-2">
              <p className="text-sm mb-2">Start date</p>
              <input
                // {...register("singlePrice", {
                //   required: true,
                // })}
                type={"date"}
                className="input bg-base-300 input-bordered rounded-full w-full"
              />
            </div>
            <div className="mb-2">
              <p className="text-sm mb-2">End date</p>
              <input
                // {...register("avilQty", {
                //   required: true,
                // })}
                type={"date"}
                className="input bg-base-300 input-bordered rounded-full w-full"
              />
            </div>
          </div>

          <div>
            <input
              type="submit"
              value="Save"
              className="px-4 py-1 mb-3 sm:mb-0 sm:px-12 sm:py-3 text-sm text-white rounded-md border-0 bg-neutral cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobExperience;
