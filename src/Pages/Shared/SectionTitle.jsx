import { faStarOfDavid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="py-5">
      <h1 className="text-center uppercase text-neutral text-3xl font-bold  leading-none tracking-normal">
        {title}
      </h1>
      <div className="flex flex-row items-center justify-center py-">
        <span className="h-1 w-24 bg-neutral rounded-full mx-2"></span>
        <FontAwesomeIcon
          icon={faStarOfDavid}
          className="h-12 fill-current text-neutral"
        />
        <span className="h-1 w-24 bg-neutral rounded-full mx-2"></span>
      </div>
    </div>
  );
};

export default SectionTitle;
