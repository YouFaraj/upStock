import React from "react";


const SideBar = ({ changeName }) => {
  return (
    <div>
      <h2 onClick={() => changeName("news")} >
        News
      </h2>
      <h2 onClick={() => changeName("upstock")} >
        Why upStock
      </h2>
    </div>
  );
};

export default SideBar;
