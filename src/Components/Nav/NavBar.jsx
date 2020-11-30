import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/mystocks">
        MyStocks
      </Link>
      <Link className={styles.link} to="/stocks">
        Stocks
      </Link>
      <Link className={styles.link} to="/forum">
        Forum
      </Link>
    </div>
  );
};

export default NavBar;
