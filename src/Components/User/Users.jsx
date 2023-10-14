const Users = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUsers = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newUsers),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged == true) {
            alert("User added Successfully")
          console.log(data);
          form.reset();
        }
      });
  };
  return (
    <div>
      <h1>This is User Page</h1>
      <form onSubmit={handleAddUser} action="">
        <input type="text" name="name" placeholder="Enter Name" id="" />
        <br />
        <input type="email" name="email" placeholder="Enter Email" id="" />
        <br />
        <input type="submit" value="Create User" />
      </form>
    </div>
  );
};

export default Users;
