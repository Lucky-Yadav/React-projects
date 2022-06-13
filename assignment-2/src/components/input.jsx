import React from "react";

const Todoinput = ({ handleadditem }) => {
  const [title, settitle] = React.useState("");
  //   const [gender, setgender] = React.useState("");
  const [price, setprice] = React.useState("");
  const [category, setcategory] = React.useState("");

  return (
    <>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="form">
        <input
          className="gender"
          type="text"
          value={"gender"}
          onChange={(e) => settitle(e.target.value)}
        />
        <br />
        male
        <input type="checkbox" placeholder="male" /> female
        <input type="checkbox" placeholder="female" />
        <br />
        <input
          type="text"
          placeholder="price"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
        <br />
        <input
          type="text"
          placeholder="category"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <br />
        <img src="" alt="" />
      </div>
      <button
        onClick={() => {
          handleadditem(title, price, category);
          //   settitle("");
        }}
      >
        Submit
      </button>
    </>
  );
};
export default Todoinput;
