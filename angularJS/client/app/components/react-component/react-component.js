import React from "react";

export default class reactComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("Component mounting");
  }

  render() {
    return <h1>This is a react component</h1>;
  }
}
