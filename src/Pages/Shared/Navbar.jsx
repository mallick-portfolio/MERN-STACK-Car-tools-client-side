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
                    Profile
                    <span class="badge">New</span>
                  </a>
                </li>
                <li>
                  <button onClick={() => {
                    setTheme(!theme)
                    localStorage.setItem('theme', JSON.stringify(!theme))
                  }}>
                    {theme ? "Go Dark" : "Go Light"}
                  </button>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </navbar>
  );
};

export default Navbar;
