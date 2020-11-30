import React from "react";
import Styles from "./SideBar.module.css";

const SideBar = ({ changeName }) => {
  return (
    <div className={Styles.headerContainer}>
      <h2 onClick={() => changeName("news")} className={Styles.header}>
        News
      </h2>
      <h2 onClick={() => changeName("upstock")} className={Styles.header}>
        Why upStock
      </h2>
    </div>
  );
};

export default SideBar;
