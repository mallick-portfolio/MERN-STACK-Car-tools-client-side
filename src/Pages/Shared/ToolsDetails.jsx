import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer.jsx";
import CheckOutForm from "./CheckOutForm.jsx";
import ChecoutToolDetail from "./ChecoutToolDetail.jsx";
const ToolsDetails = () => {
  const { id } = useParams();
  const [tool, setTool] = useState({});

  useEffect(() => {
    const loadTool = async () => {
      await axios
        .get(`http://localhost:5000/tools/${id}`)
        .then((res) => setTool(res.data));
    };
    loadTool();
  }, [id]);
  return (
    <>
      <div className="bg-base-100 lg:px-16 mx-auto">
        <div className="py-8 sm:flex gap-x-10 flex-row-reverse sm:flex-row">
          <ChecoutToolDetail tool={tool} />
          <CheckOutForm tool={tool} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ToolsDetails;
