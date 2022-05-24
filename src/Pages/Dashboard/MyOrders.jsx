import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init.js";
import Loading from "../Shared/Loading.jsx";
const MyOrders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery("repoData", () =>
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
  return (
    <div>
      {console.log(data)}
      <h1>mY Orders</h1>
    </div>
  );
};

export default MyOrders;
