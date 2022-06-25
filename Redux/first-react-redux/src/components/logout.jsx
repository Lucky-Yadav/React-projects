import React, { useContext } from "react";
import { userContext } from "../App";


const Logout = () => {
    const { state, dispatch } = useContext(userContext);
     dispatch({ type: "", payload: false });
}

export default Logout;