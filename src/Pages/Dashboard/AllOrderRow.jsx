import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const AllOrderRow = ({ i, order, refetch, setItem }) => {
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
        {order?.transactionId ? (
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
              className="input input-bordered text-white rounded-md border-0 bg-neutral cursor-pointer btn-sm mx-2"
            />
          </form>
        ) : (
          <p className="text-neutral text-xl">Unpaid <label
          onClick={() => setItem(order)}
          htmlFor="my-modal-6"
          class="text-white px-3 py-2 rounded-md border-0 btn-warning cursor-pointer btn-sm mx-2"
        >
          <FontAwesomeIcon icon={faTrash} />
        </label></p>
        )}
      </td>
    </tr>
  );
};

export default AllOrderRow;
