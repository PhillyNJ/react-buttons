import Button from "./button";
import styles from "./costplus.module.css";
import img from "../calculator.svg";
const CostPlus = (props) => {
  return (
    <div>
      <div className="card" styles={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            <img src={img} alt="cost plus" />
            Cost Plus
          </h5>
          <p className="card-text">Example calculator Goes Here</p>
          <Button value="Close" onClick={props.onClick} />
        </div>
      </div>
    </div>
  );
};

export default CostPlus;
