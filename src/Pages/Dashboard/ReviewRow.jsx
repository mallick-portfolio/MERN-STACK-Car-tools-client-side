import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ReviewRow = ({ review, i, refetch }) => {
  const handleDelete = async (id) => {
    await axios.delete(`https://car-parts98789.herokuapp.com/reviews/${id}`).then((res) => {
      if (res.data) {
        toast("Delete Successfully");
      }
      refetch();
    });
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        {review?.des.length > 25 ? review?.des.slice(0, 25) : review?.des}...
      </td>
      <td>{review?.email}</td>
      <td>{review?.rating}</td>
      <td>
        <button
          className="px-2 py-1 text-sm text-white rounded-md breview-0 bg-neutral"
          onClick={() => handleDelete(review?._id, review?.productId)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default ReviewRow;
