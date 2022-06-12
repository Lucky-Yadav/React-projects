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
      <button
        onClick={() => {
          handleadditem(title);
          settitle("");
        }}
      >
        add item
      </button>
    </>
  );
};
