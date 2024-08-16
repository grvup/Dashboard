import React from 'react';
import styled from 'styled-components';

const Tile = styled.div`
  background: linear-gradient(135deg, #e0e0e0, #f9f9f9);
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const TileText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const ModuleTile = ({ name }) => (
  <Tile>
    <TileText>{name}</TileText>
  </Tile>
);

export default ModuleTile;
