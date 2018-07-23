import React from "react";

export default class reactComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("Component mounting");
  }

  render() {
    return React.DOM.div({}, "This is a react component");
  }
}
