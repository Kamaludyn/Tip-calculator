const CalcSection = ({ tipAmount, totalAmount, reset }) => {
  return (
    <div className="calc-section">
      <div className="tip">
        <p>
          Tip Amount <br /> <small>/ person</small>
        </p>
        <p className="tip-amount">${tipAmount || "0.00"}</p>
      </div>

      <div className="total-amount">
        <p>
          Total <br /> <small>/ person</small>
        </p>
        <p id="total">${totalAmount || "0.00"}</p>
      </div>
      <button onClick={reset} className="reset-btn" id="reset-btn">
        Reset
      </button>
    </div>
  );
};

export default CalcSection;
