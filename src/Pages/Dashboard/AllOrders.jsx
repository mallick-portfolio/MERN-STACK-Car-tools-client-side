import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading.jsx";
import AllOrderRow from "./AllOrderRow.jsx";

const AllOrders = () => {
  const {
    isLoading,
    data: orders,
    refetch,
  } = useQuery("allOrder", () =>
    fetch(`http://localhost:5000/orders`, {
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
    <div className="overflow-x-auto overflow-y-hidden py-4">
      <table className="table table-zebra w-full">
        <thead>
          {orders.length > 0 ? (
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          ) : (
            <h2 className="text-2xl">You have 0 order</h2>
          )}
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <AllOrderRow
              refetch={refetch}
              key={order._id}
              i={i}
              order={order}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;
