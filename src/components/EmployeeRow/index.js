import React from "react";
import "./style.css";

function EmployeeRow (props) {
  // const employee = props.employee;

  return (

    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col-4">Photo</th>
      <th  scope="col-4">Name
      <button className="dropdown-toggle"></button>
      </th>
      <th scope="col-4">Occupation</th>
      <th scope="col-4">Email</th>
    </tr>
  </thead>
  <tbody>
    {/* {employee.map(props => {
      return ( */}
        <tr>
        <td>
          <img  alt={props.name} src={props.image} />
        </td>
        <td>{props.name}</td>
        <td>{props.occupation}</td>
        <td>{props.email}</td>
      </tr>
    {/* )}
    )} */}
  </tbody>
</table>
  );
}

export default EmployeeRow;
