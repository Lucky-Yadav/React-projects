import React from "react";
import Todoinput from "./GroceryInput"
import Todolist from "./GroceryList"
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [data, setdata] = React.useState([]);
  
  const handleadditem = (title) => {
    const todoitem = {
      title: title,
      status: false,
      id: uuidv4(),
    };
    setdata([...data, todoitem]);
    };
    
  console.log(data);

  const updatedata = () => {
    const updateddata = data.map((item) => (
      item
    )) 
    setdata(updateddata);
  }
   
  
  return (
    <>
      <Todoinput handleadditem={handleadditem} />
      <Todolist data={data} updatedata={updatedata} />
    </>
  );
};
export default Todo