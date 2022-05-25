import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init.js";
import useAdmin from "../../hooks/useAdmin.js";
const UserRow = ({ u, i, refetch }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
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
        {!admin && (
          <button
            className="px-4 py-1  sm:py-3 text-sm text-white rounded-md buser-0 bg-success"
            onClick={() => handleAdmin(u?.email)}
          >
            Make Admin
          </button>
        )}
        {admin && (
          <button className="px-4 mx-1 py-1 sm:px-8 sm:py-3 text-sm text-white rounded-md buser-0 bg-neutral">
            Delete
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
