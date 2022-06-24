import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
  display: flex;
  gap: 60px;
  background: grey;
  margin: 1%;
  padding: 3.2%;
  border-radius: 3px;
  justify-content: space-between;
`;

const Navbar = () => {
    const { state, dispatch } = useContext(userContext);
    const toggle
  return (
    <NavbarWrapper>
      <Link to="/"> Home </Link>
      <Link to="/Login"> login </Link>
    </NavbarWrapper>
  );
};
export default Navbar;
