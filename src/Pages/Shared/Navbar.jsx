import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init.js";
import { signOut } from "firebase/auth";
import userImg from "../../assets/images/user.jpg";
const Navbar = ({ setTheme, theme }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const logout = () => {
    signOut(auth);
  };
  const [user] = useAuthState(auth);

  const menus = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>About</a>
      </li>
      {!user && (
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <navbar class="navbar bg-base-100 lg:px-12 md:px-6 px-2 mx-auto">
      <div class="navbar-start">
        <div class="dropdown">
          <label
            onClick={() => setShowMenu(!showMenu)}
            tabindex="0"
            class="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${
              showMenu ? "block" : "hidden"
            }`}
          >
            {menus}
          </ul>
        </div>
        <Link to={"/"} class="btn btn-ghost normal-case text-xl">
          GHome
        </Link>
      </div>
      <div class={`${user ? "navbar-center" : "navbar-end"} hidden lg:flex`}>
        <ul class="menu menu-horizontal p-0">{menus}</ul>
      </div>
      {user && (
        <div class="navbar-end">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img
                  onClick={() => setShowProfile(!showProfile)}
                  src={user ? user?.photoURL : userImg}
                  alt=""
                />
              </div>
            </label>
            <div
              class={`mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box  w-52 md:w-72 ${
                showProfile ? "block" : "hidden"
              }`}
            >
              <div className="">
                <div className="text-center">
                  <div class="avatar">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user ? user?.photoURL : userImg} alt="" />
                    </div>
                  </div>
                  <p className="text-xl my-2">{user?.displayName}</p>
                </div>
              </div>
              <ul tabindex="0">
                <li>
                  <a class="justify-between">
                    Dashboard
                    <span class="badge">New</span>
                  </a>
                </li>
                <li>
                  <label class="swap swap-rotate flex justify-start items-center">
                    {theme ? "Go to Dark" : "Go to Light"}
                    <input
                      type="checkbox"
                      onChange={() => {
                        setTheme(!theme);
                        localStorage.setItem("theme", JSON.stringify(!theme));
                      }}
                    />
                    <svg
                      class="swap-on fill-current w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    <svg
                      class="swap-off fill-current w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </navbar>
  );
};

export default Navbar;
