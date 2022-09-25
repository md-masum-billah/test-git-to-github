import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 100,
    imageUrl: "https://picsum.photos/300",
  };
  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }
  formatCount() {
    return this.state.count === 0 ? <h1>Zero</h1> : this.state.count;
  }
}
export default Counter;
