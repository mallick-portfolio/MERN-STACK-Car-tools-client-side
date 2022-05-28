import React from "react";
import profile from "../../../assets/images/profile.jpg";
const Skills = () => {
  return (
    <div className="py-4 px-4 text-accent">
      <div className="text-center">
        <div class="avatar">
          <div class="w-36 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
            <img src={profile} alt="" />
          </div>
        </div>
        <h2 className="text-neutral text-4xl">Tamal Mallick</h2>
        <h2 className="text-accent text-xl">tamal.mallick8@gmail.com</h2>
      </div>
      <div className="sm:flex w-full">
        <div className="w-full my-5">
          <div className="w-1/2">
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="my-3">
                  <p>MY Education level</p>
                  <h4 className="sm:text-xl">Bachelor/Honors</h4>
                </div>
              </div>
              <div>
                <p>Exam/Degree Title</p>
                <h4 className="sm:text-xl">Computer Science and Engineering</h4>
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
                  <p>Current Year</p>
                  <h4 className="sm:text-xl">3rd</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="sm:grid grid-cols-1 sm:grid-cols-2 gap-5 w-full bg-base-300">
        <div className=" w-full">
          <h3 className="text-xl">HTML</h3>
          <div class="w-full bg-accent rounded-full">
            <div
              class="bg-neutral text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-l-full"
              style={{ width: "90%" }}
            >
              {" "}
              90%
            </div>
          </div>
        </div>
        <div className=" w-full">
          <h3 className="text-xl">CSS</h3>
          <div class="w-full bg-accent rounded-full">
            <div
              class="bg-neutral text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-l-full"
              style={{ width: "85%" }}
            >
              {" "}
              8%%
            </div>
          </div>
        </div>
        <div className=" w-full">
          <h3 className="text-xl">JavaScript</h3>
          <div class="w-full bg-accent rounded-full">
            <div
              class="bg-neutral text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-l-full"
              style={{ width: "80%" }}
            >
              {" "}
              80%
            </div>
          </div>
        </div>
        <div className=" w-full">
          <h3 className="text-xl">React JS</h3>
          <div class="w-full bg-accent rounded-full">
            <div
              class="bg-neutral text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-l-full"
              style={{ width: "75%" }}
            >
              {" "}
              75%
            </div>
          </div>
        </div>
        <div className=" w-full">
          <h3 className="text-xl">Node JS</h3>
          <div class="w-full bg-accent rounded-full">
            <div
              class="bg-neutral text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-l-full"
              style={{ width: "35%" }}
            >
              {" "}
              35%
            </div>
          </div>
        </div>
        <div className=" w-full">
          <h3 className="text-xl">MongoDb</h3>
          <div class="w-full bg-accent rounded-full">
            <div
              class="bg-neutral text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-l-full"
              style={{ width: "35%" }}
            >
              {" "}
              35%
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-neutral text-2xl mt-5">Some of my project</h4>
        <ul class="menu bg-base-300 w-56 rounded-box">
          <li>
            <a href="/">Takus Cart part Solution</a>
          </li>
          <li>
            <a href="https://warehouse-inventory-95eff.web.app/">
              Ware House Inventory
            </a>
          </li>
          <li>
            <a href="https://tamal11.netlify.app/">Portfolio </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
