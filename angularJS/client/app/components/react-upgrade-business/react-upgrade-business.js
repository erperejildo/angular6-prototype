import React, { Component } from "react";
import Step1 from "./steps/step1.js";
import Step2 from "./steps/step2.js";
import Step3 from "./steps/step3.js";
import "./upgrade.css";
import "animate.css/animate.min.css";

class Upgrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: [true, false, false],
      options: [
        {
          option: "Outbound flight",
          price: "1082",
          checked: false
        },
        {
          option: "Inbound flight",
          price: "1172",
          checked: false
        },
        {
          option: "Both ways",
          price: "1742",
          checked: false
        }
      ]
    };
    this.nextStep = this.nextStep.bind(this);
    this.chooseOption = this.chooseOption.bind(this);
  }

  nextStep() {
    let newStep = this.state.step;
    if (this.state.step[0] === true) {
      newStep = [false, true, false];
    } else if (this.state.step[1] === true) {
      newStep = [false, false, true];
    }
    this.setState({ step: newStep });
  }

  chooseOption(index) {
    let newOptions = this.state.options;
    newOptions.map((option, i) => {
      if (newOptions[i].option == newOptions[index].option) {
        option.checked = true;
      } else {
        option.checked = false;
      }
    });
    this.setState({ options: newOptions });
  }

  render() {
    return (
      <div className="upgrade-business text-center">
        <div>
          <Step1 nextStep={this.nextStep} shown={this.state.step[0]} />
          <Step2
            nextStep={this.nextStep}
            options={this.state.options}
            chooseOption={this.chooseOption}
            shown={this.state.step[1]}
            hidden={this.state.step[2]}
          />
          <Step3 shown={this.state.step[2]} />
        </div>
      </div>
    );
  }
}

export default Upgrade;
