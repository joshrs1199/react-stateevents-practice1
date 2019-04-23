import React, { Component } from "react";
import DogCard from "../Components/DogCard.js"

class DogList extends Component {
  state = {
    dogs: []
  }
  componentDidMount(){
    fetch('http://localhost:3005/dogs')
    .then((response) => {
      return response.json()
    }).then((dog) => {
      this.setState({
        dogs: dog
      })
    })
  }
  render() {
    return <div className="dogContainer">
    {this.state.dogs.map((dog) => {
      return <DogCard name={dog.name} picture={dog.img} />
    })
    }
    </div>
  }
}

export default DogList;
