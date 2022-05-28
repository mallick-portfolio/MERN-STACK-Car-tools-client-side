import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm.jsx";
const stripePromise = loadStripe(
  "pk_test_51L3c3eI0mpCE96MIkO2XBdHSdBXYu5ts6AN7R1tTwfoHaY7Ihp65T8dv9b5plKvA4gr8AZ1rzBx0WVlOBZwKPhA7001GSvQPNH"
);
const Payment = () => {
  const { id } = useParams();
  const { isLoading, data: product } = useQuery("orderPayment", () =>
    fetch(`http://localhost:5000/orders/payment/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      return res.json();
    })
  );
  if (isLoading) {
    return <Loading />;
  }


  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="">
        <div className="card w-96 mb-3 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="card-title">
              <div>
                Pay for <span className="text-neutral"> {product?.title}</span>{" "}
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div>
                <h4 className="text-xl">Price</h4>
              </div>
              <div>
                <h3 className="text-xl font-bold">${product?.price}</h3>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div>
                <h4 className="text-xl">Quantity</h4>
              </div>
              <div>
                <h3 className="text-xl font-bold">{product?.quantity}</h3>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div>
                <h4 className="text-xl">Total Cost</h4>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  ${product?.quantity * product?.price}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm product={product} totalPrice={product?.quantity * product?.price} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
