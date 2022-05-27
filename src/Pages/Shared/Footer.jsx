import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Footer = () => {
  return (
    <footer data-aos="fade-up"
    data-aos-duration="2000">
      <div className="footer p-10 px-16 mx-auto bg-base-200 text-base-content">
        <div>
          <img className="w-32 animate-spin" src={logo} alt="" />
          <p>
            Takus Industries Ltd.
            <br />
            Providing reliable car parts
          </p>
        </div>
        <div>
          <span className="footer-title">Menu</span>
          <Link to={"/"} className="link link-hover">Home</Link>
          <Link to={"/shop"} className="link link-hover">Shop</Link>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact Us</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="footer p-10 px-16 mx-auto bg-base-300 text-base-content">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2022 - All right reserved Tamal Mallick</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a  href="https://mail.google.com/tamal.mallick8@gmail.com">
            <FontAwesomeIcon className="text-2xl" icon={faEnvelope} />
          </a>
          <Link to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>
          <a href="https://www.facebook.com/TamalMallick11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
