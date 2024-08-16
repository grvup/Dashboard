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

const modulesByDesignation = {
  Student: ['Attendance', 'Grades', 'Assignments'],
  Admin: ['User Management', 'Reports', 'Settings'],
  Faculty: ['Course Materials', 'Student Feedback', 'Timetable'],
};

const Dashboard = () => {
  const [designation, setDesignation] = useState('Student'); // Initialize with default designation

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

  return (
    <Main>
      <UserCard name="Darpan Mehta" role={designation} />
      <DesignationDropdown
        designations={['Student', 'Admin', 'Faculty']}
        onChange={handleDesignationChange}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {modulesByDesignation[designation].map((module) => (
          <ModuleTile key={module} name={module} />
        ))}
      </div>
    </Main>
  );
};

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
