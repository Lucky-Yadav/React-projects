import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../context/authcontext";

const NavbarWrapper = styled.div`
  display: flex;
  gap: 60px;
  background: grey;
  margin: 1%;
  padding: 1.2%;
`;

const Navbar = () => {
    const {token, handlelogin} = useContext(Authcontext)
    return (
        <NavbarWrapper>
            <Link to="/"> home </Link>
            <Link to="/Login"> login </Link>
            <Link to="/bookings"> users </Link>
            <Link to="/private"> private </Link>
        </NavbarWrapper>
    )
}
export default Navbar;