import React from "react";
import News from "./News/News.jsx";
import WhyUpStock from "./WhyUpStock/WhyUpStock.jsx";

const Info = ({ name }) => {
  return name === "news" ? <News /> : <WhyUpStock />;
};

export default Info;
