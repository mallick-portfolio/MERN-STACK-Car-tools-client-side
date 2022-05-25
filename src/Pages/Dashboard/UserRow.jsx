import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";
const UserRow = ({ u, i, refetch }) => {
  const handleAdmin = (email) => {
    console.log(email);
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("Admin Create Successfully");
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{u?.name}</td>
      <td>{u?.email}</td>
      <td>
        {u?.role !== 'admin' && (
          <button
            className="px-4 py-1  sm:py-3 text-sm text-white rounded-md buser-0 bg-success"
            onClick={() => handleAdmin(u?.email)}
          >
            Make Admin
          </button>
        )}
        {u?.role !== 'admin' && (
          <button className="px-4 mx-1 py-1 sm:px-8 sm:py-3 text-sm text-white rounded-md buser-0 bg-neutral">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
