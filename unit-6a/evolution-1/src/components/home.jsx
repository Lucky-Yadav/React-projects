import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [value, setvalue] = React.useState(0);
  const [items, setitem] = React.useState([]);
  const handlecart = (a) => {
    console.log("clicked");
    setvalue(value + a);
    };
    const navigate = useNavigate()

  React.useEffect(() => {
    fetch(`http://localhost:8080/movies`)
      .then((res) => res.json())
      .then((res) => setitem(res));
  }, []);

  return (
    <div>
      <h1>Appointments page</h1>
      <div> cart {value}</div>
      
    </div>
  );
};

export default Home;
