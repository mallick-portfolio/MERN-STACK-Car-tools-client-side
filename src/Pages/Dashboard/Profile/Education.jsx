import React from "react";
import CommonProfile from "../../Shared/CommonProfile.jsx";

const Education = () => {
  return (
    <div className="py-4 px-4 text-accent">
      <CommonProfile title={"Education"} path="/profile/address" />
      <div className="sm:flex w-full">
        <div className="w-full my-5">
          <div className="w-1/2">
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="my-3">
                  <p>Your Education level</p>
                  <h4 className="sm:text-xl">Bachelor/Honors</h4>
                </div>
              </div>
              <div>
                <div>
                  <p>Exam/Degree Title</p>
                  <h4 className="sm:text-xl">
                    Computer Science and Engineering
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-5">
          <div className="w-1/2">
            <div className="w-full">
              <div className="my-3">
                <p>Institution Name</p>
                <h4 className="sm:text-xl">Islamic University, Bangladesh</h4>
              </div>
              <div>
                <div>
                  <p>Approximate Passing year</p>
                  <h4 className="sm:text-xl">2022</h4>
                </div>
                <div>
                  <p>Current Year</p>
                  <h4 className="sm:text-xl">3rd</h4>
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

export default Education;
