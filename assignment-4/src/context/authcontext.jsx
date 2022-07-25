import axios from "axios";
import React, { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";

export const Authcontext = createContext()

export const AuthProvider = ({ children }) => {
     const [token, setToken] = useState(null)
    const navigate = useNavigate();

     const handlelogin = (body) => {
    //    const payload = { email, password };
    //    console.log(payload);
         axios({
           method: "POST",
             url: "https://reqres.in/api/login",
             data: body
         })
             .then(res => {
                 console.log(res, "res");
             })
        //    .then((res) => {
        //      console.log(res);
        //     //  if (res.token) {
        //     //    alert("Successfuly logged in");

        //     //    navigate("/");
        //     //    // navigate("/booking")
        //     //  }
        //    })
        //    .catch((err) => {
        //      console.log(err);
        //    });
     };

    const value = {
        handlelogin,
        token
     }

    return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>
};