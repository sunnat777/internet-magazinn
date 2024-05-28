import React from "react";
import User from "../components/User/User";

const UserLayout = ({ children }) => {
  return (
    <div className="main">
      <User />
      <div className="container">{children}</div>
    </div>
  );
};

export default UserLayout;
