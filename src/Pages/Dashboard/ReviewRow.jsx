import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
const ReviewRow = ({ review, i, refetch }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/reviews/${id}`).then((res) => {
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
          className="px-4 py-1 sm:px-12 sm:py-3 text-sm text-white rounded-md breview-0 bg-neutral"
          onClick={() => handleDelete(review?._id, review?.productId)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReviewRow;
