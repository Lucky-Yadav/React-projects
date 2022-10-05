import React, { useState } from "react";
import "./App.css";
import axios from 'axios'

const APIURL = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [data, setdata] = useState([])
  const [byname, setbyname] = useState([]);
  const getUsers = () => {
    axios
      .get(APIURL)
      .then((res) => {
        console.log(res.data);
        setdata  (res.data)
        console.log(data);
      })
      .then((err) => {
        console.log(err);
      });
    //write code here
    //render the list of users
  };
  var count = 1
  const sortList = () => {
    if (count == 1) {

    }
    //write code here
    // sort the user list by name's length
    // on first click list will sorted in assending order
    // on second click list will be sorted in descending order
    // on third click default list will be rendered
    // on fourth click again start form step 1
  };

  return (
    <main>
      <h1>User List</h1>
      <div>
        <button onClick={getUsers}>Get Users</button>
        <button onClick={sortList}>Sort list by name's length</button>
      </div>
      <ul>{/*render the list of the users */}</ul>
      {data.map(user => (
        <div className="users" key={user.id}>
          <div className="user">name= {user.name} id= { user.id}  </div>
        </div>
      ) ) }
    </main>
  );
}

export default App;
