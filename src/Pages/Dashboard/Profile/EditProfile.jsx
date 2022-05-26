import React from "react";
import CommonProfile from "../../Shared/CommonProfile.jsx";
import userImg from "../../../assets/images/user.png";
const EditProfile = () => {
  return (
    <div className="py-4 px-4 text-accent">
      <CommonProfile title="My Profile" />

      <div className="sm:flex w-full ">
        <div className="w-40 text-center">
          <div class="avatar">
            <div class="w-20">
              <img src={userImg} alt="" />
            </div>
          </div>
          <div>
            <button className="px-4 py-2 my-2 text-sm text-white rounded-full border-0 bg-neutral">
              Upload image
            </button>
          </div>
        </div>
        <div className="pl-5 w-full">
          <div className="flex my-8 text-accent justify-center items-center">
            <form
              // onSubmit={handleSubmit(onSubmit)}
              className="w-full px-8 py-4 rounded-lg"
            >
              <div className="mb-2">
                <p className="text-sm mb-2">Full name</p>
                <input
                  // {...register("name", {
                  //   value: product?.name,
                  //   required: true,
                  // })}
                  placeholder="Product Title"
                  className="input rounded-full input-bordered w-full"
                />
              </div>
              <div className="mb-2">
                <p className="text-sm mb-2">
                  Email Address (Email Address cannot be changed)
                </p>
                <input
                  // {...register("name", {
                  //   value: product?.name,
                  //   required: true,
                  // })}
                  placeholder="Product Title"
                  className="input rounded-full input-bordered w-full"
                />
              </div>
              <div className="mb-2">
                <p className="text-sm mb-2">Phone</p>
                <input
                  // {...register("name", {
                  //   value: product?.name,
                  //   required: true,
                  // })}
                  placeholder="Product Title"
                  className="input rounded-full input-bordered w-full"
                />
              </div>

              <div className="sm:flex justify-between items-center">
                <div>
                  <input
                    type="submit"
                    value="Save Change"
                    className="px-4 sm:px-12 sm:py-3 text-sm text-white rounded-full  border-0 bg-neutral cursor-pointer"
                  />
                </div>
                {/* <Commonbtn>
            <Link to={"/dashboard/manage-products"}>Go Manage Product</Link>
          </Commonbtn> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
