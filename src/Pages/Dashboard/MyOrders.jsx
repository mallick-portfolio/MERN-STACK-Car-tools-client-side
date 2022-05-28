import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init.js";
import Loading from "../Shared/Loading.jsx";
import OrderDeleteModal from "../Shared/OrderDeleteModal.jsx";
import OrderRow from "./OrderRow.jsx";
const MyOrders = () => {
  const url = "https://car-parts98789.herokuapp.com/orders/";
  const [item, setItem] = useState(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    isLoading,
    data: orders,
    refetch,
  } = useQuery("getOrder", () =>
    fetch(`https://car-parts98789.herokuapp.com/orders/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto overflow-y-hidden py-4">
      <table className="table table-zebra w-full">
        <thead>
          {orders.length > 0 ? (
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          ) : (
            <h2 className="text-2xl">You have 0 order</h2>
          )}
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <OrderRow
              setItem={setItem}
              refetch={refetch}
              key={order._id}
              i={i}
              order={order}
            />
          ))}
        </tbody>
      </table>
      {item && (
        <OrderDeleteModal
          url={url}
          item={item}
          setItem={setItem}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default MyOrders;
