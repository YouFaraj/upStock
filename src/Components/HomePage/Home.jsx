import React, { useState } from "react";
import SideBar from "./SubComponents/SideBar/SideBar.jsx";
import Info from "./SubComponents/Info/Info.jsx";
const Home = () => {
  const [name, setName] = useState("news");
  return (
    <div className="flex">
      <div className="w-3/12 border-r-2 h-screen">
        <SideBar changeName={setName} />
      </div>
      <Info name={name} />
    </div>
  );
};

export default Home;
