import React from "react";
import { Link } from "react-router-dom"

const Home = () => {
  const [value, setvalue] = React.useState(0);
  const [items, setitem] = React.useState([]);
  const handlecart = (a) => {
    console.log("clicked");
    setvalue(value + a);
  };

  React.useEffect(() => {
    fetch(`http://localhost:8080/movies`)
      .then((res) => res.json())
      .then((res) => setitem(res));
  }, []);

  return (
    <div>
      <h1>movies </h1>
      <div> cart {value}</div>
      {items?.map((item) => (
        <div key={item.id} className="card">
          <div className="moviecard">
            <div className="para">
              <h4>movie {item.id} </h4>
              <h4>{item.title}</h4>
            </div>
            <div className="imag">
              <img className="image" src={item.poster_path} alt="" />
              <div className="buttons1">
                <button onClick={() => handlecart(1)}>Add to cart</button>
              </div>
            </div>
          <Link className="buttn" to={`/item/${item.id}`}> more detail </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
