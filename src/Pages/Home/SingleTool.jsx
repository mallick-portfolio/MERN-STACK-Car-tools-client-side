import React from "react";
import { Link } from "react-router-dom";
import Commonbtn from "../Shared/Commonbtn.jsx";

const SingleTool = ({ tool }) => {
  const { name, image, minQty, des, avilQty, singlePrice, _id } = tool;
  return (
    <div className="card bg-base-300 shadow-xl text-accent">
      <figure>
        <img
          className="sm:h-52 max-w-sm px-5 pt-4 w-screen"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl font-bold">${singlePrice}</p>
        <div className="card-actions py-0 my-0">
          <div>
            <p className="text-sm font-bold">
              Minimum order quantity <span className="font-bold">{minQty}</span>
            </p>
            <p className="text-sm font-bold">
              Available quantity
              <span className="text-xl font-bold">{avilQty}</span>
            </p>
            <p title={des}>{des?.length > 80 ? des.slice(0, 80) : des} ...</p>
          </div>
          <div className="text-center w-full">
            <Link to={`/tool-details/${_id}`}>
              <Commonbtn>Buy Now</Commonbtn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTool;
