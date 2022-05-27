import React from "react";
import StarRatings from "react-star-ratings";


const ReviewCard = ({ review }) => {

  return (
    <div className="card sm:p-4 card-compact text-accent w-auto bg-base-300 shadow-xl">
      <div className="card-body">
        <p className="text-sm">{review.des}</p>
        <div className="flex items-center py-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-neutral ring-offset-base-300 ring-offset-2">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div className="pl-8">
            <h2 className="card-title text-accent">{review.name}</h2>
            <StarRatings
              starDimension={"20px"}
              starSpacing={"2px"}
              isAggregateRating={true}
              isSelectable={true}
              rating={review.rating}
              starRatedColor="#ff136f"
              starEmptyColor="#444"
              numberOfStars={5}
              name="rating"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
