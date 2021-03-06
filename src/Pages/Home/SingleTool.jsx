import React from "react";
import { Link } from "react-router-dom";
import Commonbtn from "../Shared/Commonbtn.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const SingleTool = ({ tool }) => {
  const { name, image, minQty, des, avilQty, singlePrice, _id } = tool;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="card mx-2 sm:px-4 bg-base-300 shadow-xl text-accent"
    >
      <figure>
        <img className="h-[250px] w-[250px] my-btn" src={image} alt="Shoes" />
      </figure>
      <div className="card-body py-0 pb-6">
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
