import React from "react";
import Address from "./Address";
const Profile = (props) => {
  
  return (
    <section className="Profile">
      <h4>{props.name}</h4>
      <p>Title: {props.title}</p>
      <p>Age :{props.age}</p>
      <p>Role:{props.role}</p>
      <Address address={props.address}/>
    </section>
  );
};

export default Profile;
