import React from "react";
import SectionTitle from "../Shared/SectionTitle.jsx";
import SingleTool from "./SingleTool.jsx";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading.jsx";
const HomeTools = () => {
  const { isLoading, data: tools } = useQuery("tools", () =>
    fetch("http://localhost:5000/home-tools").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="bg-base-100 lg:py-12 lg:px-16 mx-auto text-accent">
      <SectionTitle title={"Our Best Tools"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools &&
          tools.map((tool) => <SingleTool key={tool._id} tool={tool} />)}
      </div>
    </section>
  );
};

export default HomeTools;
