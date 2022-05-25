import React from "react";

const ManageOrderRow = ({ product, i }) => {
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{product?.name}</td>
      <td>{product?.singlePrice}</td>
      <td>{product?.avilQty}</td>
      <td>
        <button
          className="input input-bordered text-white rounded-md border-0 bg-primary cursor-pointer btn-sm mx-2"
          // onClick={() => handleDelete(order?._id, order?.productId)}
        >
          Edit
        </button>
        <button
          className="input input-bordered text-white rounded-md border-0 bg-neutral cursor-pointer btn-sm mx-2"
          // onClick={() => handleDelete(order?._id, order?.productId)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageOrderRow;
