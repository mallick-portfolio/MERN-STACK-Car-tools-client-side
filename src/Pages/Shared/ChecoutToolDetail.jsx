import React from "react";
import StarRatings from "react-star-ratings";

const ChecoutToolDetail = ({ tool }) => {
  const { name, image, des, minQty, avilQty, singlePrice, rating } = tool;
  return (
    <div className="basis-1/2  mx-2 my-3 sm:my-0">
      <div className="card rounded-lg w-full bg-base-300 shadow-xl">
        <figure className="px-10 pt-10 ">
          <img src={image} alt="Shoes" className="rounded-lg h-96" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="text-sm">
            <span className="text-3xl">${singlePrice}</span> (Per product price)
          </h2>
          <StarRatings
            starDimension={"20px"}
            starSpacing={"2px"}
            isAggregateRating={true}
            isSelectable={true}
            rating={rating}
            starRatedColor="#ff136f"
            starEmptyColor="#444"
            numberOfStars={5}
            name="rating"
          />
          <div className="flex justify-between items-center">
            <p className=" text-xl">Available order quantity</p>
            <p className="text-2xl">{avilQty}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className=" text-xl">Minimum order quantity</p>
            <p className="text-2xl">{minQty}</p>
          </div>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
};

export default ChecoutToolDetail;
