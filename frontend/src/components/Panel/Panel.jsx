import { useState } from "react";
import "./panel.css";
export const Panel = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  return (
    <div className="panel-top">
      <h2>Brief Look</h2>
      <div className="tabs">
        <button
          id="one"
          onClick={() => {
            setOne(true);
            setTwo(false);
            setThree(false);
          }}
          className={`tab-btn` + (one ? " active" : "")}
        >
          Weekly
        </button>
        <button
          id="two"
          onClick={() => {
            setOne(false);
            setTwo(true);
            setThree(false);
          }}
          className={`tab-btn` + (two ? " active" : "")}
        >
          Monthly
        </button>
        <button
          id="three"
          onClick={() => {
            setOne(false);
            setTwo(false);
            setThree(true);
          }}
          className={`tab-btn` + (three ? " active" : "")}
        >
          Last year
        </button>
      </div>
      <div className="activity">hello</div>
    </div>
  );
};
