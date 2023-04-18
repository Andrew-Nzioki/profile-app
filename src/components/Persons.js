import React from "react";
import Profile from './Profile'
const Persons = (props) => {
  return (
    <div>
      {props.item.map((person) => (
        <Profile name={person.name} title={person.title} age={person.age} />
      ))}
    </div>
  );
};

export default Persons;
 