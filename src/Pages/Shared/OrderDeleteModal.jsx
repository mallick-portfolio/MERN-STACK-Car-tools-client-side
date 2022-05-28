import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const OrderDeleteModal = ({ item, refetch, setItem, url }) => {
  const handleDelete = async (id) => {
    await axios.delete(`${url}${id}`, { data: { productid: item?.productId } }).then((res) => {
      console.log(res);
      if (res.data.acknowledged) {
        setItem(null);
        toast("Deleted Successfull");
        refetch();
      }
    });
  };

  return (
    <>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal bg-transparent modal-bottom w-30 sm:modal-middle">
        <div class="modal-box">
          <h3 class="text-3xl mb-2">Are You Sure Want To Delete !</h3>
          <p className="mb-4 text-xl text-red-500">
            <FontAwesomeIcon icon={faWarning} /> After you delete an item, it's
            permanently deleted. Items can't be undeleted.
          </p>
          <div className="flex justify-between items-center">
            <div>
              <button
                onClick={() => handleDelete(item?._id)}
                className="px-3 py-2 text-sm text-white rounded-md border-0 bg-[#ff136f]"
              >
                Confirm
              </button>
            </div>
            <div class="">
              <label
                htmlFor="my-modal-6"
                class="px-4 py-3 text-sm text-white rounded-md border-0 cursor-pointer bg-primary"
              >
                Back
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDeleteModal;
