import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const ManageOrderRow = ({ product, i, refetch }) => {
  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/admin/product/${id}`, {
        method: "DELETE",
      })
      .then((res) => {
        if (res.data.acknowledged) {
          toast("Deleted Successfull");
          refetch();
        }
      });
  };

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
        <button
          onClick={() => handleDelete(product._id)}
          className="input input-bordered text-white rounded-md border-0 bg-neutral cursor-pointer btn-sm mx-2"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default ManageOrderRow;
