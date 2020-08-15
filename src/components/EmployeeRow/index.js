import React from "react";
import "./style.css";

function EmployeeRow (props) {
  return (
  <tbody>
        <tr>
        <td>
          <img  alt={props.name} src={props.image} />
        </td>
        <td>{props.name}</td>
        <td>{props.occupation}</td>
        <td>{props.email}</td>
      </tr>
  </tbody>
  );
}

export default EmployeeRow;
