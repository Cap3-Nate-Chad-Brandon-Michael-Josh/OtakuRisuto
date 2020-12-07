import React from "react";

const UserResultItem = (props) => {
  return (
    <div>
      <h2
        className="result-item"
        onClick={(event) => props.viewUser(event, props.user.user_id)}
      >
        {props.user.username}
      </h2>
    </div>
  );
};

export default UserResultItem;
