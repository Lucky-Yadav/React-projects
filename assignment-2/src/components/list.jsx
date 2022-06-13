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
          <div key={item.id}>
                  title = {item.title}
                  <br />
                  price = {item.price}
                  <br />
                  category = {item.category}
                  <br />
                  id = {item.id}
                  
            <button
              className="button1"
              onClick={(e) => {
                let key = item.id;
                deletedata(key);
              }}
            >
              delete
            </button>
            
          </div>
        </>
      ))}
      {/* <div>{console.log(data)}</div> */}
    </>
  );
};
export default Todolist;
