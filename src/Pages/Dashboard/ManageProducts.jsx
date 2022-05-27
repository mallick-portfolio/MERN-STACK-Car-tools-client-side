import React, { useState } from "react";
import { useQuery } from "react-query";
import CommonModal from "../Shared/CommonModal.jsx";
import Loading from "../Shared/Loading.jsx";
import ManageOrderRow from "./ManageOrderRow.jsx";

const ManageProducts = () => {
  const url = 'http://localhost:5000/admin/product/'
  const [item, setItem] = useState(null);
  const {
    isLoading,
    data: products,
    refetch,
  } = useQuery("manageProducts", () =>
    fetch(`http://localhost:5000/admin/products`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      return res.json();
    })
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="overflow-x-auto overflow-y-hidden py-4">
      <table className="table table-zebra w-full">
        <thead>
          {products.length > 0 ? (
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          ) : (
            <h2 className="text-2xl">No Order Found</h2>
          )}
        </thead>
        <tbody>
          {products.map((product, i) => (
            <ManageOrderRow
              refetch={refetch}
              key={product._id}
              i={i}
              product={product}
              setItem={setItem}
            />
          ))}
        </tbody>
      </table>
      {item && <CommonModal url={url} setItem={setItem} refetch={refetch} item={item} />}
    </div>
  );
};

export default ManageProducts;
