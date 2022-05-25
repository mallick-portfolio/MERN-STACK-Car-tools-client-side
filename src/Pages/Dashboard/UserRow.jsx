import React from "react";
import { toast } from "react-toastify";
const UserRow = ({ user, i, refetch }) => {
  const handleAdmin = (email) => {
    console.log(email);
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>{
        if(data.acknowledged){
          toast('Admin Create Successfully')
          refetch()
        }
      });
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td>
        <button
          className="px-4 py-1  sm:py-3 text-sm text-white rounded-md buser-0 bg-success"
          onClick={() => handleAdmin(user?.email)}
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
