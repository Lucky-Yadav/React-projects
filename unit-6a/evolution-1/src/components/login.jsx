import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const handlelogin = () => {
    const payload = { email, password };
    console.log(payload);
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.token) {
          alert("Successfuly logged in");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>login</h1>
      <label>
        Email :-
        <input
          className="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password :-
        <input
          className="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button className="login" onClick={handlelogin}>Login</button>
    </div>
  );
};

export default Login;
