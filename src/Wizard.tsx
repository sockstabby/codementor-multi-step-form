import { useState } from "react";
import SidebarDesktop from "../requirements/assets/images/bg-sidebar-desktop.svg";

const Wizard = () => {
  const [current, setCurrent] = useState(0);
  const child = (
    <div>
      <div className="section-name">Personal Info</div>

      <div className="section-instruction bottom-padding-200">
        Please provide your name, email address and phone number.
      </div>

      <div className="input-container  bottom-padding-100">
        <label> Name</label>
        <input
          className="bottom-padding-100"
          type="text"
          id="fname"
          name="fname"
        ></input>
      </div>
      <div className="input-container  bottom-padding-100">
        <label> Email Address</label>
        <input
          className="bottom-padding-100"
          type="text"
          id="fname"
          name="fname"
        ></input>
      </div>
    </div>
  );

  const steps = [child, child];

  const inc = () => {
    setCurrent(current + 1);
  };

  const dec = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="wizard">
      <div className="wizard-status-panel"></div>

      <div className="wizard-forms-panel">
        {steps[current]}

        <div className="nav-control-buttons">
          <button disabled={current === steps.length - 1} onClick={inc}>
            Go Back
          </button>
          <button disabled={current === 0} onClick={dec}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wizard;
