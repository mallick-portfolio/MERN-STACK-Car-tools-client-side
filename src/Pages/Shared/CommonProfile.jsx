import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CommonProfile = ({ title }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">{title}</h1>
        <div>
          <button className="px-2 py-1 text-sm text-white rounded-md border-0 bg-neutral">
            Edit
            <FontAwesomeIcon className="ml-1" icon={faEdit} />
          </button>
        </div>
      </div>
      <div class="divider bg-accent h-1/2"></div>
    </>
  );
};

export default CommonProfile;
