import React, {useState} from 'react';
import {UnitWrapper} from './unitConverterWrapper';

export const MassConverter = () => {
  const [fromUnit, setFromUnit] = useState('KG');
  const [toUnit, setToUnit] = useState('G');
  const [_, setToggleFromUnitDropDown] = useState(false);
  const [toggleToUnitDropDown, setToggleToUnitDropDown] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [fromUnitInputFieldValue, setFromUnitInputFieldValue] = useState('');
  const [toUnitInputFieldValue, setToUnitInputFieldValue] = useState('');

  const convert = () => {
    if (fromUnit === 'KG' && toUnit === 'G') {
      const massInGrams = Number(fromUnitInputFieldValue) * 1000;
      setToUnitInputFieldValue(massInGrams);
    } else if (fromUnit === 'G' && toUnit === 'KG') {
      setToUnitInputFieldValue(
        Number(fromUnitInputFieldValue / 1000).toFixed(2),
      );
    } else if (fromUnit === 'KG' && toUnit === 'LBS') {
      setToUnitInputFieldValue(Number(fromUnitInputFieldValue) * 2.2);
    } else if (fromUnit === 'LBS' && toUnit === 'KG') {
      setToUnitInputFieldValue(
        Number(fromUnitInputFieldValue / 2.2).toFixed(2),
      );
    } else if (fromUnit === 'LBS' && toUnit === 'G') {
      setToUnitInputFieldValue(
        Number(fromUnitInputFieldValue / 0.002).toFixed(2),
      );
    } else if (fromUnit === 'G' && toUnit === 'LBS') {
      setToUnitInputFieldValue(Number(fromUnitInputFieldValue) * 0.002);
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
        {abbrev: 'KG', name: 'Kilogram'},
        {abbrev: 'G', name: 'Gram'},
        {abbrev: 'LBS', name: 'Pound'},
      ]}
      setFromUnit={setFromUnit}
      setToUnit={setToUnit}
      setShowToggle={setShowToggle}
      convert={() => convert()}
    />
  );
};
