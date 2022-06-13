import React from "react";
const Todolist = ({ data }) => {
  const deletedata = (id) => {
    
  };
  return (
    <>
      <h2>list</h2>
      {data.map((item) => (
        <>
          <h1 onClick={deletedata(data.id)} key={item.id}>
            {item.title}
          </h1>
        </>
      ))}
      <div>{console.log(data)}</div>
    </>
  );
};
export default Todolist;