import React, { useState } from "react";
import styles from "./radiobutton.module.css";
import icon from "../calculator.svg";
const RadioButton = (props) => {
  const [radioState, setRadioState] = useState("");
  const onRadioChange = (event) => {
    props.onChangeValue(event);
    setRadioState(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.radioTileGroup}>
        {props.items.map((i) => {
          return (
            <div key={i.value} className={styles.inputContainer}>
              <input
                id={i.value}
                className={styles.radioButton}
                type="radio"
                name="radio"
                value={i.value}
                onChange={onRadioChange}
                checked={radioState === i.value && props.radioActive}
              />
              <div className={styles.radioTile}>
                <div className={(styles.icon, styles.walk, styles.icon)}>
                  <img src={icon} className={styles.icon} alt="" />
                </div>
                <label className={styles.radioTileLabel}>{i.text}</label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioButton;
