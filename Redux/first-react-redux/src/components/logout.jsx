import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";


const logout = () => {
    const { state, dispatch } = useContext(userContext);
}

export default logout