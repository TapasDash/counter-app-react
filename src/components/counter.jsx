import React, { Component } from "react";
class Counter extends Component {
  //state is a special property in the react component to pass down data to render in the react component

  //we can use here arrow functions as they don't remind that this keywowrd the y inherited

  render() {
    console.log("props", this.props);
    //every react component has props property which is a plain JavaScript Obj
    //which has all attributes of valueers component i. value and selected except key
    //coz key is a special attribute to uniquely identify the elements
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" />  */}
        <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} //while calling
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          //its the reference of handleDelete of parent component which is being passed down to its child
          //through props
          className="btn btn-danger btn-small m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatvalue() {
    const { value } = this.props.counter; //we are picking up the value property of obj state and storing into the sepate const called value
    return value === 0 ? "Zero" : value; //value insted of this.props.counter.value
  }
}

export default Counter;
