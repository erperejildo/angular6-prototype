import React from "react";

function Step2({ options, chooseOption, nextStep, shown, hidden }) {
  return (
    <div
      className={
        shown
          ? "step step2 animated slideInRight"
          : hidden
            ? "step step2 animated slideOutLeft"
            : "step step2 hidden"
      }
    >
      <h5>Upgrade to business</h5>
      <ul className="list-unstyled font-s mt-4">
        <li>FREE 2 x 32kg checked bags</li>
        <li>complimentary food and drinks</li>
        <li>lounge access</li>
      </ul>

      {options.map((option, index) => {
        return (
          <div
            className={option.checked ? "row checkedOption" : "row"}
            onClick={() => {
              chooseOption(index);
            }}
          >
            <div className="col-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="upgradeOptions"
                  checked={option.checked}
                />
              </div>
            </div>
            <div className="col-6 text-left font-s">{option.option}</div>
            <div className="col-4 text-right">
              <span className="font-l">£{option.price}</span>
              <span className="font-xs">pp</span>
            </div>
          </div>
        );
      })}

      {options[0].checked || options[1].checked || options[2].checked ? (
        <button
          type="button"
          className="btn btn-light btn-block mt-3"
          onClick={nextStep}
        >
          Upgrade now
        </button>
      ) : (
        <button type="button" className="btn btn-outline-light btn-block mt-3">
          I don't want to upgrade
        </button>
      )}
    </div>
  );
}

export default Step2;
