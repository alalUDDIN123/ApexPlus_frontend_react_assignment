import React, { useState } from 'react';
import styles from './styles/scenior.module.css';

function AddScenarioForm() {
  const [form, setForm] = useState({
    name: '',
    time: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    time: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === 'time' ? parseInt(value) : value;

    setForm({
      ...form,
      [name]: updatedValue,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform the form submission logic here
    console.log('Form submitted:', form);
  };

  const handleReset = () => {
    setForm({
      name: '',
      time: '',
    });
    setTouched({
      name: false,
      time: false,
    });
  };

  const handleGoBack = () => {
    // Perform the "Go Back" logic here
    console.log('Go back');
  };

  const isFormEmpty = form.name === '' || form.time === '';
  const shouldShowNameError = touched.name && form.name === '';
  const shouldShowTimeError = touched.time && form.time === '';

  return (
    <>
      <form className={styles.addScenarioForm_container} onSubmit={handleFormSubmit}>
        <div className={styles.addScenarioForm_container_form_input}>
          <div>
            <label htmlFor="scenario-name">Scenario Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter scenario name"
              value={form.name}
              onChange={handleInputChange}
              onBlur={() => setTouched({ ...touched, name: true })}
            />
            {shouldShowNameError && <p className={styles.errorMessage}>Please enter a scenario name.</p>}
          </div>

          <div>
            <label htmlFor="scenario-time">Scenario Time (seconds) *</label>
            <input
              type="number"
              name="time"
              placeholder="Enter time"
              value={form.time}
              onChange={handleInputChange}
              onBlur={() => setTouched({ ...touched, time: true })}
            />
            {shouldShowTimeError && (
              <p className={styles.errorMessage}>
                {form.time === '' ? 'Please enter a scenario time.' : 'Please enter a valid scenario time in seconds.'}
              </p>
            )}
          </div>
        </div>

        <div className={styles.buttonDiv}>
          <button type="submit" disabled={isFormEmpty} className={styles.addButton}>
            Add
          </button>
          <button type="button" onClick={handleReset} disabled={isFormEmpty} className={styles.resetButton}>
            Reset
          </button>
          <button type="button" onClick={handleGoBack} className={styles.goBackButton}>
            Go Back
          </button>
        </div>
      </form>
    </>
  );
}

export default AddScenarioForm;
