import React, { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle.jsx";
import SingleTool from "./SingleTool.jsx";

const HomeTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <section className="bg-base-100 lg:py-20 lg:px-16 mx-auto text-accent">
      <SectionTitle title={"Our Best Tools"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tools.slice(0, 6).map((tool) => (
          <SingleTool key={tool._id} tool={tool} />
        ))}
      </div>
    </section>
  );
};

export default HomeTools;
