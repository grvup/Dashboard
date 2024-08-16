import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  strong {
    font-size: 18px;
    color: #333;
  }

  span {
    font-size: 14px;
    color: #777;
    margin-top: 4px;
  }
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
