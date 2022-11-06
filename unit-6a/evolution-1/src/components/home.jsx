import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [value, setvalue] = React.useState(0);

  return (
    <div>
          <h1>Appointments page</h1>
          <button className="delete" >go to Appointments page</button>
    </div>
  );
};

export default Home;
