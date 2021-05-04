import React from 'react';
import HighlightIcon from '@material-ui/icons/Highlight';
import styled from 'styled-components';

const NavBar = styled.div`
  background-color: #f5ba13;
  margin: auto -16px;
  padding: 16px 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
`;

const AppName = styled.h1`
  color: #fff;
  font-family: "McLaren", cursive;
  font-weight: 200;
`;

const Link = styled.a`
  color: #fff;
  cursor: pointer;
  font-size: 1.25rem;
  padding-top: 10px;
`;

function Header({ onLogout }) {
  
  return (
    <NavBar>
      <AppName><HighlightIcon />Keeper</AppName>
      <Link onClick={onLogout}>Log Out</Link>
    </NavBar>
  );
}

export default Header;
