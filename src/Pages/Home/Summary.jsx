import React from "react";
import SummaryCard from "./SummaryCard.jsx";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faDeleteLeft, faFlagCheckered, faPeopleGroup, faStar } from "@fortawesome/free-solid-svg-icons";
AOS.init();
const Summary = () => {
  const summarys = [
    {
      _id: 1,
      title: "Anual Revinue",
      icon: <><FontAwesomeIcon className={"text-4xl"} icon={faChartLine} /></>,
      count: 94,
      ext: "M+",
    },
    {
      _id: 2,
      title: "Connect Across People",
      icon: <><FontAwesomeIcon className={"text-4xl"} icon={faPeopleGroup} /></>,
      count: 25,
      ext: "M+",
    },
    {
      _id: 3,
      title: "Country",
      icon: <><FontAwesomeIcon className={"text-4xl"} icon={faFlagCheckered} /></>,
      count: 74,
      ext: "+",
    },
    {
      _id: 4,
      title: "Feedbacks",
      icon: <><FontAwesomeIcon className={"text-4xl"} icon={faStar} /></>,
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
