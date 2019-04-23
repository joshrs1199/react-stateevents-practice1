import React from "react";

class DogCard extends React.Component {
  
  state = {
    click: false
  }
  ruffClick = (event) => {
    this.setState({
      click: !this.state.click
    })
  }
  render() {
    const ruff = this.state.click ? "Ruff" : ""
    return (
      <div>
        <h2>{this.props.name}</h2>
        <img alt={this.props.name} src={this.props.picture}/>
        <br/>
        <button onClick={this.ruffClick}>Bark</button>
        <h3>{ruff}</h3>
      </div>
    );
  }
}

export default DogCard;
