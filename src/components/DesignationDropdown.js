import React from 'react';
import styled from 'styled-components';

const Dropdown = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #fff;
`;

const DesignationDropdown = ({ designations, onChange }) => (
  <Dropdown onChange={onChange}>
    {designations.map((designation, index) => (
      <option key={index} value={designation}>{designation}</option>
    ))}
  </Dropdown>
);

export default DesignationDropdown;
