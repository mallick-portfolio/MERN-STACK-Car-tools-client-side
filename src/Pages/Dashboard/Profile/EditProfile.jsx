import React from "react";
import CommonProfile from "../../Shared/CommonProfile.jsx";
import userImg from "../../../assets/images/user.png";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading.jsx";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isLoading, data: updateProfile } = useQuery("updateProfile", () =>
    fetch(`http://localhost:5000/profile/users/${id}`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    console.log(data);
    await axios
      .put(`http://localhost:5000/profile/user/${id}`, data)
      .then((res) => {
        if (res.data.acknowledged) {
          toast("Updated Successfull");
          navigate("/profile");
        }
      });
  };
  return (
    <div className="py-4 px-4 text-accent">
      <CommonProfile
        title="My Profile"
        path={`/profile/edit-profile/${id}`}
      />

      <div className="sm:flex w-full ">
        <div className="w-40 text-center">
          <div className="avatar">
            <div className="w-20">
              <img
                src={updateProfile.image ? updateProfile.image : userImg}
                alt=""
                className="rounded-full"
              />
            </div>
          </div>
          {/* <div>
            <button className="px-4 py-2 my-2 sm:text-xl text-white rounded-full border-0 bg-neutral">
              Upload image
            </button>
          </div> */}
          <div>
            <h3 className="sm:text-xl font-bold">{updateProfile?.name}</h3>
          </div>
        </div>
        <div className="sm:pl-5 w-full">
          <div className="flex my-8 text-accent justify-center items-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full sm:px-8 sm:py-4 px-2 py-2 rounded-lg"
            >
              <div className="mb-1">
                <p className="sm:text-xl mb-1">Full name</p>
                <input
                  {...register("name", {
                    value: updateProfile?.name,
                  })}
                  placeholder="Full name"
                  className="input rounded-full input-bordered sm:text-xl w-full"
                />
              </div>
              <div className="mb-1">
                <p className="sm:text-xl mb-1">
                  Email Address
                </p>
                <input
                  readOnly
                  {...register("email", {
                    value: updateProfile?.email,
                  })}
                  placeholder="Email Address"
                  className="input rounded-full input-bordered sm:text-xl w-full"
                />
              </div>
              <div className="mb-1">
                <p className="sm:text-xl mb-1">Phone</p>
                <input
                  {...register("phone", {
                    value: updateProfile?.phone,
                    required: true,
                    maxLength: {
                      value: 11,
                      message: "Must be 11 number",
                    },
                    minLength: {
                      value: 11,
                      message: "Must be 11 number",
                    },
                  })}
                  placeholder="Phone Number"
                  className="input rounded-full input-bordered sm:text-xl w-full"
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone?.message}</p>
                )}
              </div>

              <div className="sm:flex justify-between items-center">
                <div>
                  <input
                    type="submit"
                    value="Save Change"
                    className="px-4 py-1 sm:px-8 sm:py-2 sm:text-xl text-white rounded-full mt-4 border-0 bg-neutral cursor-pointer"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
