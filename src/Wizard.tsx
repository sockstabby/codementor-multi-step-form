import { useState } from "react";

import Arcade from "../requirements/assets/images/icon-arcade.svg";
import Advanced from "../requirements/assets/images/icon-advanced.svg";
import Pro from "../requirements/assets/images/icon-pro.svg";
import Toggle from "../requirements/assets/images/toggle.png";

const Wizard = () => {
  const [current, setCurrent] = useState(0);
  const child1 = (
    <div>
      <div className="content-title">Personal Info</div>

      <div className="bottom-padding-200">
        Please provide your name, email address and phone number.
      </div>

      <div className="input-container  bottom-padding-100">
        <label className="color-gray input-labels"> Name</label>
        <input type="text" id="fname" name="fname"></input>
      </div>
      <div className="input-container bottom-padding-100">
        <label className="color-gray input-labels"> Email Address</label>
        <input type="text" id="fname" name="fname"></input>
      </div>
    </div>
  );

  const child2 = (
    <div>
      <div className="content-title">Select your plan</div>

      <div className="bottom-padding-200">
        You have the option of monthly or yearly billing.
      </div>

      <div className="plan-container  bottom-padding-100">
        <div className="plan-item">
          <img height={30} src={Arcade}></img>

          <div className="plan-text">
            <label className="plan-title"> Arcade</label>
            <label className="plan-subtitle"> $90/yr</label>
            <label className="months-free plan-subtitle"> 2 months free</label>
          </div>
        </div>
        <div className="plan-item">
          <img height={30} src={Advanced}></img>

          <div className="plan-text">
            <label className="plan-title"> Advanced</label>
            <label className="plan-subtitle"> $120/yr</label>
            <label className="months-free plan-subtitle"> 2 months free</label>
          </div>
        </div>
        <div className="plan-item selected">
          <img height={30} src={Pro}></img>

          <div className="plan-text">
            <label className="plan-title"> Pro</label>
            <label className="plan-subtitle"> $150/yr</label>
            <label className="months-free plan-subtitle"> 2 months free</label>
          </div>
        </div>
      </div>

      <div className="monthly-toggle-container row-container row-centered gap8">
        <label> Monthly</label>
        <img src={Toggle}></img>
        <label> Yearly</label>
      </div>
    </div>
  );

  const child3 = (
    <div>
      <div className="content-title">Pick add-ons</div>

      <div className="bottom-padding-200">
        Add-ons help enhance your gaming experience.
      </div>

      <div className="addons-container column-container gap8 bottom-padding-100">
        <div className="addon-item row-container">
          <input type="checkbox" checked></input>
          <div className="addon-text column-container">
            <label className="addon-title"> Online service</label>
            <label className="addon-subtitle">
              {" "}
              Access to multiplayer games
            </label>
          </div>
        </div>
        <div className="addon-item row-container selected">
          <input type="checkbox" checked></input>
          <div className="addon-text column-container">
            <label className="addon-title"> Larger storage</label>
            <label className="addon-subtitle"> Extra 1TB of cloud save</label>
          </div>
        </div>
        <div className="addon-item row-container selected">
          <input type="checkbox" checked></input>
          <div className="addon-text column-container">
            <label className="addon-title"> Customizable profile</label>
            <label className="addon-subtitle">
              {" "}
              Custom theme on your profile
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const child4 = (
    <div>
      <div className="content-title">Finishing up</div>

      <div className="bottom-padding-200">
        Double-check everything looks OK before confirming.
      </div>

      <div className="summary-container column-container bottom-padding-100">
        <div className="summary-plan-item row-container row-space-between  bottom-padding-100">
          <div className="summary-text column-container">
            <label className="summary-title"> Arcade (Monthly)</label>
            <a> Change</a>
          </div>
          <label className="summary-title"> $9/mo</label>
        </div>

        <div className="row-container row-space-between top-padding-100">
          <div className="summary-text column-container">
            <label className="summary-subtitle"> Online service</label>
          </div>
          <label className="summary-subtitle"> +$1/mo</label>
        </div>

        <div className="row-container row-space-between">
          <div className="summary-text column-container">
            <label className="summary-subtitle">Larger storage</label>
          </div>
          <label className="summary-subtitle"> +$2/mo</label>
        </div>
      </div>

      <div className="summary-total row-container row-space-between">
        <label className="summary-subtitle"> Total (per month) </label>
        <label className="summary-subtitle"> +$12/mo </label>
      </div>
    </div>
  );

  const stepMetadata = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

  const steps = [child1, child2, child3, child4];

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
          <label className="subtitle color-grayish-red step-labels">
            {`Step ${index + 1}`}{" "}
          </label>
          <label className="subtitle color-white step-labels"> {name}</label>
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
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wizard;
