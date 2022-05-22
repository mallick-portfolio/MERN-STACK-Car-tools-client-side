import React, { useEffect } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init.js";
import Loading from "../Shared/Loading.jsx";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, forgetError] =
    useSendPasswordResetEmail(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (error || gerror) {
      toast("Your Login Failed. Please try again");
      return navigate("/login");
    }
  }, [error, gerror, navigate]);



  useEffect(() => {
    if (user || guser) {
      toast("Login Successfully");
      navigate(from, { replace: true });
    }
  }, [from, guser, navigate, user]);
  if (loading || sending || gloading) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div class="max-w-md mx-auto bg-white shadow-2xl rounded my-8">
      <div class="text-center text-gray-600 py-4">Sign in with</div>
      <div class="flex justify-center mb-10">
        <button class="flex items-center bg-gray-100 shadow-md border border-gray-200 rounded px-4 py-2 mr-2">
          <svg
            class="fill-current text-gray-600 w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z" />
          </svg>
          <button onClick={() => signInWithGoogle()} class="text-secondary">
            Google
          </button>
        </button>
      </div>
      <div class="bg-gray-100 pt-8 pb-16">
        <div class="text-center text-gray-600 mb-6">
          Or sign in with Email & Password
        </div>
        <form onSubmit={handleSubmit(onSubmit)} class="w-4/5 mx-auto">
          <div className="mb-2">
            <div class="flex items-center bg-white rounded shadow-md ">
              <span class="px-3">
                <svg
                  class="fill-current text-gray-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
                </svg>
              </span>
              <input
                class="w-full h-12 focus:outline-none"
                {...register("email", {
                  required: "Please enter your email address",
                })}
                placeholder="Email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>
          <div className="mb-2">
            <div class="flex items-center bg-white rounded shadow-md ">
              <span class="px-3">
                <svg
                  class="fill-current text-gray-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
              </span>
              <input
                class="w-full h-12 focus:outline-none"
                type="password"
                {...register("password", {
                  required: "Your Password Is Required",
                })}
                placeholder="Password"
              />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <div class="mb-4 flex justify-between items-center">
            <div>
              <input
                onClick={async () => {
                  const email = getValues("email");
                  if(email){
                    await sendPasswordResetEmail(email);
                    toast('Sent in your email address')
                  }else{
                    toast('Please give your email first')
                  }
                }}
                type={"submit"}
                value="Forgot Password ?"
                className="text-secondary cursor-pointer"
              />
            </div>
            <Link className="text-secondary" to={"/signup"}>
              Create new Account
            </Link>
          </div>
          <button class="bg-secondary block mx-auto text-white text-sm uppercase rounded shadow-md px-6 py-2">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
