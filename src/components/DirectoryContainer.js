import React, { Component,} from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Employee from "./Employee";
import API from "../utils/API";
import ProductTable from './Table'




class DirectoryContainer extends Component {

  state = {
    firstName1: '',
    lastName1: '',
    location1: '',
    columns: '',
    data: '',
    id: 0,
    firstName2: '',
    lastName2: '',
    location2: '',
    firstName3: '',
    lastName3: '',
    location3: '',



    
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.renderNew();

  }

  renderNew = () => {
    

    API.search()
      .then(res => {
          let firstNamearray = []
          let lastNamearray = []
          let locationarray = []

          for (let i = 0; i < res.data.results.length; i++) {
            const e = res.data.results[i];
            // console.log(e)
            var firstName1 = res.data.results[0].name.first
            var lastName1 = res.data.results[0].name.last
            var location1 = res.data.results[0].location.country
            var firstName2 = res.data.results[1].name.first
            var lastName2 = res.data.results[1].name.last
            var location2 = res.data.results[1].location.country

            var id = e

            // firstNamearray.push(firstName)
            // lastNamearray.push(lastName)
            // locationarray.push(location)

            
          }
          // console.log(array)
          this.setState({ firstName: firstName1, lastName: lastName1, location: location1})
          this.setState({ firstName2: firstName2, lastName2: lastName2, location2: location2})

          // return firstNamearray, lastNamearray, location


        // console.log(res.data.results[0])
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
              id = {this.state.id}

            />
       <ProductTable
        people={[
          { name: this.state.firstName  + ' ' + this.state.lastName,  location: this.state.location },
          { name: this.state.firstName2  + ' ' + this.state.lastName2,  location: this.state.location2 },
          // { id: this.state.id, name: this.state.firstName  + ' ' + this.state.lastName,  location: this.state.location },
          // { id: this.state.id, name: this.state.firstName  + ' ' + this.state.lastName,  location: this.state.location },

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
