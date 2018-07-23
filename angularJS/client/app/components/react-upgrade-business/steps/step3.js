import React from "react";

function Step3({ shown }) {
  return (
    <div
      className={
        shown ? "step step3 animated slideInRight" : "step step3 hidden"
      }
    >
      <h4>Upgrade to business</h4>
      <ul className="list-unstyled font-s mt-4">
        <li>FREE 2 x 32kg checked bags</li>
        <li>complimentary food and drinks</li>
        <li>lounge access</li>
      </ul>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/2000px-White_check.svg.png"
        className={
          shown ? "revealCheck check mt-4 mb-2" : "check hideCheck mt-4 mb-2"
        }
      />
      <div
        className={
          shown
            ? "font-s animated bounceIn upgradedMessageShow"
            : "font-s upgradedMessageHidden"
        }
      >
        Outbound flight upgraded
      </div>
    </div>
  );
}

export default Step3;
