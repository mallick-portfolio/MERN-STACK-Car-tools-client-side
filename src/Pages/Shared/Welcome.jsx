import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";

const Welcome = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h1 className="text-3xl text-accent font-bold">
        Welcome <span className="text-neutral ">{user?.displayName}</span> To
        Your Dashboard
      </h1>
      <p className="text-xl text-accent p-5">
        In your dashboard you can{" "}
        <span className="text-neutral text-2xl">
          see all details about your order, order placement status, payment
          comfirm details, before payment you can delete your order and you can
          add review about our parts, your review show in our home page, you can
          remove your review. On the other hand in top right side you can see
          your image. After clicking this image you can see some option like
          view profile,my order, add reviews, your all reviews.If you click view
          profile option you can see some extra option like my profile ,
          address, education, job profile, job experience and you can also edit
          your profile status. In future you can see more option in profile
          option. Finally, you can see our best feature light and dark mode in
          your image dropdown section. In your case you can choose any theme
          that you like.
        </span>{" "}
        And finally you can see logout option to logout form your dashboard.{" "}
      </p>
    </div>
  );
};

export default Welcome;
