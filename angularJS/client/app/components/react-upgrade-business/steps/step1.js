import React from "react";

function Step1({ nextStep, shown }) {
  return (
    <div className={shown ? "step step1" : "step step1 animated slideOutLeft"}>
      <h3>Upgrade to business</h3>

      <div className="one-way mt-5 font-s">one way from</div>
      <div className="font-xxl">£189</div>

      <ul className="list-unstyled mt-3 mb-4">
        <li>FREE 2 x 32kg checked bags</li>
        <li>complimentary food and drinks</li>
        <li>lounge access</li>
      </ul>
      <footer>
        <button
          type="button"
          className="btn btn-light btn-block"
          onClick={nextStep}
        >
          Show me more
        </button>
      </footer>
    </div>
  );
}

export default Step1;
