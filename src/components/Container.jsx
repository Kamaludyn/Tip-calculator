import { useState } from "react";
import BillSection from "./BillSection";
import CalcSection from "./CalcSection";

const Container = () => {
  const [bill, setBill] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [custom, setCustom] = useState("");
  const [tip, setTip] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleClick = (e) => {
    if (!numberOfPeople) {
      setIsEmpty(true);
      return;
    } else {
      const tipPercent = parseInt(e.target.textContent.replace("%", ""));
      const billPercent = (bill / 100) * tipPercent;
      const amount = billPercent / numberOfPeople;
      const tipAmount = amount.toFixed(2);
      setTip(tipAmount);
      const total = (bill / numberOfPeople + amount).toFixed(2);
      setTotalAmount(total);
      setIsEmpty(false);
    }
  };

  const handleCustom = (e) => {
    if (!numberOfPeople) {
      setIsEmpty(true);

      return;
    } else {
      setCustom(e.target.value);
      const tipPercent = e.target.value;
      const billPercent = (bill / 100) * tipPercent;
      const amount = billPercent / numberOfPeople;
      const customTipAmount = amount.toFixed(2);

      setTip(customTipAmount);

      const total = (bill / numberOfPeople + amount).toFixed(2);
      setTotalAmount(total);
      setIsEmpty(false);
    }
  };

  const reset = () => {
    setBill("");
    setTip("0.00");
    setTotalAmount("0.00");
    setCustom("");
    setNumberOfPeople("");
    setIsEmpty(false);
  };

  return (
    <div className="container">
      <BillSection
        handleClick={handleClick}
        handleCustom={handleCustom}
        bill={bill}
        setBill={setBill}
        numberOfPeople={numberOfPeople}
        setNumberOfPeople={setNumberOfPeople}
        custom={custom}
        setCustom={setCustom}
        isEmpty={isEmpty}
      />
      <CalcSection reset={reset} tipAmount={tip} totalAmount={totalAmount} />
    </div>
  );
};

export default Container;
