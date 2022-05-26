import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Commonbtn from "../Shared/Commonbtn.jsx";
import Loading from "../Shared/Loading.jsx";
const EditProduct = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, data: product } = useQuery("repoData", () =>
    fetch(`http://localhost:5000/admin/product/${id}`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    console.log(data);
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    const key = "dabd9e63b17a6bf8336a376ea2178b02";
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${key}`;
    if (image !== undefined) {
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            const image = result.data.url;
            fetch(`http://localhost:5000/admin/product/${id}`, {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ ...data, image, rating: 5 }),
            })
              .then((res) => res.json())
              .then((updated) => {
                console.log(updated);
                if (updated.acknowledged) {
                  toast.success("Product Updated successfully");
                  navigate("/dashboard/manage-products");
                } else {
                  toast.error("Failed to Updated the product");
                }
              });
          }
        });
    } else if (image === undefined) {
      const { image, ...newData } = data;
      fetch(`http://localhost:5000/admin/product/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...newData, image: product.image, rating: 5 }),
      })
        .then((res) => res.json())
        .then((updated) => {
          console.log(updated);
          if (updated.acknowledged) {
            toast.success("Product Updated successfully");
            navigate("/dashboard/manage-products");
          } else {
            toast.error("Failed to Updated the product");
          }
        });
    }
  };
  return (
    <div className="flex my-8 text-accent justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-100 w-full px-8 py-4 rounded-lg"
      >
        <div className="mb-2">
          <p className="text-sm mb-2">Product Title</p>
          <input
            {...register("name", {
              value: product?.name,
              required: true,
            })}
            placeholder="Product Title"
            className="input input-bordered w-full"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <div className="mb-2">
            <p className="text-sm mb-2">Product Price</p>
            <input
              {...register("singlePrice", {
                value: product?.singlePrice,
                required: true,
              })}
              placeholder="Product Price"
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-2">
            <p className="text-sm mb-2">Available Quantity</p>
            <input
              {...register("avilQty", {
                value: product?.avilQty,
                required: true,
              })}
              placeholder="Available Quantity"
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-2">
            <p className="text-sm mb-2">Minimum Quantity</p>
            <input
              {...register("minQty", {
                value: product?.minQty,
              })}
              placeholder="Minimum Quantity"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <textarea
          {...register("des", {
            value: product?.des,
            required: true,
          })}
          rows={4}
          className="textarea w-full textarea-bordered"
          placeholder="Product Description"
        ></textarea>
        <div className="mb-2">
          <p className="text-sm mb-2">Upload Image</p>
          <img className="w-10 h-auto" src={product?.image} alt="" />
          <input {...register("image")} type={"file"} />
        </div>

        <div className="sm:flex justify-between items-center">
          <div>
            <input
              type="submit"
              value="Submit"
              className="px-4 sm:px-12 sm:py-3 text-sm text-white rounded-md border-0 bg-neutral cursor-pointer"
            />
          </div>
          <Commonbtn>
            <Link to={"/dashboard/manage-products"}>Go Manage Product</Link>
          </Commonbtn>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
