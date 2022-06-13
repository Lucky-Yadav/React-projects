import React from "react";
import { v4 as uuidv4 } from "uuid";
import Todoinput from "./input";
import Todolist from "./list";

function Todo() {
  const [data, setdata] = React.useState([]);

  const handleadditem = (title, price, category) => {
    const todoitem = {
      title: title,
      status: false,
      price: price,
      category: category,
      id: uuidv4(),
    };
      setdata([...data, todoitem]);

     
    };
     const updatedata = () => {
       const updateddata = data.map((item) => item);
       setdata(updateddata);
    };
    
     async function create(title, price, category, id) {
       try {

         let body = { title, price, category, id };

         let resp = await fetch(`http://localhost:3000/students`, {
           method: "post",
           body: JSON.stringify(body),
           headers: {
             "Content-Type": "application/json",
           },
         });
         let data = await resp.json();
         // updatedom()
         console.log(data);
       } catch (error) {
         console.log(error);
       }
     }



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
