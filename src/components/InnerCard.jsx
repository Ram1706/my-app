import React, { Component } from 'react';


class InnerCard extends Component {


  render() {
    return (
      <div className = "col-md-6">
         <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default InnerCard;
