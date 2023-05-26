import React from 'react'
import styles from "./styles/scenior.module.css"
import AddScenarioForm from './AddScenarioForm'

function AddScenario() {

  return (
    <div className={styles.AddScenior_container}>
      <div className={styles.AddScenario_header} >
        <h3>Scenario / add</h3>
      </div>

      <div className={styles.AddScenario_headTitle} >
        <h3>Add Scenario</h3>
      </div>

      {/* add scenario form */}

      <AddScenarioForm />

    </div>
  )
}

export default AddScenario
