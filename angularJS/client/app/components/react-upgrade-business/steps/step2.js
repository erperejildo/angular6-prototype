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
      <div class="font-xl">Upgrade to business</div>
      <ul class="space font-s">
        <li>FREE 2 x 32kg checked bags</li>
        <li>complimentary food and drinks</li>
        <li>lounge access</li>
      </ul>

      <div class="grid">
        {options.map((option, index) => {
          return (
            <div
              className={option.checked ? "row active" : "row"}
              onClick={() => {
                chooseOption(index);
              }}
              key={index}
            >
              <div class="col col-s">
                <input
                  className="form-check-input"
                  type="radio"
                  name="upgradeOptions"
                  checked={option.checked}
                />
              </div>

              <div className="col col-l text-left">{option.option}</div>
              <div className="col col-m">
                <span className="font-l">£{option.price}</span>
                <span className="font-xs">pp</span>
              </div>
            </div>
          );
        })}
      </div>

      {options[0].checked || options[1].checked || options[2].checked ? (
        <button type="button" className="btn space" onClick={nextStep}>
          Upgrade now
        </button>
      ) : (
        <button type="button" className="btn btn-light space">
          I don't want to upgrade
        </button>
      )}
    </div>
  );
}

export default Step2;
