import React from "react";

const Home = () => {
  const [value, setvalue] = React.useState(0);
  const [items, setitem] = React.useState([]);
  const handlecart = (a) => {
    console.log("clicked");
    setvalue(value + a);
  };

  React.useEffect(() => {
    fetch(`http://localhost:8080/products`)
      .then((res) => res.json())
      .then((res) => setitem(res));
  }, []);

  return (
    <div>
      <h1>product listing page</h1>
      <div> cart {value}</div>
      {items?.map((item) => (
        <div key={item.id} className="card">
          <h4>Product {item.id}</h4>
          <p>A product that is {item.position} in the list of products</p>
          <div className="buttons1">
            <button>Add to cart</button>
            <button onClick={() => handlecart(1)}>Increase</button>
            <button onClick={() => handlecart(-1)}>Decrease</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
