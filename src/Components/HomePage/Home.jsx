import React, { useState } from "react";
import SideBar from "./SubComponents/SideBar/SideBar.jsx";
import Styles from "./Home.module.css";
import Info from "./SubComponents/Info/Info.jsx";
const Home = () => {
  const [name, setName] = useState("News");
  return (
    <div className={Styles.homeContainer}>
      <div className={Styles.sidebarContainer}>
        <SideBar changeName={setName} />
      </div>
      <Info name={name} />
    </div>
  );
};

export default Home;
