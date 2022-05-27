import React from "react";
import Footer from "../Shared/Footer.jsx";
import resactOptimization from "../../assets/images/react.jpg";
import statemanage from "../../assets/images/statemanage.png";
import prototype from "../../assets/images/prototype.webp";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Blogs = () => {
  return (
    <div>
      <div className="lg:px-16 mx-auto mb-10">
        <div data-aos="fade-up" class="hero mb-4 rounded-lg bg-base-300">
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
        <div data-aos-duration="2000" class="hero my-4 rounded-lg bg-base-300">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src={statemanage}
              class="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
            <div>
              <h1 class="text-3xl font-bold">
                What are the different ways to manage a state in a React
                application?
              </h1>
              <p class="py-6">
                There are four main types of state you need to properly manage
                in your React apps:{" "}
                <span className="text-neutral">
                  Local state Global state Server state URL state
                </span>
                Local (UI) state – Local state is data we manage in one or
                another component. Local state is most often managed in React
                using the useState hook. Global (UI) state – Global state is
                data we manage across multiple components. URL state – Data that
                exists on our URLs, including the pathname and query parameters.
              </p>
              <button class="px-4 py-1 sm:px-12 sm:py-3  text-white rounded-md border-0 bg-neutral">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div data-aos-duration="2000" class="hero my-4 rounded-lg bg-base-300">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src={prototype}
              class="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
            <div>
              <h1 class="text-3xl font-bold">
                How does prototypical inheritance work?
              </h1>
              <p class="py-6">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the Prototype of
                an object, we use Object.getPrototypeOf and Object
              </p>
              <button class="px-4 py-1 sm:px-12 sm:py-3  text-white rounded-md border-0 bg-neutral">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div data-aos-duration="2000" class="hero my-4 rounded-lg bg-base-300">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src={prototype}
              class="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
            <div>
              <h1 class="text-3xl font-bold">
                Why you do not set the state directly in React?
              </h1>
              <p class="py-6">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the Prototype of
                an object, we use Object.getPrototypeOf and Object
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
