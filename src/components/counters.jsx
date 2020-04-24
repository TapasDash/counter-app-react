import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters } = this.props;
    //Here we are picking out properties individually from props which are listed in the left
    //and storing it in the variable with same name as that of those properties

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            // we are passing refernece of the handleDelete so that in counter compoment using props we can use onDelete attribute
            //as we know the component can handle their state data...but if we try to change data throgh its child class..it won't happen i.e through props
            //we can't change data of the parent state..coz its read only..so the child component have to raise the event..and parent compont
            //have to handle i.e handleDelete
            value={counter.value}
            id={counter.id}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
