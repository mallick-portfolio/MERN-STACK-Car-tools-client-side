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
import useToken from "../../hooks/useToken.js";
import Loading from "../Shared/Loading.jsx";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  let location = useLocation();

  const [token] = useToken(user || guser);
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
      toast("Login Successfully");
    }
  }, [from, navigate, token]);
  useEffect(() => {
    if (error || gerror) {
      toast("Your email or passowrd is not correct. Please try again");
      return navigate("/login");
    }
  }, [error, gerror, navigate]);
  if (loading || sending || gloading) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="min-h-screen text-accent flex justify-center items-center">
      <div className="lg:w-1/3 px-4 py-6 rounded-md shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center text-2xl mb-3">Login</h3>
          <div className="mb-2">
            <p className="label-text mb-2">Email</p>
            <input
              type="email"
              {...register("email", {
                required: "Please enter your email address",
              })}
              placeholder="email"
              className="input input-bordered w-full max-w-sm"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>
          <div className="mb-2">
            <p className="label-text mb-2">Password</p>
            <input
              type="password"
              {...register("password", {
                required: "Your Password Is Required",
              })}
              placeholder="Password"
              className="input input-bordered w-full max-w-sm"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <input
            onClick={async () => {
              const email = getValues("email");
              await sendPasswordResetEmail(email);
            }}
            type={"submit"}
            value="Forgot Password ?"
            className="text-sm cursor-pointer text-accent my-4"
          />

          <div className="mb-2">
            <input
              type="submit"
              value={"Submit"}
              className="btn-primary btn w-full  border-0"
            />
          </div>
          <div className="mb-2 text-center">
            <p>
              New to Village Garden?{" "}
              <Link to={"/signup"} className="text-neutral cursor-pointer">
                Register
              </Link>
            </p>
          </div>
          <div className="divider">OR</div>
        </form>
        <div>
          <button
            onClick={() => signInWithGoogle()}
            className="py-3 text-sm text-white rounded-md border-0 bg-neutral w-full"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
