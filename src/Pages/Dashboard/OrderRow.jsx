import React from "react";
import axios from "axios";
const OrderRow = ({ order, i, refetch }) => {
  const handleDelete = async (id, productId) => {
    console.log(productId);
    await axios
      .delete(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
        headers: {
          productId: `${productId}`,
        },
      })
      .then((res) => {
        console.log(res);
        refetch();
      });
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{order?.title}</td>
      <td>{order?.price}</td>
      <td>{order?.quantity}</td>
      <td>{order?.status}</td>
      <td>
        <button
          className="px-4 py-1 sm:px-12 sm:py-3 text-sm text-white rounded-md border-0 bg-neutral"
          onClick={() => handleDelete(order?._id, order?.productId)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
