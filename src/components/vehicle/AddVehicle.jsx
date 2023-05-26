import React from 'react'
import styles from "./styles/addVehicle.module.css"
function AddVehicle() {
  return (
    <>
      <div className={styles.AddVehicle_container}>

        <div className={styles.AddVehicle_container_header} >
          <h3>Vehicle / add</h3>
        </div>

        <div className={styles.AddVehicle_container_headTitle} >
          <h3>Add Vehicle</h3>
        </div>


        {/* add vehicle form */}

        <form action="" className={styles.AddVehicle_form} >

          <div className={styles.AddVehicle_form_input} >
            
          <div>
            <label htmlFor="">Scenarios List</label>
            <select>
              <option value="" selected disabled>Select Scenario</option>
              <option value="">Scenario 1</option>
              <option value="">Scenario 2</option>
              <option value="">Scenario 3</option>
            </select>

          </div>

          <div>
            <label htmlFor="">Vehicle Name</label>
            <input type="text" placeholder='Enter vehicle name' />
          </div>

          <div>
            <label htmlFor="">Speed</label>
            <input type="text" placeholder='Enter speed' />
          </div>

          <div>
            <label htmlFor="">Position X</label>
            <input type="text" placeholder='Enter X position' />
          </div>

          <div>
            <label htmlFor="">Position Y</label>
            <input type="text" placeholder='Enter Y position' />
          </div>

          <div>
            <label htmlFor="">Direction</label>
            <select>
              <option value="" selected disabled>Select Direction</option>
              <option value="">Towards</option>
              <option value="">Backwards</option>
              <option value="">Upwards</option>
              <option value="">Downwards</option>
            </select>
          </div>

          </div>


          <div className={styles.buttonDiv}>
            <button type="submit"  className={styles.addButton}>
              Add
            </button>
            <button type="button"   className={styles.resetButton}>
              Reset
            </button>
            <button type="button"  className={styles.goBackButton}>
              Go Back
            </button>
          </div>
        </form>

      </div>
    </>
  )
}

export default AddVehicle
