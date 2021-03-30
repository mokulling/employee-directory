import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Employee from "./Employee";
import API from "../utils/API";
import ProductTable from './Table'




class DirectoryContainer extends Component {

  state = {
    firstName: '',
    lastName: '',
    location: '',
    columns: '',
    data: '',
    
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.renderNew();
  }

  renderNew = () => {
    
    const empArray = []

    API.search()
      .then(res => {

        // console.log(res.data.results[0])
        var firstName = res.data.results[0].name.first
        var lastName = res.data.results[0].name.last
        var location = res.data.results[0].location.country
        // console.log(firstName + ' ' + lastName + location)
        this.setState({ firstName: firstName, lastName: lastName, location: location })
        empArray.push(firstName, lastName, location)
      })
      // console.log(empArray)
    // .catch(err => console.log(err));
  };



  render() {

    return (
      <Container>




        <Row>
          <Col size="md-8">

            <Employee
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              location={this.state.location}

            />
       <ProductTable
        people={[
          { id: 1, name: this.state.firstName,  location: this.state.location },
        ]}
      />
          </Col>
          <Col size="md-4">
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DirectoryContainer;
