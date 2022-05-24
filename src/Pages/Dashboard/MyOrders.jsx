import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init.js";
import Commonbtn from "../Shared/Commonbtn.jsx";
import Loading from "../Shared/Loading.jsx";
const MyOrders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { isLoading, data: orders } = useQuery("getOrder", () =>
    fetch(`http://localhost:5000/orders/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Loading />;
  }
  const handleDelete = (id) => {
    
  }
  
  return (
    <div className="overflow-hidden overflow-y-hidden py-4">
      <table className="table table-zebra w-full">
        <thead>
          {orders.length > 0 ? (
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          ) : (
            <h2 className="text-2xl">You have no order</h2>
          )}
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={order._id}>
              <th>{i + 1}</th>
              <td>{order?.title}</td>
              <td>{order?.price}</td>
              <td>{order?.quantity}</td>
              <td>
                <Commonbtn className="btn-sm">Delete</Commonbtn>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
