import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const CommonProfile = ({ title, path }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">{title}</h1>
        <div>
          <button className="px-2 py-1 text-sm text-white rounded-md border-0 bg-neutral">
           <Link to={`${path}`}> Edit</Link>
            <FontAwesomeIcon className="ml-1" icon={faEdit} />
          </button>
        </div>
      </div>
      <div className="divider bg-accent h-1/2"></div>
    </>
  );
};

export default CommonProfile;
