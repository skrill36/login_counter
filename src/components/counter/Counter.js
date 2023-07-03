import { useState } from "react";
import style from "./Counter.module.css";
import Card from "../UI/Card";

const Counter = () => {
  const [value, setValue] = useState(0);

  const incrHandler = () => {
    setValue(value + 1);
  };
  const decrHandler = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <Card>
        <h1>{value}</h1>

        <span>
          <button className={style.button} onClick={decrHandler}>
            Decrement
          </button>
        </span>
        <span>
          <button className={style.button} onClick={incrHandler}>
            Increment
          </button>
        </span>
      </Card>
    </div>
  );
};

export default Counter;
