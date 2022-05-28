import React from "react";
import SingleTool from "../Home/SingleTool.jsx";
import Footer from "../Shared/Footer.jsx";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading.jsx";
const Shop = () => {
  const { isLoading, data: tools } = useQuery("shop", () =>
    fetch("http://localhost:5000/tools").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="bg-base-100 py-4 lg:px-16 mx-auto text-accent">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <SingleTool key={tool._id} tool={tool} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Shop;
