import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const [users, setUser] = useState(data);

  const handleDelete = (_id) => {
    console.log("Delete", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          alert("Successfully deleted one document.");
          const remaining = users.filter((na) => na._id !== _id);
          setUser(remaining);
        } else {
          alert("No documents matched the query. Deleted 0 documents.");
        }
      });
  };

  return (
    <div>
      <h1>This is details page {data.length}</h1>
      <div>
        {users.map((na) => (
          <p key={na._id}>
            {na.name}: {na.email}{" "}
            <Link to={`/user/${na._id}`}>
              <button>Update User</button>
            </Link>
            <button onClick={() => handleDelete(na._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Details;
