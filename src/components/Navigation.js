import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
  padding: 20px;
  height: 100vh;
`;

const NavItem = styled(NavLink)`
  margin-bottom: 10px;
  text-decoration: none;
  color: #333;
  padding: 10px;
  border-radius: 4px;
  &.active {
    background: #007bff;
    color: #fff;
  }
`;

const Navigation = () => (
  <Nav>
    <NavItem to="/" exact>Home</NavItem>
    <NavItem to="/profile">Profile</NavItem>
    <NavItem to="/settings">Settings</NavItem>
  </Nav>
);

export default Navigation;
