import React from "react";
import { v4 as uuidv4 } from "uuid";

const Todoinput = ({ handleadditem }) => {
  const [title, settitle] = React.useState("");
  //   const [gender, setgender] = React.useState("");
  const [price, setprice] = React.useState("");
  const [category, setcategory] = React.useState("");
  const [image, setimage] = React.useState("");

  return (
    <div className="inputs">
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
        <input
          type="text"
          placeholder="image url"
          onChange={(e) => setimage(e.target.value)}
          value={image}
        />
      </div>
      <button
        onClick={() => {
          var id = uuidv4();
          handleadditem(title, price, category, id, image);
          //   settitle("");
        }}
      >
        Submit
      </button>
    </div>
  );
};
export default Todoinput;
