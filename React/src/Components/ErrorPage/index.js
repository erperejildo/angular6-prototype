import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      redirectTimer: 5
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.countDown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  countDown = () => {
    if (this.state.redirectTimer < 2) {
      this.setState({ shouldRedirect: true });
    } else {
      let timer = this.state.redirectTimer;
      timer--;
      this.setState({ redirectTimer: timer });
    }
  };

  render() {
    console.log("this.state", this.state);
    return this.state.shouldRedirect ? (
      <Redirect to="/" />
    ) : (
      <div className="text-center">
        <h1>404 page not found</h1>
        redirecting home in {this.state.redirectTimer} seconds
      </div>
    );
  }
}

export default ErrorPage;
