const getTodos = async () => {
  try {
    const response = await fetch("/todos");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

export default getTodos;
