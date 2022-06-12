import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const Todoinput = ({ handleadditem }) => {
  const [title, settitle] = React.useState("");

  return (
    <>
      <input
        type="text"
        placeholder="grocery item"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <button onClick={() => { handleadditem(title); settitle(""); } }>add item</button>
    </>
  );
};
const Todolist = ({ data }) => {
  return <>
    <h2>list</h2>
    {data.map((item) => <h1 key={item.id} >{item.title}</h1>)}
  </>;
};
const Todo = () => {
  const [data, setdata] = React.useState([]);
  const handleadditem = (title) => {
    const todoitem = {
      title: title,
      status: false,
      id: uuidv4()
    }
    setdata([...data, todoitem])
  }
  console.log(data);
  return (
    <>
      <Todoinput handleadditem={handleadditem} />
      <Todolist data={data} />
    </>
  );
};

export default function App() {
  return <Todo />;
}
