import React from "react";
const Todolist = ({ data }) => {
  return (
    <>
      <h2>list</h2>
      {data.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </>
  );
};
export default Todolist;