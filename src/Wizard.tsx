import { useState } from "react";
import SidebarDesktop from "../requirements/assets/images/bg-sidebar-desktop.svg";

const Wizard = () => {
  const [current, setCurrent] = useState(0);
  const child = (
    <div>
      <div className="content-title">Personal Info</div>

      <div className="bottom-padding-200">
        Please provide your name, email address and phone number.
      </div>

      <div className="input-container  bottom-padding-100">
        <label className="color-gray"> Name</label>
        <input type="text" id="fname" name="fname"></input>
      </div>
      <div className="input-container bottom-padding-100">
        <label className="color-gray"> Email Address</label>
        <input type="text" id="fname" name="fname"></input>
      </div>
    </div>
  );

  const stepMetadata = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

  const steps = [child, child];

  const inc = () => {
    console.log("inc");
    setCurrent(current + 1);
  };

  const dec = (e: React.MouseEvent<HTMLElement>) => {
    console.log("dec");

    if (current === 0) {
      e.preventDefault();
      return;
    }

    setCurrent(current - 1);
  };

  const createStatusItem = (name, index, active) => {
    return (
      <div key={"" + index} className="row-container uppercase">
        <svg height="60" width="60">
          <g>
            <circle
              cx="30"
              cy="30"
              r="15"
              stroke="white"
              strokeWidth="1"
              fill={active ? "#a8d3f8" : "transparent"}
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              stroke={active ? "#483eff" : "white"}
              strokeWidth="1.0px"
              fontSize="11px"
              dy=".3em"
              fontFamily="sans-serif"
            >
              {index + 1}
            </text>
          </g>
        </svg>
        <div className="column-container">
          <label className="subtitle color-grayish-red">
            {`Step ${index + 1}`}{" "}
          </label>
          <label className="subtitle color-white"> {name}</label>
        </div>
      </div>
    );
  };

  const statusWidgets = stepMetadata.map((i, idx) =>
    createStatusItem(i, idx, current === idx)
  );

  let disabledNext;
  if (current < steps.length - 1) {
    disabledNext = false;
  } else {
    disabledNext = true;
  }

  return (
    <div className="wizard color-black wizard-background ">
      <div className="wizard-status-panel">{statusWidgets}</div>
      <div className="wizard-forms-panel">
        {steps[current]}

        <div className="nav-control-buttons">
          <a onClick={dec}>Go Back</a>
          <button disabled={disabledNext} onClick={inc}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wizard;
