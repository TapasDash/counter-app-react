import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import Counter from "./components/counter";

class App extends Component {
  state = {
    counters: [
      //counters is an array here
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    //we will use the filter() to get all the counters except the one with given counterId
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    //we want to override the counters properties with the counters constant
    this.setState({ counters }); //or {counters: counters}
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main>
          <Counters
            counters={this.state.counters}
            className="container"
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
