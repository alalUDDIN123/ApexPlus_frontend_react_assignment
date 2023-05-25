import React, { useState } from 'react'
import styles from "./styles/home.module.css"

import Sidebar from '../components/sidebar/Sidebar';
import ComponentRenderer from '../components/componentRenderer/ComponentRenderer';

function Home() {
  const [activeComponent, setActiveComponent] = useState('AddScenario');

  const setActiveTabAndActiveToSidebar = {
    activeComponent: activeComponent,
    setActiveComponent: setActiveComponent
  };

  return (
    <>
      <div className={styles.home_container} >

        {/* sidebar */}
        <Sidebar {...setActiveTabAndActiveToSidebar} />

        {/* main component */}
        <ComponentRenderer activeComponent={activeComponent} />
       

      </div>
    </>
  )
}

export default Home
