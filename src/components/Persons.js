import React from "react";
import Profile from "./Profile";
//List of all people or persons which is child of App, but a parent of Profile
const Persons = (props) => {
  return (
    <div>
      {props.item.map((person) => (
        <Profile
          key={person.id}
          name={person.name}
          title={person.title}
          age={person.age}
          role={person.role}
          address={person.address}
        />
      ))}
    </div>
  );
};

export default Persons;
