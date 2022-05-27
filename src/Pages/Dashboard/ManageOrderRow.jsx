import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
const ManageOrderRow = ({ product, i, refetch, setItem }) => {
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <div class="mask mask-squircle w-12 h-12">
          <img src={product.image} alt="Avatar Tailwind CSS Component" />
        </div>
      </td>
      <td>{product?.name}</td>
      <td>{product?.singlePrice}</td>
      <td>{product?.avilQty}</td>
      <td>
        <button className="input input-bordered text-white rounded-md border-0 bg-primary cursor-pointer btn-sm mx-2">
          <Link to={`/dashboard/edit-product/${product._id}`}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
        </button>

        <label
          onClick={() => setItem(product)}
          htmlFor="my-modal-6"
          class="text-white px-3 py-2 rounded-md border-0 btn-warning cursor-pointer btn-sm mx-2"
        >
          <FontAwesomeIcon icon={faTrash} />
        </label>
      </td>
    </tr>
  );
};

export default ManageOrderRow;
