
import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { userContext } from "../App";

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
    const Toggle = () => {
        if (state) {
            return (<>
               <Link to="/"> Home </Link>
                <Link to="/logout"> logout </Link>
            </> 
            )
        } else {
             return (
               <>
                 <Link to="#"> Home </Link>
                 <Link to="/login"> login </Link>
               </>
             );
        }
    }
  return (
    <NavbarWrapper>
      <Toggle/>
    </NavbarWrapper>
  );
};
export default Navbar;
