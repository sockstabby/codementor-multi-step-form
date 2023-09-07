import { useEffect, useReducer, useState } from "react";

import Arcade from "../requirements/assets/images/icon-arcade.svg";
import Advanced from "../requirements/assets/images/icon-advanced.svg";
import Pro from "../requirements/assets/images/icon-pro.svg";
import ThankYouIcon from "../requirements/assets/images/icon-thank-you.svg";

type Action =
  | { type: "setArcadePlan" }
  | { type: "setAdvancedPlan" }
  | { type: "setProPlan" }
  | { type: "toggleOnlineService" }
  | { type: "toggleStorage" }
  | { type: "toggleCustomProfile" }
  | { type: "setName"; value: string }
  | { type: "setEmail"; value: string }
  | { type: "setPhone"; value: string }
  | { type: "setNextButtonEnabled"; value: boolean }
  | { type: "toggleYearly" };

type PlanType = "Arcade" | "Advanced" | "Pro";

type WizardState = {
  selectedPlan: PlanType;
  addonOnlineService: boolean;
  addonStorage: boolean;
  addonCustomProfile: boolean;
  name: string;
  email: string;
  phone: string;
  nextButtonEnabled: boolean;
  yearlyPlan: boolean;
};

type ReducerProps = {
  dispatch: React.Dispatch<Action>;
  state: WizardState;
};

function reducer(state: WizardState, action: Action) {
  console.log("Reducer called ", action.type);
  if (action.type === "setArcadePlan") {
    const planType: PlanType = "Arcade";
    return {
      ...state,
      selectedPlan: planType,
    };
  }

  if (action.type === "setAdvancedPlan") {
    const planType: PlanType = "Advanced";
    return {
      ...state,
      selectedPlan: planType,
    };
  }

  if (action.type === "setProPlan") {
    const planType: PlanType = "Pro";
    return {
      ...state,
      selectedPlan: planType,
    };
  }

  ///////////

  if (action.type === "toggleOnlineService") {
    return {
      ...state,
      addonOnlineService: !state.addonOnlineService,
    };
  }

  if (action.type === "toggleStorage") {
    return {
      ...state,
      addonStorage: !state.addonStorage,
    };
  }

  if (action.type === "toggleCustomProfile") {
    return {
      ...state,
      addonCustomProfile: !state.addonCustomProfile,
    };
  }

  ///////////

  if (action.type === "setName") {
    return {
      ...state,
      name: action.value,
    };
  }

  if (action.type === "setEmail") {
    return {
      ...state,
      email: action.value,
    };
  }

  if (action.type === "setPhone") {
    return {
      ...state,
      phone: action.value,
    };
  }

  if (action.type === "setNextButtonEnabled") {
    return {
      ...state,
      nextButtonEnabled: action.value,
    };
  }

  if (action.type === "toggleYearly") {
    console.log("all good");
    return {
      ...state,
      yearlyPlan: !state.yearlyPlan,
    };
  }

  throw Error("Unknown action.");

  return { ...state };
}

const PersonalInfo = ({ dispatch, state }: ReducerProps) => {
  const setName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setName", value: e.target.value });
  };
  const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setEmail", value: e.target.value });
  };
  const setPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setPhone", value: e.target.value });
  };

  useEffect(() => {
    if (state.name !== "" && state.email !== "" && state.phone !== "") {
      dispatch({ type: "setNextButtonEnabled", value: true });
    } else {
      dispatch({ type: "setNextButtonEnabled", value: false });
    }
  }, []);

  return (
    <div>
      <div className="content-title">Personal Info</div>

      <div className="bottom-padding-200">
        Please provide your name, email address and phone number.
      </div>

      <div className="input-container  bottom-padding-100">
        <div className="row-container row-space-between grow-h">
          <label className="color-gray input-labels"> Name</label>
          {state.name === "" && (
            <label className="color-error input-labels">
              This field is required.
            </label>
          )}
        </div>

        <input type="text" value={state.name} onChange={setName}></input>
      </div>
      <div className="input-container bottom-padding-100">
        <div className="row-container row-space-between grow-h">
          <label className="color-gray input-labels"> Email Address</label>
          {state.email === "" && (
            <label className="color-error input-labels">
              This field is required.
            </label>
          )}
        </div>
        <input type="text" value={state.email} onChange={setEmail}></input>
      </div>
      <div className="input-container bottom-padding-100">
        <div className="row-container row-space-between grow-h">
          <label className="color-gray input-labels"> Phone Number</label>

          {state.phone === "" && (
            <label className="color-error input-labels">
              This field is required.
            </label>
          )}
        </div>

        <input type="text" value={state.phone} onChange={setPhone}></input>
      </div>
    </div>
  );
};

const PlanSelector = ({ dispatch, state }: ReducerProps) => {
  console.log("state.yearlyPlan", state.yearlyPlan);
  const toggleYearly = () => {
    dispatch({ type: "toggleYearly" });
  };

  return (
    <div>
      <div className="content-title">Select your plan</div>

      <div className="bottom-padding-200">
        You have the option of monthly or yearly billing.
      </div>

      <div className="plan-container  bottom-padding-100">
        <div
          className={`plan-item ${
            state.selectedPlan === "Arcade" ? "selected" : ""
          }`}
          onClick={() => dispatch({ type: "setArcadePlan" })}
        >
          {" "}
          <img height={30} src={Arcade}></img>
          <div className="plan-text">
            <label className="plan-title"> Arcade</label>
            <label className="plan-subtitle">
              {state.yearlyPlan ? "$90/yr" : "$9/mo"}
            </label>
            <label className="months-free plan-subtitle"> 2 months free</label>
          </div>
        </div>
        <div
          className={`plan-item ${
            state.selectedPlan === "Advanced" ? "selected" : ""
          }`}
          onClick={() => dispatch({ type: "setAdvancedPlan" })}
        >
          <img height={30} src={Advanced}></img>

          <div className="plan-text">
            <label className="plan-title"> Advanced</label>
            <label className="plan-subtitle">
              {state.yearlyPlan ? "$120/yr" : "$12/mo"}
            </label>
            <label className="months-free plan-subtitle"> 2 months free</label>
          </div>
        </div>
        <div
          className={`plan-item ${
            state.selectedPlan === "Pro" ? "selected" : ""
          }`}
          onClick={() => dispatch({ type: "setProPlan" })}
        >
          <img height={30} src={Pro}></img>

          <div className="plan-text">
            <label className="plan-title"> Pro</label>
            <label className="plan-subtitle">
              {state.yearlyPlan ? "$150/yr" : "$15/mo"}
            </label>
            <label className="months-free plan-subtitle"> 2 months free</label>
          </div>
        </div>
      </div>

      <div className="monthly-toggle-container row-container row-centered gap8">
        <label
          className={
            !state.yearlyPlan ? "active-duration" : "inactive-duration"
          }
        >
          Monthly
        </label>
        <div className="toggle-wrapper">
          <input
            type="checkbox"
            id="switch"
            checked={state.yearlyPlan}
            onChange={toggleYearly}
          />
          <label htmlFor="switch">Toggle</label>
        </div>
        <label
          className={state.yearlyPlan ? "active-duration" : "inactive-duration"}
        >
          Yearly
        </label>
      </div>
    </div>
  );
};

const AddonSelector = ({ dispatch, state }: ReducerProps) => {
  const toggleOnlineService = () => {
    dispatch({ type: "toggleOnlineService" });
  };

  const toggleStorage = () => {
    dispatch({ type: "toggleStorage" });
  };

  const toggleCustomProfile = () => {
    dispatch({ type: "toggleCustomProfile" });
  };

  return (
    <div>
      <div className="content-title">Pick add-ons</div>

      <div className="bottom-padding-200">
        Add-ons help enhance your gaming experience.
      </div>

      <div className="addons-container column-container gap8 bottom-padding-100">
        <div
          onClick={toggleOnlineService}
          className={`addon-item row-space-between row-container ${
            state.addonOnlineService ? "selected" : ""
          } `}
        >
          <div className="row-container">
            <input
              type="checkbox"
              checked={state.addonOnlineService}
              onChange={() => {}}
            ></input>
            <div className="addon-text column-container">
              <label className="addon-title"> Online service</label>
              <label className="addon-subtitle">
                Access to multiplayer games
              </label>
            </div>
          </div>

          <div>
            <label> {state.yearlyPlan ? "+$10/yr" : "+$1/mo"} </label>
          </div>
        </div>
        <div
          onClick={toggleStorage}
          className={`addon-item row-space-between row-container ${
            state.addonStorage ? "selected" : ""
          } `}
        >
          <div className="row-container">
            <input
              type="checkbox"
              checked={state.addonStorage}
              onChange={() => {}}
            ></input>
            <div className="addon-text column-container">
              <label className="addon-title"> Larger storage</label>
              <label className="addon-subtitle"> Extra 1TB of cloud save</label>
            </div>
          </div>
          <div>
            <label> {state.yearlyPlan ? "+$20/yr" : "+$2/mo"} </label>
          </div>
        </div>
        <div
          onClick={toggleCustomProfile}
          className={`addon-item row-space-between row-container ${
            state.addonCustomProfile ? "selected" : ""
          } `}
        >
          <div className="row-container">
            <input
              type="checkbox"
              checked={state.addonCustomProfile}
              onChange={() => {}}
            ></input>
            <div className="addon-text column-container">
              <label className="addon-title"> Customizable profile</label>
              <label className="addon-subtitle">
                Custom theme on your profile
              </label>
            </div>
          </div>
          <div>
            <label> {state.yearlyPlan ? "+$20/yr" : "+$2/mo"} </label>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

const SummaryConfirm = ({ state }: ReducerProps) => {
  const addOns = [];

  const totals = [];

  let planCostLabel;

  if (state.selectedPlan === "Arcade") {
    planCostLabel = state.yearlyPlan ? "$90/yr" : "$9/mo";
    totals.push(state.yearlyPlan ? 90 : 9);
  }
  if (state.selectedPlan === "Advanced") {
    planCostLabel = state.yearlyPlan ? "$120/yr" : "$12/mo";
    totals.push(state.yearlyPlan ? 120 : 12);
  }
  if (state.selectedPlan === "Pro") {
    planCostLabel = state.yearlyPlan ? "$150/yr" : "$15/mo";
    totals.push(state.yearlyPlan ? 150 : 15);
  }

  if (state.addonOnlineService) {
    totals.push(state.yearlyPlan ? 10 : 1);
    addOns.push({
      addOn: "Online service",
      costLabel: state.yearlyPlan ? "+$10/yr" : "+$1/mo",
    });
  }

  if (state.addonStorage) {
    totals.push(state.yearlyPlan ? 20 : 2);

    addOns.push({
      addOn: "Larger storage",
      costLabel: state.yearlyPlan ? "+$20/yr" : "+$2/mo",
    });
  }

  if (state.addonCustomProfile) {
    totals.push(state.yearlyPlan ? 20 : 2);

    addOns.push({
      addOn: "Customizable profile",
      costLabel: state.yearlyPlan ? "+$20/yr" : "+$2/mo",
    });
  }

  const grandTotal = totals.reduce((acc, current) => {
    return acc + current;
  }, 0);

  const grandTotalLabel = state.yearlyPlan
    ? `$${grandTotal}/yr`
    : `$${grandTotal}/mo`;

  const addOnsJSX = addOns.map((i) => {
    return (
      <div className="row-container row-space-between top-padding-100">
        <div className="summary-text column-container">
          <label className="summary-subtitle">{i.addOn}</label>
        </div>
        <label className="summary-subtitle"> {i.costLabel}</label>
      </div>
    );
  });

  return (
    <div>
      <div className="content-title">Finishing up</div>

      <div className="bottom-padding-200">
        Double-check everything looks OK before confirming.
      </div>

      <div className="summary-container column-container bottom-padding-100">
        <div className="summary-plan-item row-container row-space-between  bottom-padding-100">
          <div className="summary-text column-container">
            <label className="summary-title">
              {state.selectedPlan} {state.yearlyPlan ? "(Yearly)" : "(Monthly)"}
            </label>
            <a> Change</a>
          </div>
          <label className="summary-title">{planCostLabel}</label>
        </div>

        {addOnsJSX}
      </div>

      <div className="summary-total row-container row-space-between">
        <label className="summary-subtitle">
          {" "}
          Total (per {state.yearlyPlan ? "year" : "month"})
        </label>
        <label className="summary-subtitle"> {grandTotalLabel} </label>
      </div>
    </div>
  );
};

const ThankYou = () => {
  return (
    <div className="row-container row-centered grow-v">
      <div className="column-container col-centered grow-v gap8">
        <img height={100} src={ThankYouIcon}></img>
        <div className="content-title">Thank you!</div>
        <p className="text-align-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </div>
  );
};

const initialState: WizardState = {
  selectedPlan: "Arcade",
  addonOnlineService: false,
  addonStorage: false,
  addonCustomProfile: false,
  name: "Eric",
  email: "erockp1@gmail.com",
  phone: "709-234-5654",
  nextButtonEnabled: false,
  yearlyPlan: false,
};

const Wizard = () => {
  const [current, setCurrent] = useState(0);

  // each child can pass its own reducer function
  // we will call all reducers of our children
  // this will simulate redux but wont contain all the boilerplate

  const [state, dispatch] = useReducer(reducer, initialState);

  const stepMetadata = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

  const steps = [
    <PersonalInfo dispatch={dispatch} state={state as WizardState} />,
    <PlanSelector dispatch={dispatch} state={state as WizardState} />,
    <AddonSelector dispatch={dispatch} state={state as WizardState} />,
    <SummaryConfirm dispatch={dispatch} state={state as WizardState} />,
    <ThankYou />,
  ];

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

  const createStatusItem = (name: string, index: number, active: boolean) => {
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

  const confirmClicked = () => {
    console.log("confirm clicked");
    inc();
  };

  let lastPage = false;

  if (current >= steps.length - 2) {
    lastPage = true;
  }

  let thankYouPage = false;
  if (current >= steps.length - 1) {
    thankYouPage = true;
  }

  return (
    <div className="wizard color-black wizard-background ">
      <div className="wizard-status-panel">{statusWidgets}</div>
      <div className="wizard-forms-panel">
        {steps[current]}

        {!thankYouPage && (
          <div className="nav-control-buttons">
            <a onClick={dec}>Go Back</a>

            {lastPage ? (
              <button onClick={confirmClicked}>Confirm</button>
            ) : (
              <button disabled={!state.nextButtonEnabled} onClick={inc}>
                Next Step
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wizard;
