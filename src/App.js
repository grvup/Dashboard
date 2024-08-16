import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import UserCard from './components/UserCard/UserCard';
import Navigation from './components/Navigation/Navigation';
import ModuleTile from './components/ModuleTile/ModuleTile';
import DesignationDropdown from './components/DesignationDropdown';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 1;
  padding: 20px;
`;

const Dashboard = () => (
  <Main>
    <UserCard name="Darpan Mehta" role="Student" />
    <DesignationDropdown
      designations={['Student', 'Admin', 'Faculty']}
      onChange={(e) => console.log(e.target.value)}
    />
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <ModuleTile name="Attendance" />
      <ModuleTile name="Grades" />
      <ModuleTile name="Assignments" />
      {/* Add more ModuleTile components as needed */}
    </div>
  </Main>
);

const Profile = () => <div>Profile Page</div>;
const Settings = () => <div>Settings Page</div>;

const App = () => (
  <Router>
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Container>
  </Router>
);

export default App;
