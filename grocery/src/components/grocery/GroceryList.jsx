import React from "react";
const Todolist = ({ data, updatedata }) => {
  console.log("object");
  function deletedata(key) {
    for (let index = 0; index < data.length; index++) {
      console.log(key);
      if (data[index]["id"] === key) {
        data.pop();
      }
    }
    updatedata(data);
    console.log(data);
  }
  return (
    <>
      <h2>list</h2>
      {data.map((item) => (
        <>
          <h1 key={item.id}>
            {item.title}
            <button 
              className="button1"
              onClick={(e) => {
                let key = item.id;
                deletedata(key);
              }}
            >
              delete
            </button>
          </h1>
        </>
      ))}
      {/* <div>{console.log(data)}</div> */}
    </>
  );
};
export default Todolist