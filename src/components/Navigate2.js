import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 20px;
  height: 100vh;
  border-right: 1px solid #e0e0e0;
`;

const NavItem = styled(NavLink)`
  margin-bottom: 15px;
  text-decoration: none;
  color: #333;
  padding: 12px 15px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  transition: background 0.3s, color 0.3s, transform 0.3s;
  
  &.active {
    background: #007bff;
    color: #fff;
  }

  &:hover {
    background: #f1f1f1;
    color: #007bff;
    transform: translateX(5px);
  }
`;

const Navigation = () => (
  <Nav>
    <NavItem exact to="/">
      Home
    </NavItem>
    <NavItem to="/profile">
      Profile
    </NavItem>
    <NavItem to="/settings">
      Settings
    </NavItem>
  </Nav>
);

export default Navigation;
