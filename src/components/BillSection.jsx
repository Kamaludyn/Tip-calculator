import { FaUser } from "react-icons/fa";

const BillSection = ({
  bill,
  setBill,
  numberOfPeople,
  setNumberOfPeople,
  custom,
  handleClick,
  handleCustom,
  isEmpty,
}) => {
  return (
    <div className="bill-section">
      <div className="bill-container">
        <label htmlFor="bill">Bill</label>
        <div>
          $
          <input
            id="bill"
            type="text"
            inputMode="numeric"
            placeholder="0"
            min="0"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>
      </div>

      <div className="tip-options">
        <h4>Select Tip %</h4>
        <div className="parent">
          <button onClick={handleClick} className="tip-percent">
            5%
          </button>
          <button onClick={handleClick} className="tip-percent">
            10%
          </button>
          <button onClick={handleClick} className="tip-percent">
            15%
          </button>
          <button onClick={handleClick} className="tip-percent">
            25%
          </button>
          <button onClick={handleClick} className="tip-percent">
            50%
          </button>
          <input
            type="text"
            inputMode="numeric"
            name="custom"
            id="custom"
            placeholder="Custom"
            min="1"
            value={custom}
            onChange={handleCustom}
          />
        </div>
      </div>

      <div className="people-input-container">
        <div>
          <label htmlFor="People">Number of People</label>
          <small id="error">{isEmpty ? "Can't be zero" : ""}</small>
        </div>
        <div className="input-div">
          <FaUser />
          <input
            id="no-of-people"
            type="text"
            inputMode="numeric"
            placeholder="0"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default BillSection;
