import React from "react";
import CountUp from "react-countup";

const SummaryCard = ({ summary }) => {

  const { title, icon, count, ext } = summary;
  return (
    <div className="stats py-4 shadow-lg text-accent bg-base-300 text-center">
      <div className="stat">
        <div className="stat-title">
          {icon}
        </div>
        <div className="stat-value">
          <CountUp
            start={0}
            end={count}
            duration={2.75}
            separator=" "
            decimal=","
          />
          {ext && ext}
        </div>
        <div className="text-xl">{title}</div>
      </div>
    </div>
  );
};

export default SummaryCard;
