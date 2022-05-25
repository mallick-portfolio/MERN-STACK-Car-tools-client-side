import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init.js";
import Loading from "../Shared/Loading.jsx";
import UserRow from "./UserRow.jsx";

const Users = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    isLoading,
    data: users,
    refetch,
  } = useQuery("getUsers", () =>
    fetch(`http://localhost:5000/users/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="overflow-hidden overflow-y-hidden py-4">
      <table className="table table-zebra w-full">
        <thead>
          {users.length > 0 ? (
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          ) : (
            <h2 className="text-2xl">You have 0 order</h2>
          )}
        </thead>
        <tbody>
          {users.map((u, i) => (
            <UserRow refetch={refetch} key={u._id} i={i} u={u} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
