import React from 'react';
import styles from "./styles/scenior.module.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { IoIosTrash } from "react-icons/io";

function AllScenaros() {
  return (
    <div className={styles.allScenior_container}>

      {/* header part of all scenario */}
      <div className={styles.allScenior_container_header}>
        <div>
          <h3>All Scenarios</h3>
        </div>
        <div>
          <button className={`${styles.header_button} ${styles.new_ScenarioBtn}`}>New Scenario</button>
          <button className={`${styles.header_button} ${styles.add_vehicleBtn}`}>Add Vehicle</button>
          <button className={`${styles.header_button} ${styles.delete_ScenarioBtn}`}>Delete All</button>

        </div>
      </div>

      {/* table of all scenario */}
      <table className={styles.scenario_table}>
        <thead>
          <tr>
            <th>Scenario Id</th>
            <th>Scenario Name</th>
            <th>Scenario Time</th>
            <th>Number of Vehicles</th>
            <th>Add Vehicle</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Test Scenario</td>
            <td>10s</td>
            <td>3</td>
            <td><BsFillPlusCircleFill className={styles.icon} /></td>
            <td><MdOutlineModeEditOutline className={styles.icon} /></td>
            <td><IoIosTrash className={styles.icon} /></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Test Scenario</td>
            <td>10s</td>
            <td>3</td>
            <td><BsFillPlusCircleFill className={styles.icon} /></td>
            <td><MdOutlineModeEditOutline className={styles.icon} /></td>
            <td><IoIosTrash className={styles.icon} /></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Test Scenario</td>
            <td>10s</td>
            <td>3</td>
            <td><BsFillPlusCircleFill className={styles.icon} /></td>
            <td><MdOutlineModeEditOutline className={styles.icon} /></td>
            <td><IoIosTrash className={styles.icon} /></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Test Scenario</td>
            <td>10s</td>
            <td>3</td>
            <td><BsFillPlusCircleFill className={styles.icon} /></td>
            <td><MdOutlineModeEditOutline className={styles.icon} /></td>
            <td><IoIosTrash className={styles.icon} /></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Test Scenario</td>
            <td>10s</td>
            <td>3</td>
            <td><BsFillPlusCircleFill className={styles.icon} /></td>
            <td><MdOutlineModeEditOutline className={styles.icon} /></td>
            <td><IoIosTrash className={styles.icon} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AllScenaros;
