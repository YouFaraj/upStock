import React from 'react';
import SideBar from './SubComponents/SideBar/SideBar.jsx';
import Styles from './Home.module.css';
const Home = () => {
  return (
    <div className={Styles.sidebarContainer}>
      <SideBar />
    </div>
  )
}

export default Home;