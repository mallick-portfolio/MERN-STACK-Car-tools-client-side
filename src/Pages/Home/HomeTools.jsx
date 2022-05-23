import React, { useEffect, useState } from "react";
import SingleTool from "./SingleTool.jsx";

const HomeTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <section class="bg-base-100 py-28 lg:px-16 mx-auto text-accent">
      <h1 class="text-center uppercase  text-3xl font-bold  leading-none tracking-normal">
        Our Best Tools
      </h1>
      <div class="flex flex-row items-center justify-center py-">
        <span class="h-1 w-24 bg-accent rounded-full mx-2"></span>
        <svg
          class="h-12 fill-current text-accbg-accent "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z" />
        </svg>
        <span class="h-1 w-24 bg-accent rounded-full mx-2"></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {tools.slice(0, 6).map((tool) => (
          <SingleTool key={tool._id} tool={tool} />
        ))}
      </div>
    </section>
  );
};

export default HomeTools;
