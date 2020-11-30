import React from 'react';
import Styles from './SideBar.module.css'


const SideBar = ({changeName}) => {
  return (
    <div>
      <h2 onClick={() => changeName('News')} className={Styles.header}>News</h2>
      <h2 onClick={() => changeName('About')} className={Styles.header}>About</h2>
      <h2 onClick={() => changeName('upStock')} className={Styles.header}>Why upStock</h2>
    </div>
  )
}

export default SideBar;