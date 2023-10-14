import { useLoaderData } from "react-router-dom";

const Update = () => {
  const singleUser = useLoaderData();
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch(`http://localhost:5000/user/${singleUser._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("user is updated");
        }
      });
  };
  return (
    <div>
      <h1>Updated User{singleUser.name}</h1>
      <form onSubmit={handleUpdate} action="">
        <input type="text" name="name" defaultValue={singleUser.name} id="" />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={singleUser.email}
          id=""
        />
        <br />
        <input type="submit" value="Updated User" />
      </form>
    </div>
  );
};

export default Update;
