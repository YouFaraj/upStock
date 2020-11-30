import React from 'react';
import SideBar from './SubComponents/SideBar/SideBar.jsx';
import Styles from './Home.module.css';
import CardList from './SubComponents/CardList/CardList.jsx';
const Home = () => {
  return (
    <div className={Styles.homeContainer}>
    <div className={Styles.sidebarContainer}>
      <SideBar />
    </div>
      <CardList />
    </div>

  )
}

export default Home;