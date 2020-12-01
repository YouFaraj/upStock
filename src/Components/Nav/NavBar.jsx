import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navlinks = [
    ["/", "Home"],
    ["/mystocks", "MyStocks"],
    ["/stocks", "Stocks"],
    ["/forum", "Forum"],
  ];
  return (
    <div className="flex justify-between items-center bg-blue-800 py-4 md:justify-end md:space-x-8">
      {navlinks.map((elm) => (
        <Link
          key={elm[0]}
          className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-blue-800 hover:bg-gray-100 focus:outline-none"
          to={elm[0]}
        >
          {elm[1]}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
