import React from "react";
import { v4 as uuidv4 } from "uuid";
import Todoinput from "./input";
import Todolist from "./list";

function Todo() {
  const [data, setdata] = React.useState([]);

  const handleadditem = (title) => {
    const todoitem = {
      title: title,
      status: false,
      id: uuidv4(),
    };
      setdata([...data, todoitem]);

     
    };
     const updatedata = () => {
       const updateddata = data.map((item) => item);
       setdata(updateddata);
    };
    
  return (
    <div className="App">
      <h3>Sign up form</h3>
      <br />
      <Todoinput handleadditem={handleadditem} />
      <Todolist data={data} updatedata={updatedata} />
      
    </div>
  );
}

export default Todo;
