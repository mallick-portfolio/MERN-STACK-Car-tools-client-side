import React from "react";
import SummaryCard from "./SummaryCard.jsx";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Summary = () => {
  const summarys = [
    {
      _id: 1,
      title: "Countries",
      icon: "faFlag",
      count: 94,
      ext: "",
    },
    {
      _id: 2,
      title: "Complete Projects",
      icon: "faFlag",
      count: 525,
      ext: "+",
    },
    {
      _id: 3,
      title: "Happy Client",
      icon: "faFlag",
      count: 274,
      ext: "+",
    },
    {
      _id: 4,
      title: "Feedbacks",
      icon: "faFlag",
      count: 530,
      ext: "+",
    },
  ];
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      className="lg:px-16 py-16 bg-base-100 mx-auto text-accent"
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:px-16 px-4 mx-auto">
        {summarys.map((summary) => (
          <SummaryCard key={summary._id} summary={summary} />
        ))}
      </div>
    </div>
  );
};

export default Summary;
