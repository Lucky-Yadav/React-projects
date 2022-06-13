import React from "react";
const Todolist = ({ data }) => {
  function deletedata  (key) {
    
    for (let index = 0; index < data.length; index++) {
      console.log(key);
      if (data[index]["id"] === key) {
        delete data[index]
        // 
      }
    } Todolist({data})
    console.log(data);
  };
  return (
    <>
      <h2>list</h2>
      {data.map((item) => (
        <>
          <h1
            key={item.id}
            onClick={(e) => {
              let key = item.id
              deletedata(key);
            }}
          >
            {item.title}
          </h1>
        </>
      ))}
      {/* <div>{console.log(data)}</div> */}
    </>
  );
};
export default Todolist