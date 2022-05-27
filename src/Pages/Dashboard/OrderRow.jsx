import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const OrderRow = ({ order, i, refetch }) => {
  console.log(order);
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
        {order.transactionId ? (
          <p className="text-neutral">Completed</p>
        ) : (
          <button className="btn btn-primary btn-sm">
            <Link to={`/dashboard/payment/${order._id}`}>Pay</Link>
          </button>
        )}
      </td>
      <td>
        {!order.transactionId ? (
          <button
            className="px-2 py-1 text-sm text-white rounded-md buser-0 bg-success"
            onClick={() => handleDelete(order?._id, order?.productId)}
          >
             <FontAwesomeIcon icon={faTrash} />
          </button>
        ) : (
          <button
            className="px-2 py-1 text-sm text-white rounded-md buser-0 bg-neutral"
            onClick={() => handleDelete(order?._id, order?.productId)}
          >
             <FontAwesomeIcon icon={faBan} />
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
