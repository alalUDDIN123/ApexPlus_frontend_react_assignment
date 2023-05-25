import React from 'react';
import HomePage from '../home/HomePage';
import AddScenario from '../scenario/AddScenario';
import AllScenaros from '../scenario/AllScenaros';
import AddVehicle from '../vehicle/AddVehicle';


function ComponentRenderer({ activeComponent }) {
    
  const ReturnActiveComponent = (currentComponent) => {
    switch (currentComponent) {
      case 'home':
        return <HomePage />;

      case 'AddScenario':
        return <AddScenario />;

      case 'allScenarios':
        return <AllScenaros />;

      case 'addVehicle':
        return <AddVehicle />;
      default:
        return null;
    }
  };

  return <div>{ReturnActiveComponent(activeComponent)}</div>;
}

export default ComponentRenderer;
