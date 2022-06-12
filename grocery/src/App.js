import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";


const Todolist = ({ data }) => {
  return <>
    <h2>list</h2>
    {data.map((item) => <h1 key={item.id} >{item.title}</h1>)}
  </>;
};


export default function App() {
  return <Todo />;
}
