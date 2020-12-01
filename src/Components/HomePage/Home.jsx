import React, { useState } from "react";
import SideBar from "./SubComponents/SideBar/SideBar.jsx";
import Info from "./SubComponents/Info/Info.jsx";
const Home = () => {
  const [name, setName] = useState("news");
  return (
    <div>
      <div>
        <SideBar changeName={setName} />
      </div>
      <Info name={name} />
    </div>
  );
};

export default Home;
