import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const CheckOutForm = ({ tool }) => {
  const [user] = useAuthState(auth);
  const { minQty, avilQty, name, _id } = tool;
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    const { avilQty, ...res } = data;
    
    axios
      .post("http://localhost:5000/order", {
        ...res,
        title: name,
        productId: _id,
      })
      .then((res) => {
        if(res.data.acknowledged){
          toast('Order Successfully.')
          navigate('/')
        }
      });
  };

  return (
    <div className="basis-1/2 relative rounded-lg mx-2 bg-base-300">
      <div className="md:flex ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full  p-4 px-5 text-accent py-5"
        >
          <div className="flex flex-row">
            <h2 className="text-3xl font-semibold">Shipping & Billing</h2>
          </div>
          <span>Customer Information</span>
          <span>Shipping Address</span>
          <input
            className="input input-bordered w-full text-xl  my-1"
            disabled
            value={user?.displayName}
          />
          <input
            className="input input-bordered w-full text-xl  my-1"
            disabled
            {...register("email", { value: user?.email })}
          />
          <div>
            <label>
              <span className="text-xl">Available quantity</span>
            </label>
            <input
              readOnly
              defaultValue={avilQty}
              {...register("avilQty", {
                required: true,
              })}
              className="input input-bordered w-full text-xl  my-1"
              type={"number"}
            />
          </div>
          <div>
            <label>
              <span className="text-xl">
                Choose your order quantity{" "}
                <span className="text-red">(min{minQty})</span>
              </span>
            </label>
            <input
            type={'number'}
              {...register("quantity", {
                required: "Your selling quantity must be required",
                validate: (val) => {
                  if (val >= avilQty) {
                    return "Order quantity can not be higher than the available quantity";
                  } else if (val < minQty) {
                    return "Order quantity can not be Lower than the available quantity";
                  }
                },
              })}
              className="input input-bordered w-full text-xl  my-1"
            />

            {errors.quantity && (
              <p className="text-red-500">{errors.quantity.message}</p>
            )}
          </div>

          <input
            className="input input-bordered w-full text-xl  my-1"
            type={"text"}
            {...register("companyName", {
              defaultValue: "",
            })}
            placeholder="Company name(Optional)"
          />
          <input
            className="input input-bordered w-full text-xl  my-1"
            type={"text"}
            {...register("country", {
              defaultValue: "",
            })}
            placeholder="Country"
          />
          <input
            className="input input-bordered w-full text-xl  my-1"
            type={"text"}
            {...register("address", {
              defaultValue: "",
            })}
            placeholder="Address"
          />
          <input
            className="input input-bordered w-full text-xl  my-1"
            type={"text"}
            placeholder="Town/City"
            {...register("city", {
              defaultValue: "",
            })}
          />
          <input
            className="input input-bordered w-full text-xl  my-1"
            type={"text"}
            placeholder="Contact/Phone Number"
            {...register("phone", {
              defaultValue: "",
              required: "Phone number required for Contact",
            })}
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}

          <div className=" absolute bottom-10 right-5">
            <input
              type="submit"
              disabled={!watch("quantity")}
              value="Submit"
              className={`px-4 py-1 sm:px-12 sm:py-3 text-sm text-white rounded-md border-0  cursor-pointer ${
                !watch("quantity")
                  ? "bg-slate-400 cursor-not-allowed"
                  : "bg-neutral"
              }`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOutForm;
