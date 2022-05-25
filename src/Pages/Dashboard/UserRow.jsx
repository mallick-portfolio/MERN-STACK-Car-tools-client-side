import React from "react";
import axios from "axios";
const UserRow = ({ user, i, refetch }) => {
  // const handleDelete = async (id, productId) => {
  //   console.log(productId);
  //   await axios
  //     .delete(`http://localhost:5000/users/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         productId: `${productId}`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       refetch();
  //     });
  // };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td>
        <button
          className="px-4 py-1  sm:py-3 text-sm text-white rounded-md buser-0 bg-success"
          // onClick={() => handleDelete(user?._id, user?.productId)}
        >
          Make Admin
        </button>
        <button className="px-4 mx-1 py-1 sm:px-8 sm:py-3 text-sm text-white rounded-md buser-0 bg-neutral">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
