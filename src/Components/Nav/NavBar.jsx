import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <Link className={styles.link} to="/home">Home</Link>
      <Link className={styles.link} to="/home">MyStocks</Link>
      <Link className={styles.link} to="/home">Stocks</Link>
    </div>
  );
};

export default NavBar;
