import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const OrderRow = ({ order, i, refetch, setItem }) => {
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        {order?.title.length > 25 ? (
          <span>{order?.title.slice(0, 25)} ...</span>
        ) : (
          order?.title
        )}
        ...
      </td>
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
          <label
            onClick={() => setItem(order)}
            htmlFor="my-modal-6"
            class="text-white px-3 py-2 rounded-md border-0 btn-warning cursor-pointer btn-sm"
          >
            <FontAwesomeIcon icon={faTrash} />
          </label>
        ) : (
          <button className="px-2 py-1 text-sm text-white rounded-md buser-0 bg-neutral">
            <FontAwesomeIcon icon={faBan} />
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
