import React, {useState} from 'react';
import {UnitWrapper} from './unitConverterWrapper';

export const TempConverter = (props) => {
  const [fromUnit, setFromUnit] = useState('°C');
  const [toUnit, setToUnit] = useState('°F');
  const [_, setToggleFromUnitDropDown] = useState(false);
  const [toggleToUnitDropDown, setToggleToUnitDropDown] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [fromUnitInputFieldValue, setFromUnitInputFieldValue] = useState('');
  const [toUnitInputFieldValue, setToUnitInputFieldValue] = useState('');

  const convert = () => {
    if (fromUnit === '°F' && toUnit === '°C') {
      const tempInCelsius = (Number(fromUnitInputFieldValue) - 32) * (5 / 9);
      setToUnitInputFieldValue(tempInCelsius.toFixed(2));
    } else if (fromUnit === '°C' && toUnit === '°F') {
      const tempInFarenheit = Number(fromUnitInputFieldValue) * (9 / 5) + 32;
      setToUnitInputFieldValue(tempInFarenheit.toFixed(2));
    } else if (fromUnit === '°F' && toUnit === 'K') {
      const tempInKelvin = (Number(fromUnitInputFieldValue) + 459.67) * (5 / 9);
      setToUnitInputFieldValue(tempInKelvin.toFixed(2));
    } else if (fromUnit === 'K' && toUnit === '°F') {
      const tempInFarenheit =
        Number(fromUnitInputFieldValue) * (9 / 5) - 459.67;
      setToUnitInputFieldValue(tempInFarenheit.toFixed(2));
    } else if (fromUnit === '°C' && toUnit === 'K') {
      setToUnitInputFieldValue(
        (Number(fromUnitInputFieldValue) + 273.15).toFixed(2),
      );
    } else if (fromUnit === 'K' && toUnit === '°C') {
      setToUnitInputFieldValue(
        (Number(fromUnitInputFieldValue) - 273.15).toFixed(2),
      );
    } else if (fromUnit === toUnit) {
      setToUnitInputFieldValue(Number(fromUnitInputFieldValue));
    }
  };

  const inputHandler = ({name, text}) => {
    if (name === 'fromInput') {
      setFromUnitInputFieldValue(text);
    }
  };

  return (
    <UnitWrapper
      fromUnit={fromUnit}
      inputHandler={(text) => inputHandler({name: 'fromInput', text})}
      toUnit={toUnit}
      showToggle={showToggle}
      fromUnitDropdown={() => {
        setToggleFromUnitDropDown(true);
        setToggleToUnitDropDown(false);
        setShowToggle(true);
        setToUnitInputFieldValue('');
      }}
      toUnitInputFieldValue={String(toUnitInputFieldValue)}
      toUnitDropdown={() => {
        setToggleFromUnitDropDown(false);
        setToggleToUnitDropDown(true);
        setShowToggle(true);
        setToUnitInputFieldValue('');
      }}
      toggleToUnitDropDown={toggleToUnitDropDown}
      availableUnits={[
        {abbrev: '°F', name: 'Farenheit'},
        {abbrev: '°C', name: 'Celsius'},
        {abbrev: 'K', name: 'Kelvin'},
      ]}
      setFromUnit={setFromUnit}
      setToUnit={setToUnit}
      setShowToggle={setShowToggle}
      convert={() => convert()}
    />
  );
};
