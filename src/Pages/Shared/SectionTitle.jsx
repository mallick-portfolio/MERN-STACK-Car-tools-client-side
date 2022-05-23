import { faStarOfDavid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="py-5">
      <h1 class="text-center uppercase text-primary text-3xl font-bold  leading-none tracking-normal">
        {title}
      </h1>
      <div class="flex flex-row items-center justify-center py-">
        <span class="h-1 w-24 bg-primary rounded-full mx-2"></span>
        <FontAwesomeIcon
          icon={faStarOfDavid}
          class="h-12 fill-current text-primary"
        />
        <span class="h-1 w-24 bg-primary rounded-full mx-2"></span>
      </div>
    </div>
  );
};

export default SectionTitle;
