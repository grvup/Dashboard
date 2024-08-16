import React from 'react';
import styled from 'styled-components';

const Tile = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 10px;
`;

const ModuleTile = ({ name }) => (
  <Tile>
    {name}
  </Tile>
);

export default ModuleTile;
