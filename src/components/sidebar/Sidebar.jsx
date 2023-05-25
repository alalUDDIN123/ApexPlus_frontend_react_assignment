import React from 'react';
import styles from "./styles/sidebar.module.css"
function Sidebar({ setActiveComponent }) {
  return (
    <div className={styles.sidebar_container}>
      <ul>
        <li onClick={() => setActiveComponent('home')}>Home</li>
        <li onClick={() => setActiveComponent('AddScenario')}>Add Scenario</li>
        <li onClick={() => setActiveComponent('allScenarios')}>All Scenarios</li>
        <li onClick={() => setActiveComponent('addVehicle')}>Add Vehicle</li>
      </ul>
    </div>
  );
}

export default Sidebar;
