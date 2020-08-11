import React, { Component } from "react";
import EmployeeRow from "./components/EmployeeRow";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import Search from "./components/Search"

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

  filterName = id => {
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  // Map over this.state.employees and render a EmployeeRow component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <Search></Search>

        {this.state.employees.map(employee => (
          <EmployeeRow
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            email={employee.email}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;