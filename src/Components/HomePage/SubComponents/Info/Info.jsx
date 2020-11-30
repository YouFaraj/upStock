import React from "react";
import News from "./News/News.jsx";
import WhyUpStock from "./WhyUpStock/WhyUpStock.jsx";

const Info = ({ name }) => {
  return (
  <div>{ name === "news" ? <News /> : <WhyUpStock /> }</div>
  )
};

export default Info;
