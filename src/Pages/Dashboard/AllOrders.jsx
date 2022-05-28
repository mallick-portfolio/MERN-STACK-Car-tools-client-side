import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading.jsx";
import OrderDeleteModal from "../Shared/OrderDeleteModal.jsx";
import AllOrderRow from "./AllOrderRow.jsx";

const AllOrders = () => {
  const url = "https://car-parts98789.herokuapp.com/admin/orders/";
  const [item, setItem] = useState(null);
  const {
    isLoading,
    data: orders,
    refetch,
  } = useQuery("allOrder", () =>
    fetch(`https://car-parts98789.herokuapp.com/orders`, {
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
            <h2 className="text-2xl">No Order Found</h2>
          )}
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <AllOrderRow
              refetch={refetch}
              key={order._id}
              i={i}
              order={order}
              setItem={setItem}
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

export default AllOrders;
