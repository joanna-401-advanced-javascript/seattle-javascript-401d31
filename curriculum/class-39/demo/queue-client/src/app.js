import React from "react";
import Q from "./lib/subscriber.js";
const database = new Q("database");

class App extends React.Component {
  constructor(props) {
    super(props);
    database.subscribe("create", this.newRecord);
    this.state = {
      actions: []
    };
  }

  newRecord = payload => {
    this.setState({ actions: [...this.state.actions, payload] });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Database Actions</h2>
        <ul>
          {this.state.actions.map((action, i) => (
            <li key={i}>
              {action.action} - {action.collection} - {action.id}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
