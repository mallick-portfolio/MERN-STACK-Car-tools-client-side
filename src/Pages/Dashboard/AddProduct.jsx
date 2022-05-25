import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AddProduct = () => {
  const navigate = useNavigate()
  const key = "dabd9e63b17a6bf8336a376ea2178b02";
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = async (data, e) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${key}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          fetch("http://localhost:5000/admin/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ ...data, image, rating: 5 }),
          })
            .then((res) => res.json())
            .then((added) => {
              if (added.insertedId) {
                toast.success("Product added successfully");
                navigate('/dashboard/manage-products')
              } else {
                toast.error("Failed to add the product");
              }
            });
        }
      });
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
                required: true,
              })}
              placeholder="Minimum Quantity"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <textarea
          {...register("des", {
            required: true,
          })}
          rows={4}
          className="textarea w-full textarea-bordered"
          placeholder="Comment your Review (character between 80 to 250)"
        ></textarea>
        <div className="mb-2">
          <p className="text-sm mb-2">Upload Image</p>
          <input
            {...register("image", {
              required: true,
            })}
            type={"file"}
            placeholder="Product Title"
          />
        </div>

        <div>
          <input
            type="submit"
            value="Submit"
            className="px-4 sm:px-12 sm:py-3 text-sm text-white rounded-md border-0 bg-neutral cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
