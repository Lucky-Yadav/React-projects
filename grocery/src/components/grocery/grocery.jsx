const Todo = () => {
  const [data, setdata] = React.useState([]);
  const handleadditem = (title) => {
    const todoitem = {
      title: title,
      status: false,
      id: uuidv4(),
    };
    setdata([...data, todoitem]);
  };
  console.log(data);
  return (
    <>
      <Todoinput handleadditem={handleadditem} />
      <Todolist data={data} />
    </>
  );
};
