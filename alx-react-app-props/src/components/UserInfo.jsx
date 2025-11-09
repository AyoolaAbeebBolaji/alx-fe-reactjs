import React from "react";
import UserDetails from "./UserDetails";

function UserInfo() {
  const user = {
    name: "Alice",
    age: 25,
  };

  return (
    <div>
      <h2>User Info</h2>
      {/* Pass props to child */}
      <UserDetails name={user.name} age={user.age} />
    </div>
  );
}

export default UserInfo;
