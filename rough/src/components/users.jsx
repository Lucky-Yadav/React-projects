import React from "react";

const users = () => {
  const [users, setusers] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://reqres.in/api/users?page=2`)
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

export default users;
