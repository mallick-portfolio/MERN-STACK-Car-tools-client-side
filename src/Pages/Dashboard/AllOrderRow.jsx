import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
const AllOrderRow = ({ i, order, refetch }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    axios
      .put(`http://localhost:5000/admin/orders/${order._id}`, {
        status: data.status,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          toast("Status Update SuccessFully");
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{order?.title}</td>
      <td>{order?.price}</td>
      <td>{order?.quantity}</td>
      <td>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select
            {...register("status", {
              value: order?.status,
            })}
            className="select select-sm select-bordered text-accent border-neutral"
          >
            <option value={"Pending"}>Pending</option>
            <option value={"Processing"}>Processing</option>
            <option value={"Deleveried"}>Deleveried</option>
            <option value={"Completed"}>Completed</option>
          </select>
          <input
            type="submit"
            placeholder="Type here"
            class="input input-bordered text-white rounded-md border-0 bg-neutral cursor-pointer btn-sm mx-2"
          />
        </form>
      </td>
    </tr>
  );
};

export default AllOrderRow;
