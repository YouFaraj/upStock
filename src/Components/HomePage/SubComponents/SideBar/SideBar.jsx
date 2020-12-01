import React from "react";


const SideBar = ({ changeName }) => {
  return (
    <div className="flex-1 p-4 w-2/12 h-screen bg-gray-300">
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
