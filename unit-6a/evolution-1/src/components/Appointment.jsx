import React from "react";


const Appointment = () => {
  const [items, setitem] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:8000/posts`)
      .then((res) => res.json())
      .then((res) => setitem(res));
  }, []);

  return (
    <div>
      <h1>Appointments page</h1>
      {items?.map((user) => (
        <div key={user.id} className="data">
          <div className="first">
            <p>Name: {user.name}</p>
            <p> Age :{user.age}</p>
            <p> appointment_details :{user.appointment_details}</p>
          </div>
          <div className="second">
            <p> time :{user.time} A:M</p>
            <p> date :{user.date} </p>
            <p> gender :{user.gender} </p>
          </div>
          <div className="third">
            <button className="details">Show more details</button>
            <button className="delete">delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Appointment;
