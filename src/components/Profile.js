import React from "react";

const Profile = (props) => {
  
  return (
    <>
      <h4>{props.name}</h4>
      <p>{props.title}</p>
      <p>{props.age}</p>
    </>
  );
};

export default Profile;
