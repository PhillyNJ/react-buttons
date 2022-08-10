import React, { useState } from "react";
import Button from "./components/button";
import "./App.css";
import RadioButton from "./components/radiobutton";
import { RadioItem } from "./components/models/radio.model";
import CostPlus from "./components/costplus";

function App() {
  const items = [
    new RadioItem("Cost Plus", "cost", true),
    new RadioItem("Margin Plus", "margin", false),
    new RadioItem("Msrp Plus", "msrp", false),
    new RadioItem("Cost f/Msrp", "cmrp", false),
  ];
  const [selectedCalc, setSelectedCalc] = useState("");
  const [isCalcActive, setIsCalcActive] = useState(false);
  const onChangeValueHandler = (event) => {
    setSelectedCalc(event.target.value);
    setIsCalcActive(true);
  };
  const onCloseCalcHandler = () => {
    setSelectedCalc("");
    setIsCalcActive(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <RadioButton
            items={items}
            onChangeValue={onChangeValueHandler}
            radioActive={isCalcActive}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {selectedCalc === "cost" && <CostPlus onClick={onCloseCalcHandler} />}
        </div>
      </div>
    </div>
  );
}

export default App;
