import React, { useState } from "react";
import "./styles.css";

class Header extends React.Component {
  state = {
    number: 2,
    person: "steven"
  };

  render() {
    return (
      <div>
        {this.state.person}
        <button onClick={() => this.setState({ person: "jeff" })}></button>
      </div>
    );
  }
}

export default function App() {
  const [state, setState] = useState(2);

  return (
    <div className="App">
      <Header />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Appear adfa here</p>
    </div>
  );
}
