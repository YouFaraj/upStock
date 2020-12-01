import React from "react";
import News from "./News/News.jsx";
import WhyUpStock from "./WhyUpStock/WhyUpStock.jsx";
import Styles from './Info.module.css';
const Info = ({ name }) => {
  return (
  <div className={Styles.infoContainer}>{ name === "news" ? <News /> : <WhyUpStock /> }</div>
  )
};

export default Info;
