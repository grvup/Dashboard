import React from 'react';
import styled from 'styled-components';

const Dropdown = styled.select`
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.3); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Frosted glass effect */
  color: #333;
  font-size: 16px;
  appearance: none; /* Removes default dropdown arrow */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, border-color 0.3s, box-shadow 0.3s, background 0.3s;
  transform: translateY(10px); /* Default position lowered by 10px */

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    border-color: rgba(0, 123, 255, 0.7);
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.4);
    transform: translateY(0); /* Move back up to original position on focus */
  }
`;

const Option = styled.option`
  padding: 12px;
  background: rgba(255, 255, 255, 0.8);
  color: #333;
`;

const DesignationDropdown = ({ designations, onChange }) => (
  <Dropdown onChange={onChange}>
    {designations.map((designation, index) => (
      <Option key={index} value={designation}>
        {designation}
      </Option>
    ))}
  </Dropdown>
);

export default DesignationDropdown;
