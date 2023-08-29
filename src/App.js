import React, { useState } from "react";
import "./App.css";
function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [currentValue, setCurrentValue] = useState("");
  const [operator, setOperator] = useState("");
  const [previousValue, setPreviousValue] = useState("");

  const handleNumberClick = (number) => {
    if (displayValue === "0" || currentValue === "0") {
      setDisplayValue(number.toString());
      setCurrentValue(number.toString());
    } else {
      setDisplayValue(currentValue + number.toString());
      setCurrentValue(currentValue + number.toString());
    }
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setPreviousValue(currentValue);
    setCurrentValue("");
  };

  const handleEqualClick = () => {
    if (operator === "+") {
      setDisplayValue((parseFloat(previousValue) + parseFloat(currentValue)).toString());
    } else if (operator === "-") {
      setDisplayValue((parseFloat(previousValue) - parseFloat(currentValue)).toString());
    } else if (operator === "x") {
      setDisplayValue((parseFloat(previousValue) * parseFloat(currentValue)).toString());
    } else if (operator === "÷") {
      setDisplayValue((parseFloat(previousValue) / parseFloat(currentValue)).toString());
    }
    setCurrentValue("");
    setPreviousValue("");
    setOperator("");
  };

  const handleClearClick = () => {
    setDisplayValue("0");
    setCurrentValue("");
    setPreviousValue("");
    setOperator("");
  };

  const handleDecimalClick = () => {
    if (!currentValue.includes(".")) {
      setDisplayValue(currentValue + ".");
      setCurrentValue(currentValue + ".");
    }
  };

  return (
    <div className="backaaa">
      <div className="container">
        <div className="container-1">
          <div className="screen">
            <div className="show">{displayValue}</div>
          </div>
          <div className="screen-2">
            <div className="buttons">
              <div  onClick={() => handleClearClick()} style={{ backgroundColor: "#a0a0a0" }} className="btn-1">
                AC
              </div>
              <div  onClick={() => handleClearClick()} style={{ backgroundColor: "#a0a0a0" }} className="btn-2">
                C
              </div>
              <div onClick={() => handleOperatorClick("%")} style={{ backgroundColor: "#a0a0a0" }} className="btn-3">
                %
              </div>
              <div onClick={() => handleOperatorClick("÷")} className="btn-4">÷</div>
            </div>
            <div className="buttons-2">
              <div onClick={() => handleNumberClick(7)}  style={{ backgroundColor: "#313131" }} className="btn-1">
                7
              </div>
              <div onClick={() => handleNumberClick(8)} style={{ backgroundColor: "#313131" }} className="btn-2">
                8
              </div>
              <div onClick={() => handleNumberClick(9)} style={{ backgroundColor: "#313131" }} className="btn-3">
                9
              </div>
              <div onClick={() => handleOperatorClick("x")} className="btn-4">x</div>
            </div>
            <div className="buttons-3">
              <div onClick={() => handleNumberClick(4)} style={{ backgroundColor: "#313131" }} className="btn-1">
                4
              </div>
              <div onClick={() => handleNumberClick(5)} style={{ backgroundColor: "#313131" }} className="btn-2">
                5
              </div>
              <div onClick={() => handleNumberClick(6)} style={{ backgroundColor: "#313131" }} className="btn-3">
                6
              </div>
              <div onClick={() => handleOperatorClick("-")} className="btn-4">-</div>
            </div>
            <div className="buttons-4">
              <div onClick={() => handleNumberClick(1)} style={{ backgroundColor: "#313131" }} className="btn-1">
                1
              </div>
              <div onClick={() => handleNumberClick(2)} style={{ backgroundColor: "#313131" }} className="btn-2">
                2
              </div>
              <div onClick={() => handleNumberClick(3)} style={{ backgroundColor: "#313131" }} className="btn-3">
                3
              </div>
              <div onClick={() => handleOperatorClick("+")} className="btn-4">+</div>
            </div>
            <div className="buttons-5">
              <div onClick={() => handleNumberClick(0)} style={{ backgroundColor: "#313131" }} className="btn-5">
                0
              </div>

              <div onClick={() => handleEqualClick()} style={{ backgroundColor: "#313131" }} className="btn-3">
                .
              </div>
              <div onClick={() => handleEqualClick()} className="btn-4">=</div>
            </div>
            <div className="buttons-6">
              <div className="tab-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
