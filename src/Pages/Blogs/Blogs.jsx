import React from "react";
import Footer from "../Shared/Footer.jsx";
import resactOptimization from "../../assets/images/react.jpg";
const Blogs = () => {
  return (
    <div>
      <div className="lg:px-16 mx-auto mb-10">
        <div class="hero rounded-lg bg-base-300">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src={resactOptimization}
              class="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
            <div>
              <h1 class="text-3xl font-bold">
                How will you improve the performance of a React Application?
              </h1>
              <p class="py-6">
                During the initial rendering process, React builds a DOM tree of
                components. So, when data changes in the DOM tree, we want React
                to re-render only those components that were affected by the
                change, skipping the other components in the tree that were not
                affected. However, React could end up re-rendering all
                components in the DOM tree, even though not all are affected.
              </p>
              <button class="px-4 py-1 sm:px-12 sm:py-3  text-white rounded-md border-0 bg-neutral">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
