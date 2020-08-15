import React, { Component } from "react";
import EmployeeRow from "./components/EmployeeRow";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import Search from "./components/Search";
import Button from "./components/Button"

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

  originalState = {
    employees
  };

  filterName = event => {
    
    const employees = this.originalState.employees.filter(employee => employee.name.toLowerCase().includes(event.target.value.toLowerCase()));
    
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  sort = () => {
    const sortEmployees = employees.sort((a,b) =>{
     if (a.name < b.name) {
        return -1;
     } if (a.name > b.name) {
       return 1;
     }
     return 0;
    });

    this.setState({sortEmployees});
  };
  // Map over this.state.employees and render a EmployeeRow component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
    <Search filterName = {this.filterName}/>  
        <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col-4">Photo</th>
          <th scope="col-4">Name
            <Button  sort= {this.sort}></Button>
          </th>
          <th scope="col-4">Occupation</th>
          <th scope="col-4">Email</th>
          </tr>
      </thead>

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
      </table>

      </Wrapper>
    );
  }
}

export default App;
