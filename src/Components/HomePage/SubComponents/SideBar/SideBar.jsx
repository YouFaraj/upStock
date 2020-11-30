import React from 'react';
import Styles from './SideBar.module.css'


const SideBar = () => {
  return (
    <div>
      <h2 className={Styles.header}>News</h2>
      <h2 className={Styles.header}>About</h2>
      <h2 className={Styles.header}>Why upStock</h2>
    </div>
  )
}

export default SideBar;