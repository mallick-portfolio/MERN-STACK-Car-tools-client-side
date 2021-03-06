import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init.js";
import { signOut } from "firebase/auth";
import Commonbtn from "./Commonbtn.jsx";
import useAdmin from "../../hooks/useAdmin.js";
import Loading from "./Loading.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faDashboard,
  faList,
  faListAlt,
  faPlus,
  faSignIn,
  faSignOut,
  faStar,
  faTasks,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
AOS.init();
const Navbar = ({ setTheme, theme }) => {
  const imageUrl = "https://i.ibb.co/0McRM9d/user.png";
  const [showProfile, setShowProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const logout = () => {
    signOut(auth);
  };
  const [user, loading] = useAuthState(auth);

  const [admin] = useAdmin(user);
  if (loading) {
    return <Loading />;
  }
  const menus = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/shop"}>Shop</NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to={"/login"}><FontAwesomeIcon className="text-xl" icon={faSignIn} />Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <section
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="navbar bg-base-100 lg:px-12 md:px-6 px-2 mx-auto"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label
            onClick={() => setShowMenu(!showMenu)}
            tabIndex="0"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${
              showMenu ? "block" : "hidden"
            }`}
          >
            {menus}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Takus
        </Link>
      </div>
      <div
        className={`${user ? "navbar-center" : "navbar-end"} hidden lg:flex`}
      >
        <ul className="menu menu-horizontal p-0">{menus}</ul>
      </div>
      {user && (
        <div className="navbar-end">
          <div>
            <label
              htmlFor="my-drawer-2"
              className="btn bg-primary btn-sm lg:hidden"
            >
              Profile
            </label>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  className="rounded-full online"
                  onClick={() => setShowProfile(!showProfile)}
                  src={user.photoURL ? user?.photoURL : imageUrl}
                  alt=""
                />
              </div>
            </label>
            <div
              className={`mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 rounded-box  w-52 md:w-72 ${
                showProfile ? "block" : "hidden"
              }`}
            >
              <div className="mb-4">
                <div className="text-center">
                  <div className="avatar">
                    <div className="w-16 online">
                      <img
                        src={user.photoURL ? user?.photoURL : imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="text-xl my-2">{user?.displayName}</p>
                  <Commonbtn>
                    <Link to={"/profile"}>View Profile</Link>
                  </Commonbtn>
                </div>
              </div>
              <ul tabIndex="0">
                <li>
                  <Link to={"/dashboard"}>
                    <FontAwesomeIcon className="text-xl" icon={faDashboard} />
                    Dashboard
                  </Link>
                </li>
                {!admin && (
                  <>
                    <li>
                      <Link to={"/dashboard/my-orders"}><FontAwesomeIcon className="text-xl" icon={faListAlt} />{" "} My Orders</Link>
                    </li>
                    <li>
                      <Link to={"/dashboard/add-review"}>
                        <FontAwesomeIcon className="text-xl" icon={faStar} />{" "}
                        Add Review
                      </Link>
                    </li>
                    <li>
                      <Link to={"/dashboard/my-reviews"}>
                        <FontAwesomeIcon className="text-xl" icon={faComment} />{" "}
                        My Reviews
                      </Link>
                    </li>
                  </>
                )}
                {admin && (
                  <>
                    <li>
                      <Link to={"/dashboard/users"}>
                        <FontAwesomeIcon className="text-xl" icon={faUser} />
                        Users
                      </Link>
                    </li>
                    <li>
                      <Link to={"/dashboard/orders"}>
                        <FontAwesomeIcon className="text-xl" icon={faList} />
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link to={"/dashboard/add-product"}>
                        <FontAwesomeIcon className="text-xl" icon={faPlus} />
                        Add Product
                      </Link>
                    </li>
                    <li>
                      <Link to={"/dashboard/manage-products"}>
                        <FontAwesomeIcon className="text-xl" icon={faTasks} />{" "}
                        Manage Products
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <label className="swap swap-rotate flex justify-start items-center">
                    {theme ? "Go to Dark" : "Go to Light"}
                    <input
                      type="checkbox"
                      onChange={() => {
                        setTheme(!theme);
                        localStorage.setItem("theme", JSON.stringify(!theme));
                      }}
                    />
                    <svg
                      className="swap-on fill-current w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    <svg
                      className="swap-off fill-current w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </li>
                <li>
                  <button onClick={logout}>
                    {" "}
                    <FontAwesomeIcon
                      className="text-xl"
                      icon={faSignOut}
                    />{" "}
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
