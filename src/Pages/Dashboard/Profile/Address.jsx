import React from "react";
import CommonProfile from "../../Shared/CommonProfile.jsx";

const Address = () => {
  return (
    <div className="py-4 px-4 text-accent">
      <CommonProfile title={"Address"} path="/profile/address" />
      <div className="sm:flex w-full">
        <div className="w-full my-5">
          <h4 className="text-xl font-bold text-neutral">Present Address</h4>
          <div className="w-1/2">
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="my-3">
                  <p>Your Country</p>
                  <h4 className="text-xl">Bangladesh</h4>
                </div>
                <div>
                  <p>District</p>
                  <h4 className="text-xl">Jhenaidah</h4>
                </div>
              </div>
              <div>
                <div>
                  <p>Street Address</p>
                  <h4 className="text-xl">Paglakanai, Sadar Jhenaidah</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-5">
          <h4 className="text-xl font-bold text-neutral">Permanent Address</h4>
          <div className="w-1/2">
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="my-3">
                  <p>Your Country</p>
                  <h4 className="text-xl">Bangladesh</h4>
                </div>
                <div>
                  <p>District</p>
                  <h4 className="text-xl">Jhenaidah</h4>
                </div>
              </div>
              <div>
                <div>
                  <p>Street Address</p>
                  <h4 className="text-xl">Paglakanai, Sadar Jhenaidah</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Address;
