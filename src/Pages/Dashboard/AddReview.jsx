import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";
import auth from "../../firebase.init.js";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const [rating, setRating] = useState(5);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    axios
      .post("https://car-parts98789.herokuapp.com/reviews", {
        des: data.des,
        img: user?.photoURL,
        name: user?.displayName,
        email: user?.email,
        rating,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          toast("Review Successfully.");
          navigate("/dashboard/my-reviews");
        }
      });
  };
  return (
    <div className="flex my-10 justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-2/3 bg-base-100 px-4 py-4 rounded-lg"
      >
        <p className="text-xl mb-4">Give your over all rating</p>
        <textarea
          {...register("des", {
            maxLength: {
              value: 250,
              message: "Your comment maximum length is 250",
            },
            minLength: {
              value: 80,
              message: "Your comment minimum length is 250",
            },
          })}
          name="des"
          required
          rows={8}
          className="textarea w-full textarea-bordered"
          placeholder="Comment your Review (character between 80 to 250)"
        ></textarea>
        {errors.des && <p className="text-red-500">{errors.des?.message}</p>}
        <div className="my-2 flex flex-col">
          <StarRatings
            starDimension={"20px"}
            starSpacing={"2px"}
            isAggregateRating={true}
            isSelectable={true}
            changeRating={(e) => setRating(e)}
            rating={rating}
            starRatedColor="#ff136f"
            starEmptyColor="#444"
            numberOfStars={5}
            name="rating"
          />
          <label className="text-xl">Select Your Rating</label>
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            className="px-4 py-1 sm:px-12 sm:py-3 text-sm text-white rounded-md border-0 bg-neutral cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddReview;
