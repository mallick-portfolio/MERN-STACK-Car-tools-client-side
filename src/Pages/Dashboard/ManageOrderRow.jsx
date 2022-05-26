import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const ManageOrderRow = ({ product, i }) => {


  return (
    <tr>
      <th>{i + 1}</th>
      <td>{product?.name}</td>
      <td>{product?.singlePrice}</td>
      <td>{product?.avilQty}</td>
      <td>
        <button className="input input-bordered text-white rounded-md border-0 bg-primary cursor-pointer btn-sm mx-2">
          <Link to={`/dashboard/edit-product/${product._id}`}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
        </button>
        <button className="input input-bordered text-white rounded-md border-0 bg-neutral cursor-pointer btn-sm mx-2">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default ManageOrderRow;
