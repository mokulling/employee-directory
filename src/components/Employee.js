import React from "react";

function Employee(props) {
  console.log(props)
  return (
    <div className="text-center">
      <h3>Name: {props.firstName} {props.lastName}</h3>
      <h3>Location: {props.location}</h3>
    </div>
  );
}

export default Employee;
