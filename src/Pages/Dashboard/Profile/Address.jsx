import React from "react";
import CommonProfile from "../../Shared/CommonProfile.jsx";

const Address = () => {
  return (
    <div className="py-4 px-4 text-accent">
      <CommonProfile title={"Address"} path="/profile/address" />
      <div className="sm:flex">
        <div>
          <h4 className="text-xl font-bold text-neutral">Present Address</h4>
         <div>
           
         </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Address;
