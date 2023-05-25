import React from 'react';
import styles from "./styles/sidebar.module.css"
function Sidebar(props) {
  return (
    <div className={styles.sidebar_container}>
      <ul>
        <li onClick={() => props?.setActiveComponent('home')} className={props?.activeComponent==="home"?styles.activeTab:""} >Home</li>
        <li onClick={() => props?.setActiveComponent('AddScenario')} className={props?.activeComponent==="AddScenario"?styles.activeTab:""}>Add Scenario</li>
        <li onClick={() => props?.setActiveComponent('allScenarios')} className={props?.activeComponent==="allScenarios"?styles.activeTab:""}>All Scenarios</li>
        <li onClick={() => props?.setActiveComponent('addVehicle')} className={props?.activeComponent==="addVehicle"?styles.activeTab:""}>Add Vehicle</li>
      </ul>
    </div>
  );
}

export default Sidebar;
