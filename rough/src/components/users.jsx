import React from "react";

const Users = () => {
  const [users, setusers] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:8080/movies`)
      .then((res) => res.json())
      .then((res) => setusers(res.data));
  }, []);

  return (
    <div>
      <h1>users listing page</h1>
      {users?.map((user) => (
        <p key={user.id}>{user.id}</p>
      ))}
    </div>
  );
};

export default Users;
