import React from 'react'
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"

const Detail = () => {
    const value = useParams()
  console.log(value);
    return (
        <>
        <h1>stra</h1>
        </>
  );
};

export default Detail;
