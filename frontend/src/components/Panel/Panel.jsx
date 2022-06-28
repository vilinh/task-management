import "./panel.css";
export const Panel = () => {
  return (
    <div className="panel-top">
      <h2>Brief Look</h2>
      <div className="tabs">
        <button className="tab-btn">Weekly</button>
        <button className="tab-btn">Monthly</button>
        <button className="tab-btn">Last year</button>
      </div>
      <div className="activity">hello</div>
    </div>
  );
};
