import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="card sm:p-4 card-compact w-auto bg-base-300 shadow-xl">
      <div className="card-body">
        <p className="text-sm">{review.des}</p>
        <div className="flex items-center py-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-300 ring-offset-2">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div className="pl-8">
            <h2 className="card-title text-accent">{review.name}</h2>
            <h4 className="text-sm text-accent">{review.location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
