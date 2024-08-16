import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #007bff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-right: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserCard = ({ name, role }) => (
  <Card>
    <Avatar>{name.charAt(0)}</Avatar>
    <UserInfo>
      <strong>{name}</strong>
      <span>{role}</span> {/* Display the selected designation */}
    </UserInfo>
  </Card>
);

export default UserCard;
