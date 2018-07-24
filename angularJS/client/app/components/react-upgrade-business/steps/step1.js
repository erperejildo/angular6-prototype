import React from "react";

function Step1({ nextStep, shown }) {
  return (
    <div className={shown ? "step step1" : "step step1 animated slideOutLeft"}>
      <div class="font-xxl">
        Upgrade
        <br />to business
      </div>

      <div className="one-way font-s">one way from</div>
      <div className="font-xxxl">£189</div>

      <ul className="space">
        <li>FREE 2 x 32kg checked bags</li>
        <li>complimentary food and drinks</li>
        <li>lounge access</li>
      </ul>
      <footer>
        <button type="button" className="btn" onClick={nextStep}>
          Show me more
        </button>
      </footer>
    </div>
  );
}

export default Step1;
