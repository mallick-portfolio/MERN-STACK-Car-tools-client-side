import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init.js";
import Loading from "../Shared/Loading.jsx";
import ReviewRow from "./ReviewRow.jsx";
const MyReviews = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    isLoading,
    data: rating,
    refetch,
  } = useQuery("getRating", () =>
    fetch(`http://localhost:5000/reviews/${user?.email}`, {
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
console.log(rating)
  return (
    <div className="overflow-x-auto overflow-y-hidden py-4">
      <table className="table table-zebra w-full">
        
        <thead>
          {rating.length > 0 ? (
            <tr>
              <th>ID</th>
              <th>Comment</th>
              <th>Email</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          ) : (
            <h2 className="text-2xl">You have given 0 products review</h2>
          )}
        </thead>
        <tbody>
          {rating.map((review, i) => (
            <ReviewRow
              refetch={refetch}
              key={review._id}
              i={i}
              review={review}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
